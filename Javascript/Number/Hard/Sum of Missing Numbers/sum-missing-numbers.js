// solution 1
function sumMissingNumbers_(arr) {
    arr.sort();
    let missing_num = [];
    for (let i = 1; i < arr.length; i++) {
        let prev_val = arr[i - 1] > 0 ? arr[i - 1] + 1 : arr[i - 1] - 1;
        if (prev_val != arr[i]) {
            let diff = arr[i] - prev_val;
            missing_num.push(...Array.from(Array(Math.abs(diff)), (_, i) => i + prev_val));
        }
    }
    return missing_num.length == 0 ? 0 : missing_num.reduce((accu, val) => accu + val);
}

// solution 2
function sumMissingNumbers(arr) {
    const [a, b] = [Math.min(...arr), Math.max(...arr)];
    return arr.reduce((acc, val) => acc - val, (a + b) * (b - a + 1) / 2);
}

console.log(sumMissingNumbers([1, 2, 3, 4, 5])); // 0
console.log(sumMissingNumbers([4, 3, 8, 1, 2])); // 18
console.log(sumMissingNumbers([17, 16, 15, 10, 11, 12])); // 27
console.log(sumMissingNumbers([-1, -4, -3, -2, -6, -8])); // -12