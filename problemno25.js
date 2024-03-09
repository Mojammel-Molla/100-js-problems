// Write a function to count the number of vowels (a, e, i, o, u) in a given string.

function countVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return str.split('').filter(char => vowels.includes(char.toLowerCase()))
    .length;
}

const string = 'Hello, World!';
const vowelCount = countVowels(string);
console.log(vowelCount);
