// Write a function to find the intersection of two arrays, i.e., the common elements present in both arrays.

function intersection(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  return [...set1].filter(item => set2.has(item));
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
const commonElements = intersection(array1, array2);
console.log(commonElements);
