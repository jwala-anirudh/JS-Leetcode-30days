/**
 * Nested Array Generator
 * ========================
 *
 * Given a multi-dimensional array of integers, return a generator
 * object which yields integers in the same order as inorder traversal.
 *
 * A multi-dimensional array is a recursive data structure that contains
 * both integers and other multi-dimensional arrays.
 *
 * inorder traversal iterates over each array from left to right,
 * yielding any integers it encounters or applying inorder traversal
 * to any arrays it encounters.
 */
var inorderTraversal = function* (arr) {
  for (const n of arr) {
    if (Array.isArray(n)) {
      // recursive case
      yield* inorderTraversal(n);
    } else {
      yield n;
    }
  }
};

const gen = inorderTraversal([1, [2, 3]]);
gen.next().value; // 1
gen.next().value; // 2
gen.next().value; // 3
