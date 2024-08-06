// Write a function memoize that takes another function as an argument and returns a memoized version of that function. The memoized function should cache the results of previous function calls to improve performance for repetitive calls with the same arguments.

function memoize(fn) {
  const cache = new Map();
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}

// Example usage:
const slowFunction = num => {
  // Simulating a slow computation
  console.log('Computing...');
  return num * num;
};

const memoizedFunction = memoize(slowFunction);

console.log(memoizedFunction(5)); // Output: Computing... 25
console.log(memoizedFunction(5)); // Output: 25 (result from cache, "Computing..." not printed)
console.log(memoizedFunction(10)); // Output: Computing... 100
console.log(memoizedFunction(10)); // Output: 100 (result from cache, "Computing..." not printed)
