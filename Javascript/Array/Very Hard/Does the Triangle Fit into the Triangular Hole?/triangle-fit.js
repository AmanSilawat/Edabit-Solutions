// Solution 1
function doesTriangleFit_(brick, hole) {
    if (valid_triangle(hole) == false) {
        return false;
    }
    for (const index in brick) {
        if (brick[index] > hole[index]) {
            return false;
        }
    }
    return true;
}

function valid_triangle([a, b, c]) {
    if (a + b <= c || a + c <= b || b + c <= a) {
        return false; // invalid triangle
    } else {
        return true; // valid triangle
    }
}

// Solution 2
const is_valid = ([a, b, c]) => !(a + b <= c || a + c <= b || b + c <= a);
const doesTriangleFit = (brick, hole) => {
    if (is_valid(brick) == false || is_valid(hole) == false) return false;
    return (
        brick[0] > hole[0] ||
        brick[1] > hole[1] ||
        brick[2] > hole[2]
    ) == false
}


console.log(doesTriangleFit([1, 1, 1], [1, 1, 1])); // true
// console.log(doesTriangleFit([1, 1, 1], [2, 2, 2])); // true
console.log(doesTriangleFit([1, 6, 8], [1, 6, 8])); // false
// console.log(doesTriangleFit([12, 63, 42], [1, 6, 8])); // false
// console.log(doesTriangleFit([3, 6, 8], [23, 63, 42])); // true
// console.log(doesTriangleFit([3, 6, 8], [1, 10, 8])); // false