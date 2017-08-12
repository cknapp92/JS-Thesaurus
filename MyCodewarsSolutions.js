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
