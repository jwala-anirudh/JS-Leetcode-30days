/**
 * Given an integer array arr and a filtering function fn,
 * return a new array with a fewer or equal number of elements.
 *
 * The returned array should only contain elements where fn(arr[i], i)
 * evaluated to a truthy value.
 *
 * Please solve it without the built-in Array.filter method.
 */

var filter = function (arr, fn) {
  // Declarative programming
  // return arr.filter(fn);

  // Imperative programming
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      result.push(arr[i]);
    }
  }

  return result;
};
