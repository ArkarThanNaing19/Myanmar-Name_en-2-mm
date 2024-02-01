function isMyanmarUnicode(s) {
    let regex = /^[\u1000-\u109F]*$/;
    return regex.test(s);
}

function convert() {
    const name = document.getElementById('name').value;
    let result = "";
    if(isMyanmarUnicode(name)) {
        result = mmToEn(name);

    }
    else {
        result = enToMy(name);
    }

    document.getElementById('result').innerHTML = result;
    
}