// Write a function to reverse the order of words in a sentence.

function reverseWords(sentence) {
  return sentence.split(' ').reverse().join(' ');
}

const sentence = 'The quick brown fox';
const reversedSentence = reverseWords(sentence);
console.log(reversedSentence);
