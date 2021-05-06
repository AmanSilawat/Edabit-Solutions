function sevenBoom(arr) {
    return /7/.test(arr.join('')) ? "Boom!" : "there is no 7 in the array";
}

console.log(sevenBoom([2, 6, 7, 9, 3])); // "Boom!"
console.log(sevenBoom([33, 68, 400, 5])); // "there is no 7 in the array"
console.log(sevenBoom([86, 48, 100, 66])); // "there is no 7 in the array"
console.log(sevenBoom([76, 55, 44, 32])); // "Boom!"
console.log(sevenBoom([35, 4, 9, 37])); // "Boom!"