/**
 * Array of Objects to Matrix
 *
 * Write a function that converts an array of objects arr into a matrix m.
 *
 * arr is an array of objects or arrays. Each item in the array can be
 * deeply nested with child arrays and child objects. It can also contain
 * numbers, strings, booleans, and null values.
 *
 * The first row m should be the column names. If there is no nesting, the
 * column names are the unique keys within the objects. If there is nesting,
 * the column names are the respective paths in the object separated by ".".
 *
 * Each of the remaining rows corresponds to an object in arr. Each value in
 * the matrix corresponds to a value in an object. If a given object doesn't
 * contain a value for a given column, the cell should contain an empty string "".
 *
 * The colums in the matrix should be in lexographically ascending order.
 */
var jsonToMatrix = function (arr) {
  const keySet = new Set();

  for (const obj of arr) {
    getKeys(obj, '');
  }
  // Building the first row
  const keys = Array.from(keySet).sort();
  const res = [keys]; // array where first row is keys

  for (const obj of arr) {
    const keyToVal = {};
    getValues(obj, '', keyToVal);
    let row = [];

    // for actually sorted values
    for (const key of keys) {
      if (key in keyToVal) {
        row.push(keyToVal[key]);
      } else {
        row.push('');
      }
    }

    res.push(row);
  }

  return res;

  function getKeys(obj, path) {
    for (const key in obj) {
      const newPath = path ? `${path}.${key}` : key;
      if (isObject(obj[key])) {
        getKeys(obj[key], newPath);
      } else {
        keySet.add(newPath);
      }
    }
  }

  function getValues(obj, path, keyToVal) {
    for (const key in obj) {
      const newPath = path ? `${path}.${key}` : key;
      if (isObject(obj[key])) {
        getValues(obj[key], newPath, keyToVal);
      } else {
        keyToVal[newPath] = obj[key];
      }
    }
  }

  function isObject(object) {
    return object !== null && typeof object === 'object';
  }
};
