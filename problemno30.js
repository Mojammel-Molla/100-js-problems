// Write a function to implement a basic calculator that can add, subtract, multiply, and divide two numbers.

function calculator(a, b, operator) {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return a / b;
    default:
      return 'Invalid operator';
  }
}

// Example usage:
console.log(calculator(10, 5, '+')); // Output: 15
console.log(calculator(10, 5, '-')); // Output: 5
console.log(calculator(10, 5, '*')); // Output: 50
console.log(calculator(10, 5, '/')); // Output: 2
