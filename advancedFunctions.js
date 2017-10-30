/* Function that takes an array-like object and converts it into an array */

function arrayFrom (arrayLikeObject) {
  return [].slice.call(arrayLikeObject);
}

/* Function that only adds even arguments passed to it */

function sumEvenArguments () {
  let newArgs = [].slice.call(arguments);
  return newArgs.reduce((acc, cur) => {
    if (cur % 2 === 0) return acc + cur;
    else return acc;
  }, 0);
}

// sumEvenArguments(1,2,3,4);
// 6

/* Function that can only be invoked a set number of times */

function invokeMax (fn, num) {
  let max = 0;
  return function () {
    if (max >= num) {
      return 'maxed out';
    }
    max++;
    return fn.apply(this, arguments);
  }
}

function add (a, b) {
  return a + b;
}

let addThreeTimes = invokeMax(add, 3);

// addThreeTimes(2,2);
// 4
// addThreeTimes(2,1);
// 3
// addThreeTimes(2,0);
// 2
// addThreeTimes(0,0);
// "maxed out"


/* Function that executes another function only one time */

function once (fn, thisArg) {
  let hasBeenCalled = false;
  return function () {
    if (!hasBeenCalled) {
      hasBeenCalled = true;
      return fn.apply(thisArg, arguments);
    }
  }
}

function add (a, b) {
  return a + b;
}

let addOnce = once(add);

// addOnce(2,2);
// 4
// addOnce(2,3);
// undefined