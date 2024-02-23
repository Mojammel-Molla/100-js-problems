// Write a function that takes a string as input and returns true if all characters in the string are unique, false otherwise. (Assume the string contains only ASCII characters.)

function areAllCharactersUnique(str) {
  let charSet = new Set();

  for (let char of str) {
    if (charSet.has(char)) {
      return false;
    }
    charSet.add(char);
  }

  return true;
}

console.log(areAllCharactersUnique('abcde'));
console.log(areAllCharactersUnique('hello'));
console.log(areAllCharactersUnique('world!'));
