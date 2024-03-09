// Write a function to check if a sentence is a pangram (contains every letter of the alphabet at least once).

function isPangram(sentence) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const letters = new Set(sentence.toLowerCase().replace(/[^a-z]/g, ''));
  return alphabet.split('').every(letter => letters.has(letter));
}

const pangram = 'The quick brown fox jumps over the lazy dog';
const isPangramSentence = isPangram(pangram);
console.log(isPangramSentence);
