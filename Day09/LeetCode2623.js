/**
 * Memoize
 *
 * Given a function fn, return a memoized version of that function.
 *
 * A memoized function is a function that will never be called twice with the same inputs.
 * Instead it will return a cached value.
 *
 * You can assume there are 3 possible input functions: sum, fib, and factorial.
 *
 * - sum accepts two integers a and b and returns a + b.
 * - fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
 * - factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.
 */
function memoize(fn) {
  const cache = {};

  return function (...args) {
    // args is an array, object look-up for key requires
    // primitive value like string
    const key = JSON.stringify(args);

    // Already present in cache, just return it without calling
    if (key in cache) {
      return cache[key];
    }

    // Compute and store
    cache[key] = fn(...args);
    return cache[key];
  };
}

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
  callCount += 1;
  return a + b;
});
memoizedFn(2, 3); // 5
memoizedFn(2, 3); // 5
console.log(callCount); // 1
