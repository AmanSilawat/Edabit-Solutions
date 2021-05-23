function allTruthy(...args) {
    return args.every((v)=> !!v);
}


console.log(allTruthy(true, true, true)); // true
console.log(allTruthy(false)); // false
console.log(allTruthy(true)); // true
console.log(allTruthy(false, true, true, true, 20)); // false
console.log(allTruthy(Infinity, 92347238467.219378, 'Hello World')); // true
console.log(allTruthy(Infinity, 92347238467.219378, 'Hello World', 0)); // false
console.log(allTruthy('', 'r', 'ra', 'rac', 'race')); // false
console.log(allTruthy(+'Hi!')); // false
console.log(allTruthy({}.twice)); // false
console.log(allTruthy(true, 32, Number, [][1])); // false
console.log(allTruthy(Boolean, Number, Object, String)); // true