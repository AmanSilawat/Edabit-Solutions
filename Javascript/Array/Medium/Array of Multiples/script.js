// Solution 1
function arrayOfMultiples_(num, length) {
    return Array.from(new Array(length), (v, i) => num * (i + 1));
}

// Solution 2
function arrayOfMultiples(num, length) {
    return Array.from({ length }, (v, i) => num * (i + 1));
}

console.log(arrayOfMultiples(7, 5)); // [7, 14, 21, 28, 35]
console.log(arrayOfMultiples(12, 10)); // [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
console.log(arrayOfMultiples(17, 7)); // [17, 34, 51, 68, 85, 102, 119]
console.log(arrayOfMultiples(630, 14)); // [630, 1260, 1890, 2520, 3150, 3780, 4410, 5040, 5670, 6300, 6930, 7560, 8190, 8820]
console.log(arrayOfMultiples(140, 3)); // [140, 280, 420]
console.log(arrayOfMultiples(7, 8)); // [7, 14, 21, 28, 35, 42, 49, 56]
console.log(arrayOfMultiples(11, 21)); // [11, 22, 33, 44, 55, 66, 77, 88, 99, 110, 121, 132, 143, 154, 165, 176, 187, 198, 209, 220, 231]