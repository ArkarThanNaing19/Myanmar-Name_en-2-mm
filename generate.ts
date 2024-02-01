import * as fs from 'fs';
import csv from 'csv-parser';

const dict: { [key: string]: [string] } = {};
const myDict: { [key: string]: [string] } = {};

fs.createReadStream('MyanmarName-en-mm.csv')
  .pipe(csv())
  .on('data', (row) => {
    if(dict[row['အင်္ဂလိပ်']] == undefined) {
        dict[row['အင်္ဂလိပ်']] = [row['Myanmar']];
    } 
    else {
        dict[row['အင်္ဂလိပ်']].push(row['Myanmar']);
    }
    if(myDict[row['Myanmar']] == undefined) {
        myDict[row['Myanmar']] = [row['အင်္ဂလိပ်']];
    }
    else {
        myDict[row['Myanmar']].push(row['အင်္ဂလိပ်']);
    }
  })
  .on('end', () => {
    //console.log(JSON.stringify(dict));
    fs.writeFileSync('en-mm.json', JSON.stringify(dict));
    fs.writeFileSync('mm-en.json', JSON.stringify(myDict));
  });