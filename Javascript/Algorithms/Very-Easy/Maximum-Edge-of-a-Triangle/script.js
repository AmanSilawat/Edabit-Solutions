// Maximum Edge of a Triangle
const nextEdge = (side1, side2) => (side1 + side2) - 1;

console.log(nextEdge(8, 10)); // 17
console.log(nextEdge(5, 7)); // 11
console.log(nextEdge(9, 2)); // 10