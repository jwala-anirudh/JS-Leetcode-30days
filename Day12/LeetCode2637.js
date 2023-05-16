/**
 * Promise Time Limit
 *
 * Given an asyncronous function fn and a time t in milliseconds,
 * return a new time limited version of the input function.
 *
 * A time limited function is a function that is identical to the
 * original unless it takes longer than t milliseconds to fullfill.
 * In that case, it will reject with "Time Limit Exceeded".
 * Note that it should reject with a string, not an Error.
 */
var timeLimit = function (fn, t) {
  return async function (...args) {
    // return a promise
    return new Promise((resolve, reject) => {
      const timeOutId = setTimeout(() => reject('Time Limit Exceeded'), t);

      // Approach 1
      fn(...args)
        .then(res => resolve(res))
        .catch(err => reject(err))
        .finally(() => clearTimeout(timeOutId));

      // Approach 2: Another way to write the same code
      /* try {
        const res = await fn(...args);
        resolve(res);
      } catch (err) {
        reject(err);
      } */
    });
  };
};

const limited = timeLimit(t => new Promise(res => setTimeout(res, t)), 100);

limited(150).catch(console.log); // "Time Limit Exceeded" at t=100ms
