/**
 * Cache With Time Limit
 *
 * Write a class that allows getting and setting key-value pairs,
 * however a time until expiration is associated with each key.
 *
 * The class has three public methods:
 *
 * set(key, value, duration): accepts an integer key, an integer value,
 * and a duration in milliseconds. Once the duration has elapsed,
 * the key should be inaccessible. The method should return true if
 * the same un-expired key already exists and false otherwise.
 *
 * Both the value and duration should be overwritten if the key already
 * exists.
 *
 *
 * get(key): if an un-expired key exists, it should return the
 * associated value. Otherwise it should return -1.
 *
 * count(): returns the count of un-expired keys.
 */

// Class based solution 1
class TimeLimitedCache {
  cache = new Map();

  set(key, value, duration) {
    const isAlreadyPresent = this.cache.get(key);

    if (isAlreadyPresent) {
      // clear the timeout
      clearTimeout(isAlreadyPresent.timeoutId);
    }

    const timeoutId = setTimeout(() => {
      // remove the key
      this.cache.delete(key);
    }, duration);

    this.cache.set(key, {
      value: value,
      timeoutId: timeoutId
    });

    return Boolean(isAlreadyPresent);
  }

  get(key) {
    if (this.cache.has(key)) {
      return this.cache.get(key).value;
    }
    return -1;
  }

  count() {
    return this.cache.size;
  }
}

// Function based syntax solution 2
var TimeLimitedCache = function () {
  this.cache = new Map();
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
  const isAlreadyPresent = this.cache.get(key);

  if (isAlreadyPresent) {
    // clear the timeout
    clearTimeout(isAlreadyPresent.timeoutId);
  }

  const timeoutId = setTimeout(() => {
    // remove the key
    this.cache.delete(key);
  }, duration);

  this.cache.set(key, {
    value: value,
    timeoutId: timeoutId
  });

  return Boolean(isAlreadyPresent);
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
  if (this.cache.has(key)) {
    return this.cache.get(key).value;
  }
  return -1;
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
  return this.cache.size;
};

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 */
var obj = new TimeLimitedCache();
obj.set(1, 42, 1000); // false
obj.get(1); // 42
obj.count(); // 1
