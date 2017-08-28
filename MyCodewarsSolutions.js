/* Change negative to a positive number in an array and vice versa */

var arr2 = [5, 2, 3];

function invert (array) {
	var a = [];
	for (let i = 0; i < array.length; i++) {
		if (array[i] < 0) {
		a[a.length] = Math.abs(array[i]);
		} else if (array[i] === 0) {
		a[a.length] = 0;	
		} else {
		a[a.length] = -Math.abs(array[i]);
		}
	}
	return a; // moved return a; from previous line to this line, between the last and second to last end curly brace.
}


invert (arr2); // [-5, -2, -3] 
// I finally figured it out!!!




/* "Basic Mathematical Operations" */

function basicOp(operation, value1, value2) {  
	var total;
	if (operation === '+') {
	total = value1 + value2;
	} else if (operation === '-') {
	total = value1 - value2;
	} else if (operation === '*') {
	total = value1 * value2;
	} else {
	total = value1 / value2;
	}
	return total;
}

console.log("Basic tests\n");
Test.assertSimilar(basicOp('+', 4, 7), 11); // Test Passed: Value == '11'
Test.assertSimilar(basicOp('-', 15, 18), -3); // Test Passed: Value == '-3'
Test.assertSimilar(basicOp('*', 5, 5), 25); // Test Passed: Value == '25'
Test.assertSimilar(basicOp('/', 49, 7), 7); // Test Passed: Value == '7'



/* Find the middle element */

var gimme = function (inputArray) {
	var min = inputArray.reduce((a, b) => a < b ? a : b);
	var max = inputArray.reduce((a, b) => a > b ? a : b);
	var mid = Number(inputArray.filter(i => i > min && i < max));
	var result = inputArray.indexOf(mid);
	return result;
}



https://www.codewars.com/kata/545a4c5a61aa4c6916000755/train/javascript


/* Find shortest word */


findShort = (s) => s.split(' ').sort((a,b) => a.length - b.length)[0].length;


https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9




/* Keep Hydrated! */

function litres(time) {
	var liters = Math.floor(time*0.5);
	return liters;
}

https://www.codewars.com/kata/582cb0224e56e068d800003c/train/javascript




/* Convert number to reversed array of digits */

// first attempt
function digitize(n) {
	var num = (n + '').split('');
	var result = Array.from(num)
	.reverse()
	.map(i => Number(i));
	return result;
}

//refactored
const digitize = n => ((n + '').split('').reverse().map(i => Number(i)));



/* Fake binary */

//first attempt
function fakeBin(x){
	var array = String(x).split('');
	return array.map(i => i < 5 ? '0' : '1').join('');
}

//refactored
const fakeBin = (x) => String(x).split('').map(i => i < 5 ? '0' : 1).join('');

https://www.codewars.com/kata/57eae65a4321032ce000002d/solutions/javascript


/* Make a function that does arithmetic */

function arithmetic(a, b, operator){
	if (operator === 'add') {
	return a + b;
} else if (operator === 'subtract') {
	return a - b;
} else if (operator === 'multiply') {
	return a * b;
} else if (operator = 'divide') {
	return a / b;
	}    
}



/* Get the middle character */

//first attempt

function getMiddle(s) {
	var midLetter = s[Math.floor((s.length-1)/2)];
 if (s.length % 2 !== 0) {
	return midLetter;
 } else {
	return midLetter + (s[Math.floor((s.length-1)/2) + 1]);
 }
}


/* Sum of Odd Cubed Numbers */


// first attempt

function cubeOdd(arr) {
		for (let h = 0; h < arr.length; h++) {
			console.log(arr[h]);
			if (typeof arr[h] === 'string') {
	     return undefined;
		}
}
		var cubedArray = [];
		for (let j = 0; j < arr.length; j++) {
			cubedArray[j] = Math.pow(arr[j], 3);
		}
		return cubedArray.filter(i => i % 2).reduce((a,b) => a+b);
}




/* Hit count */


//first attempt

function counterEffect(hitCount) {
	return hitCount.split('').map(i => [...Array(1 + Number((i))).keys()]);
} // finally solved by adding 1 directly outside of the parens that i was in. Kept trying to add it directly to i




/* Compare Strings by Sum of Chars */

//first attempt 
function compare(s1, s2) {
	var A = s1.split('').reduce((v,i) => v.charCodeAt(0) + i.charCodeAt(0));
	var B = s2.split('').reduce((v,i) => v.charCodeAt(0) + i.charCodeAt(0));
	return A === B ? true : false
}



/* Detect pangram */


function isPangram(string){
	var alph = "abcdefghijklmnopqrstuvwxyz".split('');
	return alph.every((i) => string.includes(i) ? true : false);
} /* don't need to pass in string in second function as (string, i) 
  * or create separate variable (i.e. str) 
  */


/* Discover the original price */

function discoverOriginalPrice(discountedPrice, salePercentage){
	const discount = (100 - salePercentage)/100;
	const origPrice = (discountedPrice / discount).toFixed(2); 
	if (origPrice == (discountedPrice / discount)) { 
	return (discountedPrice / discount); // if origPrice is whole integer, no decimals
	} else {
	return Number(origPrice); // if more than three, return two decimals
	}
}



