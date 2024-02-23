// Write a function that checks whether a given string is a palindrome Output should be true or false

function isPalindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}

// Test the function
console.log(isPalindrome('racecar'));
console.log(isPalindrome('hello'));
