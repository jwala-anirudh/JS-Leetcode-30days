/**
 * Curry
 *
 * Given a function fn, return a curried version of that function.
 *
 * A curried function is a function that accepts fewer or an equal
 * number of parameters as the original function and returns either
 * another curried function or the same value the original function
 * would have returned.
 *
 * In practical terms, if you called the original function like
 * sum(1,2,3), you would call the curried version like csum(1)(2)(3),
 * csum(1)(2,3), csum(1,2)(3), or csum(1,2,3).
 *
 * All these methods of calling the curried function
 * should return the same value as the original.
 */

// Solution 1
var curry = function (fn) {
  let nums = [];

  return function curried(...args) {
    nums = [...nums, ...args];

    if (fn.length === nums.length) {
      const result = fn(...nums);
      nums = [];
      return result;
    } else {
      return curried;
    }
  };
};

// Solution 2
var curry2 = function (fn) {
  return function curried(...args) {
    if (fn.length === args.length) {
      return fn(...args);
    } else {
      return function (...newArgs) {
        return curried(...args, ...newArgs);
      };
    }
  };
};

/**
 * How it is called?
 *
 * function sum(a, b) { return a + b; }
 * const csum = curry(sum);
 * csum(1)(2) // 3
 */
