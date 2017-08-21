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
	return a; // moved return a; from previous lint to this line, between the last and second to last end curly brace.
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

