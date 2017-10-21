/*

Arrays - firstDuplicate (attempt 1 - timed out)

function firstDuplicate(a) {

for (let i = 0; i < a.length; i++) {
  if (a.indexOf(a[i]) !== i) {
    return a[i];
  }
}
  return -1;
}


(attempt 2 - passed)

function firstDuplicate(a) {

var hash = {};

for (let i = 0; i < a.length; i++) {
  if(hash[a[i]]) {
    return a[i];
  }
    hash[a[i]] = true;
  }
  return -1;
}



Strings - Amend the Sentence

function amendTheSentence(s) {
  return s.replace(/([A-Z])/g, ' $1').trim().toLowerCase();
}


Arrays - find first non repeating character in string

function firstNotRepeatingCharacter (s) {
  var result = s.split('').filter(function (val, i, arr) {
    if (arr.indexOf(v) === arr.lastIndexOf(v)) return v;
  }).shift();

  if (typeof result === 'undefined') return '_';
  else return result;
}


function sumOfTwo (a, b, v) {

  for (var i of a) {
    if (b.indexOf(v - i) > -1) {
      return true;
    } else b.push(i);
  } 
  return false;
}


function rotateImage(a) { 

function getArray2dCW(a, x, y) {
  var t = x;
  x = y;
  y = a.length - t - 1;
  return a[y][x];
}

var newarr = [];
a.forEach(() => newarr.push(new Array(a[0].length)));

for (var i = 0; i < newarr.length; i++) {
  for (var j = 0; j < newarr[0].length; j++) {
    newarr[i][j] = getArray2dCW(a, j, i);
  }
}
return newarr;

}


RegEx - Is Sentence Correct?

function isSentenceCorrect(sentence) {
  var re = /^[A-Z][^?!.]*[?.!]$/ ;
  return re.test(sentence);
}


Bubble Sort

function bubbleSort(items) {

  var swap = function(firstIndex, secondIndex){
      var temp = items[firstIndex];
      items[firstIndex] = items[secondIndex];
      items[secondIndex] = temp;
  }

  var len =  items.length ,
      i, j, stop;

  for (i = 0; i < len; i++){
      for (j = 0, stop = len - i; j < stop - 1; j++){
          if (items[j] > items[j + 1]){
              swap(j, j + 1);
          }
      }
  }

  return items;
}


Merge Sort


function mergeSort(sequence) {
  var merge = function(sequence, left, middle, right) {

    var result = [];
    var i;
    var j;

    for (i = left, j = middle; i < middle && j < right; ) {
      if (sequence[i] < sequence[j]) {
        result.push(sequence[i]);
        i++;
      }
      else {
        result.push(sequence[j]);
        j++;
      }
    }

    while (i < middle) {
      result.push(sequence[i]);
      i++;
    }

    while (j < right) {
      result.push(sequence[j]);
      j++;
    }

    for (i = left; i < right; i++) {
      sequence[i] = result[i - left];
    }
  }

  var split = function(sequence, left, right) {

    var middle = Math.floor((left + right) / 2);
    if (left + 1 === right) {
            return;
        }

    split(sequence, left, middle);
    split(sequence, middle, right);
    merge(sequence, left, middle, right);
  }

  split(sequence, 0, sequence.length);

  return sequence;
}


k-th Largest Element

function kthLargestElement(nums, k) {
  return nums.sort((a,b) => b - a)[k - 1];
}

climbingStairs

function climbingStairs(n) {
  var arr = [],
        i;
    
    arr[0] = 0;
    arr[1] = 1;
    arr[2] = 2;
    
    for(i = 3; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr[n];
}

Sum of Two (passed tests)

function sumOfTwo(a, b, v) {
    var hash = [];
    for(let i = 0; i < a.length; i++) {
       var diff = v - a[i];
       hash[diff] = a[i];
    }
    
    for (let j = 0; j < b.length; j++) {
       if(hash[b[j]] != null) {
          return true;
       }
    }
    return false;
}


*/