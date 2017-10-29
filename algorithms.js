/* Swap first and last elements of an array */

function swapFirstLast (arr) {
  [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
  return arr;
}

// swapFirstLast([1,2,3,4,5]);
// [5, 2, 3, 4, 1]

/* Get key with the max/min value */

let obj = {angular: 4, vue: 2, react: 3, vanilla: 1};

Object.keys(obj).reduce((a,b) => obj[a] > obj[b] ? a : b);
// "angular"
Object.keys(obj).reduce((a,b) => obj[a] > obj[b] ? b : a);
// "vanilla"


/* Find the mode of an array */

function findMode (arr) {
  let freq = arr.reduce((acc, cur) => {
    if (acc[cur]) acc[cur]++;
    else acc[cur] = 1;

    return acc;
  }, {}); 

  return Object.keys(freq).reduce((a,b) => freq[a] > freq[b] ? a : b);
}


/* Find the mode and frequency of mode in sorted array */

function findModeAndFreq (arr) {
  let mode = {};
  let max = 0, 
    count = 0;

  arr.forEach((el) => {
    if (mode[el]) mode[el]++;
    else mode[el] = 1; 

    if (mode[el] > count) {
      max = el;  
      count = mode[el];
    }
  });

  return {max, count};
}

// arrayMode([3,3,8,9]);
// {max: 3, count: 2}


/* Find the index of array element closest to target value */

function indexOfClosest (arr, target) {
  let smallestDistance = Number.MAX_SAFE_INTEGER;
  let resultIndex = 0; // index we want to return

  arr.forEach((el, i) => {
    let distance = Math.abs(target - el); // calculate the distance between the target and the number

    if (distance < smallestDistance) { // if the distance is less than the current smallest distance
      resultIndex = i; // we set the index of that number to the result index (because it is currently closest)
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
  return arr.filter((el, i) => arr.indexOf(el) === i);
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


/* Return true/false if array contains duplicates */

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


/* Find the longest common prefix of strings in an array */

function longestCommonPrefix (arr) {
	var len = arr.length;
	var prefix = '';
	
	if (len == 0) return prefix;
	for (let i = 0; i < arr[0].length; i++) {
		for (let j = 1; j < len; j++) {
			if (arr[j][i] != arr[0][i]) {
				return prefix;
			}
		}
		prefix += arr[0][i];
	} 
	return prefix;
};

// longestCommonPrefix(['dang','danger', 'dan']);
// "dan"


/* You are climbing a stair case. It takes n steps to reach the top. You climb either 1/2 steps each time. In how many distinct ways can you climb to the top? */

function climbStairs (num) {
  let arr = [];

  arr[0] = 0;
  arr[1] = 1;
  arr[2] = 2;

  for (let i = 3; i <= num; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[num];
}

// climbStairs(10);
// 89

/* Find the max sum of a subarray within an input array */

function maxSubArray (arr) {
  let sum = 0;
  let maxSum = 0;
      
  for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
      
      maxSum = Math.max(sum, maxSum);
      
      if (sum < 0) sum = 0;
  }
  
  return maxSum;
};

// maxSubArray([-2,1,-3,4,-1,2,1,-5,4]);
// 6
// maxSubArray([-2,1,-3,4,-1,3,1,-5,4]);
// 7

function findLocalMaxima (arr) {
  let maxima = [];

  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i - 1] < arr[i] && arr[i] > arr[i + 1]) maxima.push(arr[i]);
  }
  return maxima;
}

// findLocalMaxima([2,3,1,5,4]);
// [3, 5]


/* Count Number of Lowercase Letters in String */

function lowercaseCount (str) { 
  return (str.match(/[a-z]/g) || []).length
}

/* Return length of longest zigzag subsequence in array */

function zigzag (a) {
  let inc = [1];
  let dec = [1];

  let result = 0;

  for (let i = 1; i < a.length; i++) {
    let maxInc = 0;
    let maxDec = 0;
    for (let j = 0; j < i; j++) {
      if (a[j] > a[i]) {
        if (dec[j] > maxDec) maxDec = dec[j];
      } else if (a[j] < a[i]) {
          if (inc[j] > maxDec) maxInc = inc[j];
      }
    }
    inc[i] = maxDec + 1;
    dec[i] = maxInc + 1;

    if (inc[i] > result) result = inc[i];
    if (dec[i] > result) result = dec[i];
  }

  return result;
}

// zigzag([2,3,1,5,4]);
// 5
// zigzag([2,3,3,5,4]);
// 3

/* Function that removes all vowels in a string */

function disemvowler (str) {
  return str.replace(/[aeiou]/g, '');
}

// disemvowler("codewars");
// "cdwrs"

/* Return the number of a words in a string */

function numOfWords (str) {
  return str.match(/\S+/g).length;
}
// numOfWords ('this is a very long sentence');
// 6

/* List the indices of all the vowels in a word */

function listVowelIdx (str) {
  let vowels = 'aeiou';

  return str.split('').reduce((acc, val, i) => {
    if (vowels.includes(val) === true) acc.push(i);
    return acc;
  }, []);
}

// listVowelIdx('nelson');
// [1, 4]

/* Return the product of adjacent elements in array */

function productElements (arr) {
  return arr.slice(1).map((el, i) => el * arr[i]);
}
// productElements([3,2,6]);
// [6, 12]

function countSubStrs (str, substr) {
  return str.split(substr).length - 1;
}

// countSubStrs ('this is a long is string', 'is');
// 3

/* Find the the nth index of a character in a string */

function nthIndexOf (str, char, n) {
  let arr = [];

  for (let i = 0; i < str.length; i++) {
    if (str.slice(i, i + char.length) === char) {
      arr.push(i);
    }
  }
  return arr[n - 1];
}

// nthIndexOf('watermelon','e', 2);
// 6

/* Count words in a string */

function wordCount (str) {
  return str.match(/\w+/g).length;
}

function wordCount (str) {
  return str.split(/\s+/).length;
}