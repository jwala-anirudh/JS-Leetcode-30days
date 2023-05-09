/**
 * Given an integer array arr and a mapping function fn,
 * return a new array with a transformation applied to each element.
 *
 * The returned array should be created such that
 * returnedArray[i] = fn(arr[i], i).
 *
 * Please solve it without the built-in Array.map method.
 */
var map = function (arr, fn) {
  const result = [];

  for (const index in arr) {
    result.push(fn(arr[index], Number(index)));
  }

  return result;

  // Don't use this ---> return arr.map(fn);
};
