/* Swap first and last elements of an array */

function swapFirstLast (arr) {
  [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr];
  return arr;
}

// swapFirstLast([1,2,3, 4,5]);
// [5, 2, 3, 4, 1]


/* Find the mode of a given array */

function findMode (arr) {
  let frequencies = arr.reduce((acc, cur) => {
    if (cur in acc) acc[cur]++;
    else acc[cur] = 1;

    return acc;
  }, {}); 

  return Object.values(frequencies).reduce((acc, cur) => acc > cur ? acc : cur);
  // can also be writted as: return Object.keys(sorted).reduce((acc, cur) => acc[sorted] > cur[sorted] ? acc : cur);
}


/* Find the mode and frequency of mode in sorted array */

function findModeAndFreq (arr) {
  let hash = {
    freq: 0,
    mode: 0
  };

  let freq = 0;
  let mode = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== mode) {
      freq = 0;
      mode = arr[i];
    }
      freq++;
    if (freq > hash.freq) {
      hash.freq = freq;
      hash.mode = mode;
    }
  }
  return hash;
}

// findModeAndFreq([1,2,3,3]);
// {freq: 2, mode: 3}


/* Find the index of array element closest to target value */

function indexOfClosest (arr, target) {
  let smallestDistance = Infinity; // can also use Number.MAX_SAFE_INTEGER 
  let resultIndex = 0; // index we want to return

  arr.forEach((el, i) => {
    let distance = Math.abs(target - el); // calculate the distance between the target and the number

    if (distance < smallestDistance) { // if the distance is less than the current smallest distance
      resultIndex = i; // we set the index of that number to the result index (because its currently closest)
      smallestDistance = distance; // and we set the current distance to the smallest distance
    }
  });

  return resultIndex;
}

/* Find if two integers in a given array add to the target value */

function twoSum (arr, target) {
  let hash = {};

  for (let i = 0; i < arr.length; i++) {
    if (hash[arr[i]] !== undefined) return [hash[arr[i]], i]; 
    else hash[target - arr[i]] = i;
  }
  return [];
}

// twoSum([1,2,4], 6); 
// [1, 2];



/* Remove duplicates of a given array */

// Method 1

function removeDuplicates (arr) {
  return [...new Set(arr)];
}

// Method 2

function removeDuplicates (arr) {
  'use strict';
  if (!Array.isArray(arr)) throw new TypeError (`Array expected but ${typeof arr} found`);
  return arr.filter((el, i, arr) => arr.indexOf(el) === i);
}


/* Return summed digits of a number */

function sumDigits (num) {
  let value = 0;
  let str = String(num);

  for (let i = 0; i < str.length; i++) {
    value += +str[i];
  }
  return value;
}

// sumDigits(1234052);
// 17


/* Rotate an array a variable number of steps */

function rotateArray (arr, steps) {
  if (arr.length < 2) {
    return arr.slice(0);
  }

  let n = steps % arr.length;

  if (n === 0) {
    return arr.slice(0);
  }

  if (n < 0) {
    return arr.slice(n).concat(arr.slice(0, arr.length + n));
  } else {
    return arr.slice(n).concat(arr.slice(0, n));
  }
}

// rotateArray([3,2,4], 2);
// [4, 3, 2]

// rotatearray([3,2,4],4);
// [2, 4, 3]


/* Check if a number is a prime */

function isPrime (num) {
  if (num === 1) return false;
  else if (num === 2) return true;
  else {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
}

// isPrime(23);
// true
// isPrime(22);
// false


/* Reverse string recursively */

function reverseString (str) {
  if (str === '') {
    return '';
  } else {
    return reverseString(str.substr(1)) + str.charAt(0);
  }
}

// reverseString('ayyy lol');
// "lol yyya"


/* Reverse a number */

function reverseNumber (num) {
  let str = String(num);
  let result = Number(str[0] !== '-' ? str.split('').reverse().join('') :
    str[0] + str.slice(1).split('').reverse().join(''));
 
  return result;
};

// reverseNum(25);
// 52
// reverseNum(-15);
// -51
// reverseNum(200);
// 2


/* Return the longest word (singular) in a string/array */

function getLongestWord (arr) {
  return arr.sort((a,b) => b.length - a.length)[0];
}

// getLongestWord(['a','short','algorithm']);
// "algorithm"


/* Return the longest words in a string/array */

function getLongestWords (arr) {
  let longestWords = [arr[0]];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length === longestWords[0].length) {
      longestWords.push(arr[i]);
    }
    else if (arr[i].length > longestWords[0].length) {
      longestWords = [arr[i]];
    }
  }
  return longestWords;
}

// getLongestWords(['this','is','sentence', 'sentence']);
// ["sentence", "sentence"]

function getLongestWords (arr) {
  let longestWords = arr[0].length; 
  arr.map(el => longestWords = Math.max(longestWords, el.length)); // map over input array, assign max el length to longestWords
  arr.filter(el => el.length === longestWords); // filter the input array by all words that have the value stored in longestWords
  return arr;
}

// getLongestWords (['pigs','in','space','space','space']);
// ["space", "space", "space"]


/* Return true/false if array contains duplcates */

function containsDuplicates (arr) {
  let hash = {};

  for (let i = 0; i < arr.length; i++) {
    if (hash[arr[i]]) return true; // could set it to != undefined, but it only has to be truthy to return true
    else hash[arr[i]] = i; // this could arguably be set to any truthy value
  }
  return false; // if it goes through the loop and did not find a duplicate
}


/* Find the first character that doesn't repeat in a string */

function firstNonRepeatingChar (str) {
  let arr = str.split('');
  let result = arr.filter(el => {
    if (arr.indexOf(el) === arr.lastIndexOf(el)) return el;
  }).shift();

  if (result == undefined) return -1;
  else return result;
};

// firstNonRepeatingChar('dad');
// "a"
// firstNonRepeatingChar('ababa');
// -1