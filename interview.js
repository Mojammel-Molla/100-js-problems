// You will have a function which takes a number as a parameter.
//    And the function return an array containing all the even numbers
//    from one to that number
//    for example: getEvenNums(5) -> [2, 4]
//                 getEvenNums(8) -> [2, 4, 6, 8]

function getEvenNums(num) {
  evenNum = [];
  for (i = 0; i < num; i++) {
    if (i % 2 == 0) {
      evenNum.push(i);
    }
  }
  return evenNum;
}

// console.log(getEvenNums(5));

// Write a function which takes and array and returns the maximum value from that array.
//    for example: getMax([2, 3, 1]) -> 3
//                 getMax([-1, -2, 1]) -> 1

function getMax(arr) {
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(getMax([-1, -2, -3, 1]));
