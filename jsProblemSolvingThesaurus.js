/* This is just a compilation of techniques I've discovered or tested to solve various problems in JavaScript. I wanted a place to centralize and review all of the notes that I have made in coming up with various solutions to challenging problems */

/* Get the highest value of a series of numbers */

Math.max(10, -20, 15, 24); // 24

/* To return the highest value in an array */

function getMax(numArray) {
	return Math.max.apply(null, numArray);
}


var arr2 = [25, 62, 24, 1];

getMax(arr2); // 62


/* To return the lowest value in an array */

function getMin(numArray) {
	return Math.min.apply(null, numArray)
} 



/* Split a string into an array of strings */

var numList = "4 6 2 3"; // string of numbers

function arrayOfStrings (number) {
	var arr = number.split(" ")
	return arr;
}

arrayOfStrings (numList); // ["4", "6", "2", "3"]

typeof arrayOfStrings(numList); // "object"
typeof numList; // "string"


/* split part of a string into an array of strings */

var myString = 'Hello World. How are you doing?';
var splits = myString.split(' ', 3);

console.log(splits); // ["Hello", "World.", "How"]


/* How to sum an array */

function add (x, y) {
	return x + y;
}

var arr3 = [5, 2, 3];

arr3.reduce(add, 0); // 10

// note: If the array is empty and no initialValue is provided, TypeError will be thrown. 


/* How to reverse a string */

var str = "anything";

function reverseStr () {
	str = str.split('').reverse().join('');
	return str;
} // "gnihtyna"


for (let i = 0; i < str.length; i++) {
	str = str.charAt(i);
	print str;
}


/* How to print out each letter of a word in console (with charAt() method) */

var str = "dingus";

function printer () {
	for (let i = 0; i < str.length; i++) {
		console.log(str.charAt(i));
	}
}

printer();


/* Map a string of numbers to an array */

var str = "1 2 4 5";

function mapping () {
	numbers = numbers.split(' ').map(Number)
	return numbers;
} // map is for generating a new array

mapping(str); // (4) [1, 2, 4, 5]


/* Very quick way to find max/min of an array of numbers */

var arr1 = [5, 2, 10];

Math.max(...arr1); // 10

Math.min(...arr1); // 2



/* how to find square root w/o method */


function squareRoot (x) {
    var y = Math.pow(Math.abs(x), 1/2)
	return x < 0 ? -y : y; // if we only had 'return y' in this line, we would only get the right answer for positive numbers
	}
	
/* Fastest way to convert smth into a number */

// unary plus, operator: +x

+3     // 3
+'3'   // 3
+true  // 1
+false // 0
+null  // 0
+function(val){  return val } // NaN


/* to combine an array of strings into a single string */

// using concat method


var greeting = ["Mark", "Bill", "and", "Dave"];

"".concat(...greeting); // MarkBillandDave



/* Making numbers positive or negative */

Math.abs(num) => Always positive
-Math.abs(num) => Always negative


function smth (arr) {
	if (arr[i] < 0) {numbers.map(function() {
		return x * 2;
}



/* CodeWars Problem - change negative to a positive number in an array and vice versa */

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


/* Quicker method to turn positive numbers to negative and vice versa */

var arr1 = [8, 0, -3, 4];

function invert(array) {
	return array.map( x => x === 0 ? x : -x);
} // [-8, 0, 3, -4]

function invert(array) {
	return array.map(x => x && -x);
} // [-8, 0, 3, -4]

function invert(array) {
	return array.map(i => 0 - i);
} // " "



/* How to append letters to elements over an array of strings */

var arr1 = ['Apple', 'Banana', 'Pear'];


var adder = arr1.map(function(array){
	return array + this;
}, 's'); 

console.log(adder); //["Apples", "Bananas", "Pears"] // taken from scriptverse


//my version (for letters)


var arr4 = ["kumkwat", "pumpkin", "rhubarb"];

function adder (array) {
	return array.map(i => i +'s');
} 

adder(arr4); // (3) ["kumkwats", "pumpkins", "rhubarbs"]




/* How to append numbers to elements over an array of numbers */


var items = [1,2,3];
items.map(function(item) { 
	return item + 1;
}); // [2,3,4];


function adder (array) {
	return array.map(i => i +1);
} 

adder(items); // (3) [2, 3, 4]



/* Check whether strings in an array contain palindromes */

var items = ['mom', 'dad', 'brother'];
items.map(function(item) {
	return item.split('').reverse().join('') === item;
}); // (3) [true, true, false]

/* how I rewrote it: */

var items = ["mom", "dad", "evade me dave", "otto"];

function palindromer (array) {
	return array.map(i => i.split('').reverse().join('') === i);
}

palindromer(items); // (4) [true, true, false, true]




/* create array from string of numbers with split method */



