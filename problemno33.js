// Write a function flatten that takes a deeply nested array and returns a flat array with all the elements.

function flatten(arr) {
  return arr.reduce((flat, toFlatten) => {
    return flat.concat(
      Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten
    );
  }, []);
}

// Example usage:
const nestedArray = [1, [2, [3, [4, [5]]]], 6];
const flatArray = flatten(nestedArray);
console.log(flatArray); // Output: [1, 2, 3, 4, 5, 6]
