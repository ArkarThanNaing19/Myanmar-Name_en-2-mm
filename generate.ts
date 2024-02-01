import * as fs from 'fs';
import csv from 'csv-parser';

const dict: { [key: string]: [string] } = {};
const myDict: { [key: string]: [string] } = {};

fs.createReadStream('MyanmarName-en-mm.csv')
    .pipe(csv())
    .on('data', (row) => {
        updateDict(dict, row['အင်္ဂလိပ်'], row['Myanmar']);
        updateDict(myDict, row['Myanmar'], row['အင်္ဂလိပ်']);
    })
    .on('end', () => {
        writeToFile('en-mm.json', dict);
        writeToFile('mm-en.json', myDict);
    });

function updateDict(dictionary: { [key: string]: [string] }, key: string, value: string) {
    if(dictionary[key] == undefined) {
        dictionary[key] = [value];
    } 
    else {
        dictionary[key].push(value);
    }
}

function writeToFile(filename: string, data: Object) {
    fs.writeFileSync(filename, JSON.stringify(data));
}