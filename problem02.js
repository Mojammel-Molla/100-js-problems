// 1. write a function thar returns the sum of two numbers.
// 2. write a function that returns the sum of all numbers regardless of # of params.

// Example for params1 = 1 and params2 = 2 the output should be add(params1, params2)=3

function add(params1, params2) {
  return params1 + params2;
}
console.log(add(2, 1));

function arrayTotal(...params) {
  let total = 0;
  params.forEach(Element => {
    total += Element;
  });
  return total;
}
console.log(arrayTotal(1, 2, 3, 4, 5, 6, 7, 8, 9));
