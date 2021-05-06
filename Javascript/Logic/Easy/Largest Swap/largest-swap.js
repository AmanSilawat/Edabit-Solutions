function largestSwap(num) {
    return num >= +String(num).split('').reverse().join('');
}

console.log(largestSwap(27)); //false
console.log(largestSwap(43)); //true
console.log(largestSwap(14)); //false
console.log(largestSwap(53)); //true
console.log(largestSwap(99)); //true