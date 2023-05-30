/**
 * Call Function with Custom Context
 *
 * Enhance all functions to have the callPolyfill method. The method accepts an object obj
 * as it's first parameter and any number of additional arguments. The obj becomes the
 * this context for the function. The additional arguments are passed to the function
 * (that the callPolyfill method belongs on).
 */
Function.prototype.callPolyfill = function (context, ...args) {
  return this.apply(context, args);

  /**
      Another way to write
      return this.bind(context)(...args);
  */
};

function increment() {
  this.count++;
  return this.count;
}

increment.callPolyfill({ count: 1 }); // 2
