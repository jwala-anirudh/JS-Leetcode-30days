/**
 * Differences Between Two Objects
 *
 * Write a function that accepts two deeply nested objects or arrays obj1 and obj2
 * and returns a new object representing their differences.
 *
 * The function should compare the properties of the two objects and identify
 * any changes. The returned object should only contains keys where the value
 * is different from obj1 to obj2. For each changed key, the value should be
 * represented as an array [obj1 value, obj2 value]. Keys that exist in one
 * object but not in the other should not be included in the returned object.
 * When comparing two arrays, the indices of the arrays are considered to be
 * their keys. The end result should be a deeply nested object where each
 * leaf value is a difference array.
 *
 * You may assume that both objects are the output of JSON.parse
 */
function objDiff(o1, o2) {
  function isObject(obj) {
    return typeof obj === 'object' && obj !== null;
  }

  // Only care about common keys

  // If both primitive and diff, then diff
  // If one is obj and other isn't, then diff
  // If one is array and one is obj, then diff
  // If both arr, or both obj, then recursion

  // both primitive
  if (!isObject(o1) && !isObject(o2)) {
    return o1 === o2 ? {} : [o1, o2];
  }

  // one primitive
  if (!isObject(o1) || !isObject(o2)) {
    return [o1, o2];
  }

  // one array, one object
  if (Array.isArray(o1) !== Array.isArray(o2)) {
    return [o1, o2];
  }

  const diff = {};

  for (const key in o1) {
    if (o2.hasOwnProperty(key)) {
      const res = objDiff(o1[key], o2[key]);
      if (Object.keys(res).length > 0) {
        diff[key] = res;
      }
    }
  }

  return diff;
}
