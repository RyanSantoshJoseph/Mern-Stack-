function reverseNumber(inval) {
    return parseInt(inval.toString().split('').reverse().join(''), 10);
}

// Example usage
let x = 32243;
console.log(reverseNumber(x)); // Output: 34223
