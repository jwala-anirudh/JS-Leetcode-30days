/**
 * Function Composition
 *
 * Given an array of functions [f1, f2, f3, ..., fn],
 * return a new function fn that is the function composition
 * of the array of functions.
 *
 * The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).
 *
 * The function composition of an empty list of functions is the
 * identity function f(x) = x.
 *
 * You may assume each function in the array accepts one
 * integer as input and returns one integer as output.
 */
var compose = function (functions) {
  /** Imperative solution **/
  return function (x) {
    for (const fn of functions.reverse()) {
      x = fn(x);
    }

    return x;
  };
};

var compose2 = function (functions) {
  /** Declarative solution **/
  fn = (accumulator, f) => f(accumulator);

  return function (x) {
    return functions.reduceRight(fn, x);
  };
};

/**
 * How this program is ran
 * const fn1 = x => x + 1;
 * const fn2 = x => 2 * x;
 *
 * console.log(fn1(fn2(x)));
 *
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) ---> answer is 9
 */
