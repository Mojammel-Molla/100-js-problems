// Write a function to remove duplicates from an array.

function removeDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = removeDuplicates(arrayWithDuplicates);
console.log(uniqueArray);
