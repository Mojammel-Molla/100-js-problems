// Write a function to reverse a string.

function reverseString(str) {
  return str.split('').reverse().join('');
}

// Example usage:
const originalString = 'Hello, world!';
const reversedString = reverseString(originalString);
console.log(reversedString);
