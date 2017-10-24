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

