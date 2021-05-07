// Solution 1
function isObject_(value) {
    // console.log(value, typeof value)
    return value === null ? false : typeof value == 'object' ? true : false;
}

// Solution 2
function isObject(value) {
    return value instanceof Object;
}

console.log(isObject(new Date()));   // true
console.log(isObject("12/12/2011")); // false
console.log(isObject(null));         // false
console.log(isObject([1, 2, 3]));    // true
console.log(isObject({}));           // true