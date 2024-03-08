// Write a function to calculate the factorial of a non-negative integer.

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

const number = 5;
const result = factorial(number);
console.log(result);
