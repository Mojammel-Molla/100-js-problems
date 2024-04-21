// You're tasked with implementing a function that takes an array of integers as input and returns the maximum product that can be obtained by multiplying any three integers from the array.

function maxProductOfThree(nums) {
  nums.sort((a, b) => a - b);
  const n = nums.length;

  const product1 = nums[n - 1] * nums[n - 2] * nums[n - 3];
  const product2 = nums[0] * nums[1] * nums[n - 1];

  return Math.max(product1, product2);
}

console.log(maxProductOfThree([-10, -3, 5, 6, -20]));
// Output should be 1200
