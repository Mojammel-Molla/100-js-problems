// Write a function that takes a number as input and returns "Fizz" if the number is divisible by 3, "Buzz" if it's divisible by 5, "FizzBuzz" if it's divisible by both 3 and 5, or the number itself if none of these conditions are met.

function fizzBuzz(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return 'FizzBuzz';
  } else if (number % 3 === 0) {
    return 'Fizz';
  } else if (number % 5 === 0) {
    return 'Buzz';
  } else {
    return number;
  }
}

console.log(fizzBuzz(15));
console.log(fizzBuzz(9));
console.log(fizzBuzz(10));
console.log(fizzBuzz(7));
