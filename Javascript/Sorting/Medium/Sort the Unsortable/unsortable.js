// solution 1
function sortIt_(arr) {
    return arr.sort((a, b) => {
        let x = Array.isArray(a) ? a[0] : a;
        let y = Array.isArray(b) ? b[0] : b;
        return x - b;
    })
}

// solution 2
function sortIt__(arr) {
    return arr.sort((a, b) => (a[0] || a) - (b[0] || b));
}

// solution 3 *
function sortIt(arr) {
    return arr.sort((a, b) => a - b);
}

console.log(sortIt([4, 1, 3]));               // [[1], [3], [4]]
console.log(sortIt([[4], [1], [3]]));               // [[1], [3], [4]]
console.log(sortIt([4, [1], 3]));                   // [[1], 3, 4]
console.log(sortIt([[4], 1, [3]]));                 // [1, [3], [4]]
console.log(sortIt([[3], 4, [2], [5], 1, 6]));      // [1, [2], [3], 4, [5], 6]
console.log(sortIt([[3], 7, [9], [5], 1, 6]));      // [1, [3], [5], 6, 7, [9]]
console.log(sortIt([[3], 7, [9], [5], 1, 6, [0]])); // [[0], 1, [3], [5], 6, 7, [9]]