// Write a function to find the missing number in an array of integers from 1 to n.

function findMissingNumber(arr) {
  const n = arr.length + 1;
  const sumOfNNumbers = (n * (n + 1)) / 2;
  const sumOfArray = arr.reduce((acc, val) => acc + val, 0);
  return sumOfNNumbers - sumOfArray;
}

const numbers = [1, 2, 4, 5, 6];
const missingNumber = findMissingNumber(numbers);
console.log(missingNumber);
