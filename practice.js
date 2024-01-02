//  Write a function to reverse a string.
function reversString(str) {
  return str.split('').reverse().join('');
}

// console.log(reversString('Mojammel'));

// Write a function to calculate the factorial of a number
function factorial(n) {
  return n === 0 ? 1 : n * factorial(n - 1);
}

// console.log(factorial(5));

//  Write a function to check if a string is a palindrome.

function isPalindrome(str) {
  str === str.split('').reverse().join('');
  return 'Its a palindrome', str;
}

console.log(isPalindrome('Man'));
