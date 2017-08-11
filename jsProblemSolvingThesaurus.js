/* This is just a compilation of techniques I've discovered or tested to solve various problems in JavaScript. I wanted a place to centralize and review all of the notes that I have made in coming up with various solutions to challenging problems */


/* Get the last character in a string */

function lastCharString (string) {
	return string[string.length - 1];
}

lastCharString('anything'); // "g"

/* Get the last element in an array */

function lastCharArray (array) {
	return array[array.length - 1];
}

var arr1 = ['hello', 'hi', 'здравствуйте']; 

lastCharArray(arr1); // "здравствуйте"

/* Function - iterate contents of an array */

function iterateArray (array) {
	for (let i = 0; i < array.length; i++) {
		console.log(array[i]);
	}
}

var arr4 = ["kumkwat", "pumpkin", "rhubarb"];

iterateArray(arr4);
// kumkwat
// pumpkin
// rhubarb

/* Get the highest value of a series of numbers */

Math.max(10, -20, 15, 24); // 24

/* Return the highest value in array - Math.max.apply */

function getMax(numArray) {
	return Math.max.apply(null, numArray);
}

var arr2 = [25, 62, 24, 1];

getMax(arr2); // 62

/* Function - return highest value in array - for loop */ 

function largest (array) {
	var largestSoFar = array[0];
	for (let i = 1; i < array.length; i++){
		if (array[i] > largestSoFar) {
			largestSoFar = array[i];
		}
	}
	return largestSoFar;
}

var arr1 = [8, 0, -3, 4];

largest(arr1); // 8

var arr3 = [2, 0, 3, -2];

largest(arr3); // 3


/* To return the lowest value in an array */

function getMin(numArray) {
	return Math.min.apply(null, numArray)
} 


/* Function - return multiples of three in a new array */

function multiplesOfThree (array) {
	var result = [];
	for (i = 0; i < array.length; i++) {
		if (array[i] % 3 === 0) {
			result.push(array[i]);
		}
	}
	
	return result;
}

var arr3 = [2, 0, 3, -2];

multiplesOfThree(arr3); // (2) [0, 3]



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

/* Push a sequence of numbers into an array (i.e. 1 to 10) */

function Num2Array (numbers) {
	var numbers = []; // need to have empty array for numbers to be pushed into
	for (let i = 1; i <= 10; i++) {
		numbers.push(i);
	}
	return numbers;
}

Num2Array(); // (10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


/* Function - Push all even numbers in a string to an array */

function evenNumberPusher (string) {
var evenNumbers = [];
for (let i = 0; i < string.length; i++) {
	if (string.charAt(i) % 2 === 0) {
		evenNumbers.push(string.charAt(i));
	}
}
	return evenNumbers;
}

var numbers = '32491892374597';

evenNumberPusher(numbers); // (5) ["2", "4", "8", "2", "4"]



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




/* How to add numbers to elements over an array of numbers */


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

// doesn't work with strings with spaces 




/* Challenge - make a function that returns only the last three letters of any string that you pass into it */

var lastThree = function (string) {
	return string.slice(string.length - 3).toUpperCase();
}

lastThree('dingus'); // "GUS"



/* Simple function to det. whether a string is a tweet (140 char or less) */

//variant 1
function tweeter (x) {
	var y = x.length;
	return y <= 140;
} 

//variant 2
function tweeter (x) {
	var y = x.length;
    return y < 140 && y > 0;
}

tweeter ('here\'s my message'); // true




/* Check to see if a word/string is in a longer string */

var message = "here's my tweet";

function finder (x, y) {
	return x.indexOf(y) > -1;
}

finder (message, "tweet"); // true


/* Check to see if year is a valid input (bet. 1900 and 2017) */

function isYearRight (year) {
	return typeof year === "number" && year > 1900 && year < 2018
	}

isYearRight (1922);
// true
isYearRight (1899);
// false
isYearRight(-2000);
// false


/* Check if the last letter in a string is a question mark */

var question = "is this a question?";
var notQuestion = "this is not a question";

function questionOrNot (x) {
	if (x.charAt(x.length - 1) === '?') {
		return "it's a question";
	} else {
		return "it's not question";
	}
}

questionOrNot(question); // "it's a question"
questionOrNot(notQuestion); // "it's not question"


/* Challenge: tweet improver */

var message = "that's gotta hurt LOL";
var message1 = "whoa there buddy";

function tweetImprover (tweet) {
	var result;
	if (tweet.toLowerCase().indexOf("lol") == -1) {
	return result = tweet + " lol";
	} else {
		return tweet;
	}
	
}

tweetImprover(message); // "that's gotta hurt LOL"
tweetImprover(message1); // "whoa there buddy lol"


/* While loop that gives the even and odd numbers for any range */

var number = 0;

while (number <= 100) {
	if (number % 2 === 0) {
		console.log("even");
	} else {
		console.log("odd");
	}
	number = number + 1;
}

for (let number = 0; number <= 100; number++) {
	if (number % 2 === 0) {
			console.log("even");
		} else {
			console.log("odd");
		}
		number = number + 1;
	}
	
	
/* Make a function for the largest divisor of a given number */

