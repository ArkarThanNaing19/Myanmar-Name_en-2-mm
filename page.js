function testMyanmarUnicode(s) {
    let regex = /^[\u1000-\u109F]*$/;
    return regex.test(s);
}

function convert() {
    const name = getInputValue('name');
    let result = determineConversion(name);
    setOutputValue('result', result);
}

function getInputValue(id) {
    return document.getElementById(id).value;
}

function determineConversion(name) {
    if(testMyanmarUnicode(name)) {
        return mmToEn(name);
    } else {
        return enToMy(name);
    }
}

function setOutputValue(id, value) {
    document.getElementById(id).innerHTML = value;
}