/* Say hello! */

function greet(name) {
	if (name === null || name === '') { 
		return null
	}
	return `hello ${name}!`
}

greet('conrad'); // 'hello conrad!'
greet(null); // null
greet(''); // null


/* Recursion #1 - factorial */

const factorial = n => {
	if (n === 0) {
		return 1
	} else {
		return n * factorial(n - 1);
	}
}



/* square every digit */


//first attempt
const squareDigits = num => num.toString().split('').map(i => Math.pow(i,2)).join('')*1;

squareDigits(9119); // 811181

//2nd

var squareD = num => num.toString().split('').map(i => i*i).join('')*1;



/* Remove the minimum */

function removeSmallest(numbers) {
	var smallestNum = Math.min(...numbers);
	var pos = numbers.indexOf(smallestNum);
	var removedItem = numbers.splice(pos, 1);
	return numbers;
}

// 2nd attempt

function removeSmallest(numbers) {
	var smallestNum = Math.min(...numbers);
	var index = numbers.indexOf(smallestNum);
	var removedItem = numbers.splice(index, 1);
	return numbers;
}



/* Replace with alphabet position */


function alphabetPosition(text) {
	var alphabet = ' abcdefghijklmnopqrstuvwxyz'.split('');
	return text.toLowerCase().split('').map(i => alphabet.indexOf(i)).filter(i => i > 0 && i < 27).join(' ');
}


alphabetPosition('conrad is cool'); // "3 15 14 18 1 4 9 19 3 15 15 12"




/* Friend or Foe? */


const friend = friends => friends.filter(i => i.length === 4);

var names = ['john', 'terry'];

friend(names); // ["john"]



/* Folding your way to the moon */

function foldTo(distance) {
 if (distance <= 0) {
	 return null
 }
	let thickness = 0.0001;
	let folds = 0;
	while (thickness <= distance) {
		thickness *= 2;
		folds++;
	}
	return folds;

foldTo(384000000); // 42



/* Break camel case */


function solution(string) {
	var charCode = Math.min(...string.split('').map(i => i.charCodeAt()));
	var char = String.fromCharCode(charCode);
	return string.replace(char, ' ' + char);  
}

solution('camelCasing') // 'camel Casing'


/* Sum of two lowest positive integers in array */

function sumTwoSmallestNumbers(numbers) {  
	var nums = numbers.sort((a,b) => a - b);
	return nums[0] + nums[1];
};


/* Summing a number's digits */

function sumDigits(number) {
	return String(Math.abs(number)).split('').map(i => Number(i)).reduce((a,b) => (Math.abs(a)+ Math.abs(b)));
}

sumDigits(-12); // 3
sumDigits(12); // 3




/* Odd or even? */

function oddOrEven(array) {
	if (array === []) {
	  return 'even';
	}
	var result = array.reduce((a,b) => a+b, 0); // needed to add 0 as a default value, in case [] was passed into reduce 
	// see: https://stackoverflow.com/questions/23359173/javascript-reduce-an-empty-array
	if (result % 2) {
	 return 'odd';
	} else {
	 return 'even';
	}
}


/* Reversed strings */

function solution(str){
	return [...String(str)].reverse().join('');
}


/* Counting Duplicates */

function duplicateCount(text){
	try {
	 return text.toLowerCase().split('').sort().join('').match(/(.)\1+/g).length;
	}
	catch(err) {
	 return 0;
	}
}




/* Rot 13 (partially completed */ 


function rot13(message){
	var alphabet = ' abcdefghijklmnopqrstuvwxyz'.split('');
	var mess = message.toLowerCase().split('').map(i => alphabet.indexOf(i) + 13);
	var newA = [];
	for (let i in mess) {
	  if (mess[i] > 27) {
	    newA.push(mess[i] - 26);
		} else {
	    newA.push(mess[i]);
		}
	} 
	return newA.map(i => alphabet[i]).join('');
}

rot13('test') // "grfg"

https://www.codewars.com/kata/530e15517bc88ac656000716/train/javascript


/* Remove first and last character */

function removeChar(str){
	var s = str.split('');
	var removedItem1 = s.splice(0,1);
	var removedItem2 = s.splice(s.length - 1, 1);
	return s.join('');
};



/* Double char */

function doubleChar(str) {
	return str.split('').map(i => i+i).join('');
}

doubleChar('something'); // "ssoommeetthhiinngg"



/* Fake binary */

function fakeBin(x){
	return x.split('').map(i => i < 5 ? '0' : '1').join('');
}



/* Valid Parentheses */

function validParentheses(parens){
	if (parens.length % 2 === 0 && parens[0] === '(' && parens[parens.length - 1] === ')') {
		return true;
	} else {
		return false;
	}
}

validParentheses("()"); // true
validParentheses("())");  // false


/* Pick peaks - partial solution */

function pickPeaks(arr){
	var ans = {
		pos:[],
		peaks:[]
	}
	for (var i = 1; i < arr.length - 1; i++) 
		if (arr[i-1] < arr[i] && arr[i] >= arr[i+1]) {
				ans.pos.push(i) && ans.peaks.push(arr[i]);
	} 
	return ans;
}