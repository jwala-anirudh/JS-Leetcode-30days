/**
 * Chunk Array
 *
 * Given an array arr and a chunk size size, return a chunked array.
 * A chunked array contains the original elements in arr, but consists of
 * subarrays each of length size. The length of the last subarray may be
 * less than size if arr.length is not evenly divisible by size.
 *
 * You may assume the array is the output of JSON.parse. In other words,
 * it is valid JSON.
 *
 * Please solve it without using lodash's _.chunk function.
 */
var chunk = function (arr, size) {
  const resultArray = [];
  let indexOfChunck = 0;

  while (indexOfChunck < arr.length) {
    let sizeOfChunck = size;
    // build the temp array that will have values
    const temp = [];

    while (sizeOfChunck > 0 && indexOfChunck < arr.length) {
      temp.push(arr[indexOfChunck]);

      indexOfChunck++;
      sizeOfChunck--;
    }

    resultArray.push(temp);
  }

  return resultArray;
};
