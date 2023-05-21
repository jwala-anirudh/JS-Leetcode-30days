/**
 * JSON Deep Equal
 *
 * Given two objects o1 and o2, check if they are deeply equal.
 *
 * For two objects to be deeply equal, they must contain the same keys,
 *  and the associated values must also be deeply equal.
 * Two objects are also considered deeply equal if they pass the === equality check.
 *
 * You may assume both objects are the output of JSON.parse.
 * In other words, they are valid JSON.
 *
 * Please solve it without using lodash's _.isEqual() function.
 */

// recursive to check all the nested values
var areDeeplyEqual = function (o1, o2) {
  if (o1 === null || o2 === null) {
    return o1 === o2;
  }

  // Base case
  if (typeof o1 !== typeof o2) {
    return false;
  }

  if (typeof o1 !== 'object') {
    // primitives
    return o1 === o2;
  }

  // Arrays
  if (Array.isArray(o1) || Array.isArray(o2)) {
    if (String(o1) !== String(o2)) {
      return false;
    }

    // Deeply check each value
    for (let i = 0; i < o1.length; i++) {
      if (!areDeeplyEqual(o1[i], o2[i])) {
        return false;
      }
    }
  } else {
    // Objects
    if (Object.keys(o1).length !== Object.keys(o2).length) {
      return false;
    }

    for (const key in o1) {
      if (!areDeeplyEqual(o1[key], o2[key])) {
        return false;
      }
    }
  }

  return true;
};
