function capitalize(s) {
    if (s === null) {
        throw new Error("Cannot capitalize null");
    }

    if (s === "") {
        return "";
    }

    if (/^[A-Za-z]+$/.test(s)) {
        return s[0].toUpperCase() + s.slice(1).toLowerCase();
    } else {
        throw new Error("Cannot capitalize non-alphabetic string");
    }
}

function reverseString(s) {
    if (s === null) {
        throw new Error("Cannot reverse null string");
    }

    return s.split("").reverse().join("");
}

const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    divide: (a, b) => a / b,
    multiply: (a, b) => a * b 
}

function caesarCipher(s, shift) {
    return s.split("").map(ch => shiftChar(ch, shift)).join("");
}

function shiftChar(ch, shift) {
    const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
    if (/^[A-Z]$/.test(ch)) {
        return upperAlphabet[(upperAlphabet.indexOf(ch) + shift) % 26];
    } else if (/^[a-z]$/.test(ch)) {
        return lowerAlphabet[(lowerAlphabet.indexOf(ch) + shift) % 26];
    } else {
        return ch;
    }
}

function analyzeArray(arr) {
    return {
        average: arr.reduce((a, b) => a + b, 0) / arr.length,
        min: Math.min(...arr),
        max: Math.max(...arr),
        length: arr.length
    }
}

module.exports = {
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray
}