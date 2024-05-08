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

module.exports = {
    capitalize
}