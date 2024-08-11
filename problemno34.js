// You have an array of integers from 1 to n with one integer missing. Write a function to find the missing integer.

function findMissingNumber(arr) {
  const n = arr.length + 1;
  const totalSum = (n * (n + 1)) / 2; // Sum of first n natural numbers
  const arrSum = arr.reduce((sum, num) => sum + num, 0);
  return totalSum - arrSum;
}
