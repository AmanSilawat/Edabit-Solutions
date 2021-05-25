// Solution 1
function validatePIN1(pin) {
    return /^(\d{4})$|^(\d{6})$/.test(pin);
}

// Solution 2
function validatePIN2(pin) {
    return /^(\d{4}|\d{6})$/.test(pin);
}

// Solution 3
function validatePIN(pin) {
    return /^\d{4}(\d\d)?$/.test(pin);
}

const Test = require('assert/strict');
Test.deepStrictEqual(validatePIN("1234"), true);
Test.deepStrictEqual(validatePIN("12345"), false);
Test.deepStrictEqual(validatePIN("a234"), false);
Test.deepStrictEqual(validatePIN(""), false);
Test.deepStrictEqual(validatePIN("%234"), false);
Test.deepStrictEqual(validatePIN("`234"), false);
Test.deepStrictEqual(validatePIN("@234"), false);
Test.deepStrictEqual(validatePIN("#234"), false);
Test.deepStrictEqual(validatePIN("$234"), false);
Test.deepStrictEqual(validatePIN("*234"), false);
Test.deepStrictEqual(validatePIN("5678"), true);
Test.deepStrictEqual(validatePIN("^234"), false);
Test.deepStrictEqual(validatePIN("(234"), false);
Test.deepStrictEqual(validatePIN(")234"), false);
Test.deepStrictEqual(validatePIN("123456"), true);
Test.deepStrictEqual(validatePIN("-234"), false);
Test.deepStrictEqual(validatePIN("_234"), false);
Test.deepStrictEqual(validatePIN("+234"), false);
Test.deepStrictEqual(validatePIN("=234"), false);
Test.deepStrictEqual(validatePIN("?234"), false);