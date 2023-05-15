/**
 * Sleep
 *
 * Given a positive integer millis, write an asyncronous function that sleeps for
 * millis milliseconds. It can resolve any value.
 */
async function sleep(millis) {
  function callback(resolve, reject) {
    setTimeout(resolve, millis);
  }

  return new Promise(callback);
}

let t = Date.now();
sleep(100).then(() => console.log(Date.now() - t)); // 100
