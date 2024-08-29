// Write a function longestSubstringWithoutRepeatingCharacters that takes a string and returns the length of the longest substring without repeating characters.

function longestSubstringWithoutRepeatingCharacters(s) {
  let start = 0;
  let maxLength = 0;
  let charIndexMap = new Map();

  for (let end = 0; end < s.length; end++) {
    const currentChar = s[end];

    if (charIndexMap.has(currentChar)) {
      start = Math.max(charIndexMap.get(currentChar) + 1, start);
    }

    charIndexMap.set(currentChar, end);
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}

console.log(longestSubstringWithoutRepeatingCharacters('abcabcbb'));
console.log(longestSubstringWithoutRepeatingCharacters('bbbbb'));
console.log(longestSubstringWithoutRepeatingCharacters('pwwkew'));
