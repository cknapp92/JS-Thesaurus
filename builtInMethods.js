/*


What does the includes() method do?

Function: Determines whether one string may be found within another string, returning true or false as appropriate.

Return value: true if the given string is found anywhere within the search string; false if not.

Arguments: Accepts two arguments: the text to search for and an optional index from which to start the search: 

str.includes(searchString[, position])

Ex:
let msg = "Hello world!";

msg.includes('o'); // true
msg.includes('x'); // false
msg.includes('l', 6); // true
	starts the search from index 6

- the includes() method is case-sensitive:
	msg.includes('HeLlO'); // false
	msg.toLowerCase().includes('HeLlO'.toLowerCase()); // true





What does the startsWith() method do?

Function: Determines whether a string begins with the characters of a specified string, returning true or false as appropriate.

Return value: true if the given characters are found at the beginning of the string; otherwise, false.

Arguments: Accepts two arguments: the text to search for and an optional index from which to start the search: 

str.startsWith(searchString[, position])

Case-sensitive: Yes

Ex:
let msg = "Hello world!";

console.log(msg.startsWith("Hello")); // true
console.log(msg.startsWith("o")); // false
console.log(msg.startsWith("o", 4)); // true
	starts by looking at index 4


Manual alternative to startsWith():

var haystack = 'hello world';
var needle = 'he';

if (haystack.indexOf(needle) == 0) {
	// Code if string starts with this substring
}

// or 

beginsWith = function(needle, haystack){
	return (haystack.substr(0, needle.length) == needle);
}






What does the endsWith() method do?

The endsWith() method returns true if the given text is found at the end of the string. It returns false if not. It accepts two arguments: the text to search for and an optional index from which to start the search. 


msg.endsWith('o' , 10);
	will only grab first 10 characters to do the search

What does the indexOf() method do?

Function: Unlike startsWith(), includes(), endsWith() methods, which return a boolean, indexOf() and lastIndexOf() convert a regular expression argument into a string and then search for that string. 


What does the lastIndexOf() method do?

Function: Unlike startsWith(), includes(), endsWith() methods, which return a boolean, indexOf() and lastIndexOf() convert a regular expression argument into a string and then search for that string.  


What does the repeat() method do?

Purpose: 

Useful For: Especially useful when manipulating text and in code formatting utilities that need to create indentation levels


Ex: 
'x'.repeat(3)); // 'xxx'
'hello'.repeat(2)); // 'hellohello'
'abc'.repeat(4)); // 'abcabcabcabc'


Ex:
// indent using a specified number of spaces 
	let indent = " ".repeat(4),
	 indentLevel = 0;
// whenever you increase the indent
  let newIndent = indent.repeat(++indentLevel);


The first repeat() call creates a string of four spaces, and the indentLevel variable keeps track of the indent level. Then, you can just call repeat() with an incremented indentLevel to change the number of spaces.


What is a rest parameter?

function  pick(object) {
	let result = Object.create(null);
	 // start at the second parameter
	for (let i = 1, len = arguments.length; i < len; i++) {
		result[arguments[i]] = object[arguments[i]];
	}
   return result;
}

let book = {
           title: "Master and Margarita",
            author: "Mikhail Bulgakov",
           year: 1940
             };
    
let bookData = pick(book, "author", "year");
 
bookData.author;   // "Mikhail Bulgakov"
bookData.year;     // 1940

This function mimics the pick() method from the Underscore.js library, which returns a copy of a given object with some speci ed subset of the original object’s properties. This example de nes only one argument and expects the  rst argument to be the object from which to copy properties. Every other argument passed is the name of a property that should be copied on the result. 
You should note a couple of things about this pick() function. First, it’s not at all obvious that the function can handle more than one param- eter. You could de ne several more parameters, but you would always fall short of indicating that this function can take any number of parameters. Second, because the  rst parameter is named and used directly, when you look for the properties to copy, you have to start in the arguments object at index 1 instead of index 0. Remembering to use the appropriate indices with arguments isn’t necessarily difficult, but it’s one more detail to keep track of.
ECMAScript 6 introduces rest parameters to help with these issues.


A rest parameter is indicated by three dots (...) preceding a named param- eter. That named parameter becomes an Array containing the rest of the parameters passed to the function, which is where the name rest parameters originates. For example, pick() can be rewritten using rest parameters, 
like this: 

function pick(object, ...keys) { 
	let result = Object.create(null); 
	for (let i = 0, len = keys.length; i < len; i++) { 
		result[keys[i]] = object[keys[i]]; 
}
	return result; 
}



*/ 