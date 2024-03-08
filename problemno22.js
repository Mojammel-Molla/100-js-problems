// Write a function to determine if two strings are anagrams of each other.

function areAnagrams(str1, str2) {
  const sortedStr1 = str1.split('').sort().join('');
  const sortedStr2 = str2.split('').sort().join('');
  return sortedStr1 === sortedStr2;
}

const string1 = 'listen';
const string2 = 'silent';
const result = areAnagrams(string1, string2);
console.log(result);
