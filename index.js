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

module.exports = {
    capitalize,
    reverseString,
    calculator
}