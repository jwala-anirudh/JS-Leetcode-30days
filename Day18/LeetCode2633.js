/**
 * Convert Object to JSON String
 *
 * Given an object, return a valid JSON string of that object.
 * You may assume the object only inludes strings, integers, arrays, objects, booleans,
 * and null. The returned string should not include extra spaces. The order of keys
 * should be the same as the order returned by Object.keys().
 *
 * Please solve it without using the built-in JSON.stringify method.
 */
var jsonStringify = function (object) {
  // Base case
  if (object === null || object === undefined) {
    return String(object);
  }

  // Arrays []
  if (Array.isArray(object)) {
    const values = object.map(obj => jsonStringify(obj));
    return `[${values.join(',')}]`;
  }

  // Objects {}
  if (typeof object === 'object') {
    const keys = Object.keys(object);
    const keyValuePairs = keys.map(
      key => `"${key}":${jsonStringify(object[key])}`
    );
    return `{${keyValuePairs.join(',')}}`;
  }

  // Strings ""
  if (typeof object === 'string') {
    return `"${String(object)}"`;
  }

  // once all are tried, we will do boolean and numbers
  return String(object);
};