function largestDivisor (number) {
	var result = 1; // smallest possible value it could be; situation when the number is prime
	for (let i = 2; i < number; i++){ // i < number so we don't get number returned as answer for largest divisor
		if (number % i === 0) {
			result = i;
		}
	}
	
	return result;
}

largestDivisor(33); // 11
largestDivisor(101); // 1
largestDivisor(44); // 22



/* Make a function that removes all vowels in a string */

function removeVowels (word) {
	if (typeof word !== "string") {
		throw "input a string";
	} 
	var result = ""; // iterate over each character in a string
	
	for (let i = 0; i < word.length; i++) {
		var currentChar = word.charAt(i).toLowerCase();
		if (currentChar !== "a" && currentChar !== "e" && currentChar !== "i" && currentChar !== "o" && currentChar !== "u") {
			result = result + word.charAt(i); // not currentChar b/c we want the words to be printed in their original style
		}
	} 
	return result;
} 

var message = "that's gotta hurt LOL";
removeVowels(message); // "tht's gtt hrt LL"



/* Function that returns the first lowercase letter in a string */

function firstLowerCase (string) {
	if (typeof string !== "string") {
		throw "input a string";
	} 
	var result = ""; // if there are no lower case letters, it will return ""
	for (let i = 0; i < string.length && result === ""; i++) // modification of the continuation condition (&& result === "") to break the loop 
	{
		if ("a" <= string.charAt(i) && string.charAt(i) <= "z")
			result = string.charAt(i); 
	}
	
	return result;
}

var message2 = "WWEFJLlkjsd";
firstLowerCase(message2); // "l"

var message3 = "HELLO everybody";
firstLowerCase(message3); // "e"



/* Counting numbers backwards (i.e. from 10 to 0) */

function countDown (number) {
	if (typeof number !== "number") {
		throw "please input number";
	}
	for (let i = number; i >= 0; i--) {
		console.log(i);
	}
}

countDown(5);
//5
//4
//3
//2
//1
//0

/* Function - sum numbers in an array */

function sum (list) {
	var sum = 0;
	
	list.forEach(function (number){
		sum = sum + number;
	})
	
	return sum;
}

var arr1 = [3, 2, 9, 12, 3];

sum(arr1); // 29



/* Function - double each item in array */

function doubles (list) {
	var result = [];
	
	list.forEach(function (number) {
		result.push(number * 2);
	})
	
	return result;
}

var arr1 = [3, 2, 9, 12, 3];
doubles (arr1); // [6, 4, 18, 24, 6]

function doublesWithMap (list) {
	var result = list.map(function (number){
		return number * 2;
	})
	return result;
}

doublesWithMap(arr1); // [6, 4, 18, 24, 6]

// can also return the result variable altogether

function doublesWithMap (list) {
	return list.map(function (number){
		return number * 2;
	})
	return result;
} // whenever we want to create a new array from an existing array, we use map function
// when we use map it calls the function on each element (i.e. number * 2); so it is useful when we want some operation done to each element of the array, otherwise leaving it unchanged

doublesWithMap(arr1); // [6, 4, 18, 24, 6]

/* Raise elements of array to 3rd power - map function */

var arr1 = [3, 2, 9, 12, 3];

arr1.map(function (number){
	return Math.pow(number, 3);
}) // [27, 8, 729, 1728, 27]



/* Get first letters of array of strings */

function getFirstLetters (listOfStrings) {
	return listOfStrings.map(function(word){
		// return word[0];
		return word.charAt(0);
	})
}

var arr4 = ["kumkwat", "pumpkin", "rhubarb"];
getFirstLetters(arr4); // ["k", "p", "r"]



/* Flip boolean values in array */

var boolean1 = [true, false, true, true, false];

boolean1.map(function(value){
		return !value; 
	}) // [false, true, false, false, true]
	
// or... as a function:
	
function flipBooleans (booleanArray) {
	return booleanArray.map(function(value){
		return !value;
	})
}

flipBooleans(boolean1); // [false, true, false, false, true]




/* Function - filter range of numbers in array */


function filter100 (arrayOfNum) {
	return arrayOfNum.filter(function (number){
	return number >= 100; // return only values >= 100
	})
}

var arr1 = [3, 200, 90, 102, 300];

filter100(arr1); // [200, 102, 300]


/* Function - filter even numbers in array */

function evenMaker (arrayOfNum) {
	return arrayOfNum.filter(function(number){
		return number % 2 === 0;
	})
}

var arr1 = [3, 200, 90, 102, 300];

evenMaker(arr1); // [200, 90, 102, 300]


/* Convert from string (w/ commas) to array  */

function Str2Array (string) {
	return string.split(",");
}

var message = "anything, everything, something";

Str2Array(message); // ["anything", " everything", " something"]


/* Convert from string (w/o commas) to array  */

function Str2Array (string) {
	return string.split(" ");
}

var message = "that is cool lol";

Str2Array(message); // ["that", "is", "cool", "lol"]


/* Convert from array to string */

function Array2String (array) {
	return array.join(" ");
}

var arr = ["that", "is", "cool", "lol"];

Array2String(arr); // "that is cool lol"




/* Fizz Buzz Challenge - multiples of three, replace with fizz */






/* Create HTML tags function */







/* create array from string of numbers with split method */



