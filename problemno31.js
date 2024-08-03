//  Write a function to find the second largest number in a given array.

function secondLargest(arr) {
  let first = -Infinity;
  let second = -Infinity;

  for (let num of arr) {
    if (num > first) {
      second = first;
      first = num;
    } else if (num > second && num !== first) {
      second = num;
    }
  }
  return second;
}

// Example usage:
console.log(secondLargest([1, 2, 3, 4, 5])); // Output: 4
