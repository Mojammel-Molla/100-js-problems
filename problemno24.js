// Write a function to find the longest word in a sentence and return its length.

function longestWordLength(sentence) {
  const words = sentence.split(' ');
  let maxLength = 0;
  for (let word of words) {
    maxLength = Math.max(maxLength, word.length);
  }
  return maxLength;
}

const sentence = 'The quick brown fox jumps over the lazy dog';
const longestLength = longestWordLength(sentence);
console.log(longestLength);
