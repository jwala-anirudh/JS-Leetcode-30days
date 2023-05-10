/**
 * Array Reduce Transformation
 *
 * Given an integer array nums, a reducer function fn,
 * and an initial value init, return a reduced array.
 *
 * A reduced array is created by applying the following
 * operation: val = fn(init, nums[0]),
 * val = fn(val, nums[1]), val = fn(val, nums[2]), ...
 * until every element in the array has been processed.
 * The final value of val is returned.
 *
 * If the length of the array is 0, it should return init.
 *
 * Please solve it without using the built-in Array.reduce method.
 */
var reduce = function (nums, fn, init) {
  // Don't use this ---> nums.reduce(fn, init);

  // Solution
  let result = init;

  if (nums.length === 0) {
    return result;
  } else {
    for (let i = 0; i < nums.length; i++) {
      result = fn(result, nums[i]);
    }
  }

  return result;
};
