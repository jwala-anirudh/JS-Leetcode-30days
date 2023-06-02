/**
 * Generate Fibonacci Sequence
 * ==============================
 *
 * Write a generator function that returns a generator
 * object which yields the fibonacci sequence.
 *
 * The fibonacci sequence is defined by the relation Xn = Xn-1 + Xn-2.
 *
 * The first few numbers of the series are 0, 1, 1, 2, 3, 5, 8, 13.
 */
var fibGenerator = function* () {
  let n1 = 0,
    n2 = 1;

  while (true) {
    yield n1;

    let temp = n2;
    n2 = n1 + n2;
    n1 = temp;
  }
};

const gen = fibGenerator();
gen.next().value; // 0
gen.next().value; // 1
