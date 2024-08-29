// Write a function groupBy that takes an array of objects and a property name, and returns an object where the keys are the values of the specified property and the values are arrays of objects that have that property value.

function groupBy(arr, property) {
  return arr.reduce((acc, obj) => {
    const key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
}

// Example usage:
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 20 },
  { name: 'Charlie', age: 25 },
  { name: 'David', age: 20 },
  { name: 'Eve', age: 30 },
];

const groupedByAge = groupBy(people, 'age');
console.log(groupedByAge);
