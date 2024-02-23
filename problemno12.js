// Write a function that takes a string as input and returns the same string with each word reversed, while maintaining the order of words.

function reverseWords(str) {
  return str
    .split(' ')
    .map(word => word.split('').reverse().join(''))
    .join(' ');
}

console.log(reverseWords('Hello world'));
