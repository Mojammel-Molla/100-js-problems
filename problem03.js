// Give a rectangular matrix of characters, add a border asterisks (*) to it.

// // Example
// picture = ["abc", "ded"]
// Output: addBorder(picture)= ["*****", "*abc*", "*ded*", "*****" ]

function addBorder(picture) {
  let wall = '*'.repeat(picture[0].length + 2);
  picture.unshift(wall);
  picture.push(wall);
  for (let i = 1; i < picture.length - 1; i++) {
    picture[i] = '*'.concat(picture[1], '*');
  }
  return picture;
}
console.log(addBorder(['abc', 'ded']));
