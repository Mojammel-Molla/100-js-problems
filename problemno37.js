//  Find the Longest Word in a Sentence

function longestWord(sentence) {
  // Split sentence into words
  let words = sentence.split(' ');

  // Initialize variables to store the longest word
  let maxLength = 0;
  let longest = '';

  for (let word of words) {
    // Remove punctuation if necessary
    let cleanWord = word.replace(/[^a-zA-Z]/g, '');

    if (cleanWord.length > maxLength) {
      maxLength = cleanWord.length;
      longest = cleanWord;
    }
  }

  return longest;
}

console.log(longestWord('The quick brown fox jumped over the lazy dog'));
console.log(longestWord('JavaScript is an amazing programming language'));
console.log(longestWord('A revolution in AI is happening!'));
