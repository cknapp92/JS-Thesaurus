/* This is just a compilation of techniques I've discovered or tested to solve various problems in JavaScript. I wanted a place to centralize and review all of the notes that I'm made in coming up with various solutions to challenging problems */

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





