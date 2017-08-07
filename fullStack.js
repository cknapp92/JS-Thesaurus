/* 2.1.2 */

// loops - runs a certain amt of time until a condition is met/true
// begin with 'while' loop

function randomNumber (upper) {
	return Math.floor(Math.random() * upper) + 1;
}

var counter = 0; // each time the loop runs, we add 1 to counter
while (counter < 10) { // as long as num in 'counter' var < 10, the loop will run
	var randNum = randomNumber(6);
	document.write(randNum + '');
	counter += 1;
}



/* 2.1.3 */

// you don't need to always use a counter, just a condition that evaluates to false

var upper = 20000; //set an upper limit for comp's guesses
var randomNumber = getRandomNumber(upper);
var guess; // comp's guesses
var attempts = 0; // number of attempts made

function getRandomNumber (upper) {
	return Math.floor(Math.random() * upper) + 1;
} // use this to gen. numbers and computer's guesses

while ( guess !== randomNumber ) { // compare comp's guess with random number variable
	guess = getRandomNumber(upper);
	attempts += 1;
}
document.write("<p>The random number was: " + randomNumber + "</p>");
document.write("<p>It took " + attempts + " attempts to get it right</p>");


// while loops - the condition is evaluated before the loop
// if the test condition is not true at the beginning, the loop will never run
// you always need a way to break out of the loop; something has to chnage inside the loop to stop it from running
// the most common way to exit a loop is to change a variable in the loop that causes the test condition to evaluate to false

while (true) { // code runs forever; programmers call this an endless loop
} // an endless loop can stop the webpage from running



/* 2.1.4 */

do {
} while () // runs as long as condition is true
// there's one diff between do/while and while loops -- the do-while loop will always evaluate the code block at least once
// that's because the condition isn't test until after the code block

while () { //tests condition at the beginning, doesn't run at all if condition is false
}

do {
} while () // doesn't check the code block until it runs at once

// why use a do-while loop? I.e. to prompt a user for information and make sure they give it to you. You want to run a loop at least once for a response

var randomNumber = getRandomNumber(5);
var guess;
var guessCount = 0;
var correctGuess = false; // this var is a 'flag' - used to det. the state of a part. condition; we can waive this var like a flag when it turns to true

function getRandomNumber (upper) {
	var num = Math.floor(Math.random() * upper) + 1;
	return num;
}

do {
	guess = prompt('I am thinking of a number between 1 and 5...'); // collects the player's guess
	guessCount += 1; // increase the counter after an attempt
	if (parseInt(guess) === randomNumber) { // return string from prompt into number
		correctGuess = true;
	} 
} while (!correctGuess) 

document.write('<h1>You guessed it!</h1>');
document.write('<h2>The number was ' + randomNumber + '</h2>');
document.write('It took you ' + guessCount + ' attempts');



/* 2.1.5 */

// 'for' loops - actions that need to run a particular number of times
// common way to work w/ arrays, to look through each value one at a time

/* while loop example */
var counter = 0;
while (counter < 10) { // interpreter compares value in counter to 10
	document.write (counter);
	counter +=1; // after 10 loops, the counter is set to 10, the condition is false, loop stops
}

/* for loop example */
for (var counter = 0; counter < 10; counter += 1) { // (init declaration of counter (only runs once before for loop is executed); condition; changes the counter each time) 
} // runs each time the condition remains true

// i instead of 'counter'
for (var i = 1; i <=10; i += 1) { // since var is just a counter, it doesn't need a descriptive name, just i
}

// example of for loop

var text = ''; // create 'text' var and give it an empty string

for (var i = 1; i <= 100; i+= 1) {
	text += '<div>' + i + '</div>'; // add string of text to variable
}
	document.write(text);




/* 2.1.6 */

// break statement; when encountered, immediately exits that loop


while (true) {
	break; 
}

// (previous) example,

do { // used do-while to make sure the prompt appeared at least once
	guess = prompt('I am thinking of a number between 1 and 5...'); // collects the player's guess
	guessCount += 1; // increase the counter after an attempt
	if (parseInt(guess) === randomNumber) { // return string from prompt into number
		correctGuess = true;
	} 
} while (!correctGuess) 

// changed to while loop

while (true) { 
	guess = prompt('I am thinking of a number between 1 and 5...'); // collects the player's guess
	guessCount += 1; // increase the counter after an attempt
	if (parseInt(guess) === randomNumber) { // return string from prompt into number
		correctGuess = true;
		break;
	} //works the same as before, even though it seems it would be an infinite loop

// change game to only allow a certain number of guesses; can use a while or a for loop for this

while (guessCount < 10) {
	guess = prompt('I am thinking of a number between 1 and 5...'); // collects the player's guess
	guessCount += 1; // increase the counter after an attempt
	if (parseInt(guess) === randomNumber) { // return string from prompt into number
		correctGuess = true;
		break;
	}
if (correctGuess) { // use conditional statement to see if the user correctly guessed the number
	document.write('<h1>You guessed it!</h1>');
	document.write('<h2>The number was ' + randomNumber + '</h2>');
	document.write('It took you ' + guessCount + ' attempts');
} else {
	document.write('<h1>Sorry, you did not guess the number</h1>');
} 



/* 2.1.7 */

// DRY - don't repeat yourself
// loops help w/ that, as well as functions
// refactoring - process of improving a program



/* 2.1.8 */

var html = '';
var red;
var green;
var blue;
var rgbColor;

for (var i = 0; i < 10; i += 1) {
	red = Math.floor(Math.random() * 256);
	green = Math.floor(Math.random() * 256);
	blue = Math.floor(Math.random() * 256);
	rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
	html += '<div style="background-color:' + rgbColor + '"></div>';
}
document.write(html);



/* 2.1.9 */

var html = '';
var rgbColor;

function randomRGB() {
	return Math.floor(Math.random() * 256 );
}

function randomColor() {
	var color = 'rgb(';
	color += randomRGB() + ',';
	color += randomRGB() + ',';
	color += randomRGB() + ',';
	return color;
}
function print(message){
	document.write(message);
}

for (var i=0; i < 100; i += 1) {
	rgbColor = randomColor();
	html += '<div style="background-color:' + rgbColor + '"></div>';
}

print(html);



/* 2.2.1 */

// array - data structure, like a variable
// variable - only contains one item, which has to be declared
// array is a flexible method of holding information, can hold any amount and any type of data
// you don't need to know in advance how many items will be in it

var myShopping = []; // creating an array is the same as a simple variable
var shoppingList = []; // empty array, an array literal
var shoppingList = [ 
	'carrots',
	'milk',
	'eggs'
	]; // common for arrays to be broken up into multiple lines

	// many things come in groups that can be organized into arrays

/* 2.2.2 */

// to access a single value in an array, we use an index
// index indicates the place of the item in that list
// 'undefined' is the answer we receive when we try to access an index that isn't filled
// most shopping carts can be represented by an empty array



/* 2.2.3 */

// there are many ways to work with arrays
// length property - contains the number of items in an array

numbers.length // length method - tells the length of an array
numbers[numbers.length] = 7; // can be used to write a number at the end of an array;

// method is an action you can perform on an object

numbers.push() // push method - push an item into the end of the array
numbers.push(7,8,9); // you can push multiple items into an array

numbers.unshift(); // unshift method - push item to the beginning of an array

/* example */
// first js file (we need this to load first, otherwise the second file won't work)
function printList( list ) {
	var listHTML = '<ol>';
	for (var i = 0; i < list.length; i += 1) {
		listHTML += '<li>' + list[i] + '</li>';
	}
	listHTML += '</ol>';
	print(listHTML);
}
function print(html) {
	document.write(html);
}

// second js file 
var playList = [];
playList.push('I did it my way');
playList.push('Respect', 'Imagine');
playList.unshift('Born to Run');

printList( playList );


/* 2.2.4 */

//pop removes and returns the last item in an array

numbers.pop(); // removes the last item and removes it; can use it to retrieve that number
var lastitem = numbers.pop(); // lastitem holds last item
var firstitem = number.shift(); // firstitem holds first item

// shift is like the first customer in line being helped
// push is the last customer getting in line

var nums = [1,2,3,4,5];
nums.length = 5
nums.push(6) = 6 // push method returns the length of the array; the array's length is 6
// if we type 'nums' we get a print-out of the items in the array

nums.pop() = 6 // the 6 is gone
nums.unshift(0); 6 // this returns the value 6 because we've added a new value and the length is now 6

nums.shift(); 0 // let's get rid of the first value and it spits it out



/* 2.2.5 */

// the for loop is often use to loop through an array (or 'iterate' through an array)

var students = ['Sasha', 'Lynn', 'Jennifer', 'Paul'];
for (var i=0; i < 4; i += 1) { // how can we be sure that this loop will have 4 items, and need to iterate it 4 times?
}

/* change example */

var students = ['Sasha', 'Lynn', 'Jennifer', 'Paul'];
for (var i = 0; i < students.length; i += 1) {
	console.log(students[i]); // the i counter variable maps perfectly to our array of items
} // iterates through the four names 'Sasha', 'Lynn', 'Jennifer', 'Paul'

/* example */

var playList = [
	'Men at Work - Land Down Under',
	'Toto - Africa'
];

function print(message) { // prints out a string of content to the document
	document.write(message); // parameter - variable that holds some value that is passed to the function
}

function printList(list){ // job: to take an array of items and print out as an ordered list in html; give parameter a simple name like 'list'
	var listHTML = '<ol>';
	for (var i = 0; i < list.length; i += 1) {
		listHTML += '<li>' + list[i] + '</li>';
	}
	listHTML += '</ol>'; // build a complete chunk of HTML and add it to our page
	print(listHTML);
}
printList(playList); // call our function and pass our array to it



/* 2.2.6 */

// join method - to display all items in an array in a string
// can pass any method to join method and mult. characters

// concat - can combine arrays; doesn't change original arrays

// index of method - to search to see if an item is in an array, returns index
// if it is not in the list, you get the number -1

/* example program */
var inStock = ['apples', 'eggs', 'milk'];
var search;

function print(message) {
	document.write('<p>' + message + '</p>');
}

while (true) {
	search = prompt("search for a product. Type 'list' to show all of the produce and 'quit' to exit");
	if (search === 'quit') {
		break;
	} else if (search === 'list') {
		print(inStock.join(', '));
	} else if ((inStock.indexOf(search)) > -1) {
		print('Yes, we have ' + search + ' in stock');
	} else {
		print(search + ' is not in stock');
	}
  }



/* 2.2.7 */

// two-dimensional array - a list containing other lists
// think of a two-dimensional array like a spreadsheet
// to make an array like this, we have to make each item an array
// you can access the values of the nested array with another index value

/* improving previous example */

var playList = [
	['I did it my way', 'Sinatra'],
	['Land down under', 'Men at Work' ],
	['Africa', 'Toto']
];

function print(message) { 
	document.write(message); 
}

function printSongs(songs){ // print out a list of songs/performers
	var listHTML = '<ol>';
	for (var i = 0; i < songs.length; i += 1) {
		listHTML += '<li>' + songs[i][0] + ' by ' + songs[i][1] + '</li>'; // we need to access both the song and performer
	}
	listHTML += '</ol>'; 
	print(listHTML);
}
printSongs(playList); // prints out the songs 'by' the performer in an ordered list


/* 2.2.9 */

var questions = [
	['How many states are in the US?', 50],
	['How many continents are there?', 7],
	['How many legs does an insect have', 6]
];

var question;
var answer;
var response;
var html;

function print(message){
	var outputDiv = document.getElementById('output'); // locate a tag with a specific id attached to it
	outputDiv.innerHTML = message; // you can use innerHTML to change what is printed to the page
} // tells the interpreter to look at the webpage and find the tag 'output'

for (var i = 0; i < questions.length; i += 1) {
	question = questions[i][0];
	answer = questions[i][1];
	response = parseInt(prompt(question)); 
	if (response===answer) {
		correctAnswers += 1;
	}
}
html = "You got " + correctAnswers + " answers right."



/* 2.2.11 */

/* solution */

var questions = [
	['How many states are in the US?', 50],
	['How many continents are there?', 7],
	['How many legs does an insect have', 6]
];

var correctAnswers = 0;
var question;
var answer;
var response;
var html;
var correct = [];
var wrong = [];

function buildList(arr){
	var listHTML = '<ol>';
	for (var i = 0; i <arr.length; i += 1) {
		listHTML += '<li>' + arr[i] + '</li>';
	}
	listHTML += '</ol>';
	return listHTML;
}

for (var i = 0; i < questions.length; i += 1) {
	question = questions[i][0];
	answer = questions[i][1];
	response = parseInt(prompt(question)); 
	if (response===answer) {
		correctAnswers += 1;
		correct.push(question);
	} else {
		wrong.push(question);
	}
}

function print(message) { 
	document.write(message); 
}

html = "You got " + correctAnswers + " question(s) right.";
html += "You got these questions right.";
html += buildList(correct);
html += "<h2> You got these questions wrong.</h2>";
html += buildList(wrong);
print(html);


/* 5.1.2 */

// alert is a browser function

alert("I made the browser message me.");

location.href // we can show the current url; we see that url printed in console matches url in address bar

// these variables are part of the browser's global environment
// global variables are properties of a single global object called 'window'

window // if we type in window into the console we can see all its properties
// all these globals are properties on the window object

window.alert('This is the same alert function'); // same message box, just like with 'alert()' method

/* change color of heading to purple */
document.getElementById('myHeading').style.color = 'purple'; // in short, we selected an element and then manipulated it

document.getElementById('myHeading').style.backgroundColor = 'yellow'; // change the heading background color to yellow


/* 5.1.3 */

/* the document is a global object representing the html and content of a webpage. with JS you can select parts of the webpages by interacting with the document. Understanding how that works involves understanding the DOM. */

/* a DOM is a map of a webpage that JS can use; changes that JS makes to the DOM change the webpage; like changing a street on the map and changing it in real life*/

// the document element, or node, would be the root node

// head and body are siblings
// h1 is child of body
// body is parent of ul elements

/* 5.1.4 */

// the main global variable is the document object, which like all other global variables is a property of the window object

// basic tasks JS can do with DOM: 1) select an element, 2) read or change element, 3) respond to user events

/* 5.2.1 */

const myHeading = document.getElementById('myHeading'); // we have a reference to the heading element stored in the constant myHeading
myHeading.addEventListener(); // this tells the heading elements to start looking for browser events; there are many browser events

myHeading.addEventListener('click', () => {
	myHeading.style.color = "red";
});  // we want to look for any momemnts where user clicks headline
// first parameter is the name of the event, 'click'
// now we need to tell it what to do when there is a click, so we add a function as the 2nd parameter

/* 5.2.2 */

// change color by clicking button; need to select that button element first

const myButton = document.getElementById('myButton');

myButton.addEventListener('click', () => {
	myHeading.style.color = "red";
});

// lets enable the button to change the heading to whatever color

const myTextInput = document.getElementById('myTextInput');

myTextInput.addEventListener('click', () => {
	myHeading.style.color = myTextInput.value;
});

/* 5.2.3 */ 

.getElementsByTagName('p'); // will get all the <p> elements in a page; returns a collection of elements
// note: a collection of elements is like an array; you can access an element directly using its index or loop over the whole collection to access all of them

// note: refresh the console to reset things (i.e. constants)

// we access these elements the same way we would access elements in an array
const myParagraph = document.getElementsByTagName('p');
myParagraph[0]; // returns paragraph element

// now let's change the color of the p to blue
myParagraph[0].style.color = 'blue';

// lets use getElementsByTagName to select the heading element

const myHeading = document.getElementsByTagName('h1'); // we're getting a collection back, but there is only one on the page, again use index 0
const myButton = document.getElementById('myButton');
const myTextInput = document.getElementById('myTextInput');

myTextInput.addEventListener('click', () => {
	myHeading.style.color = myTextInput.value;
});

// getElementsByTagName shines if you have multiple elements to select

// lets add an ul of things that are purple and add it to the html File()
<p>Things that are purple>
<ul>
	<li>peonies</li>
	<li>hamburgler</li>
	<li>grapes</li>
</ul>

const myList = document.getElementsByTagName('li');
myList[2].style.color = 'purple'; //in the console

//lets change the whole list to purple
// lets iterate over all of them with a for loop

// in js File
const myList = document.getElementsByTagName('li');

for (let i = 0; i < myList.length; i++) {
	myList[i].style.color = 'purple';
}


/* 5.2.4 */

getElementsByClassName 

// add things not purple with class name

<li>peonies</li>
<li class='error-not-purple'>oranges</li
<li>hamburgler</li>
<li class='error-not-purple'>apples</li>
<li>grapes</li>

// then make another for loop to iterate through the error-not-purple items

const myList = document.getElementsByTagName('li');

for (let i = 0; i < myList.length; i++) {
	myList[i].style.color = 'purple';
}

const errorNotPurple = document.getElementsByClassName('error-not-purple');

for (let i = 0; i < errorNotPurple.length; i++) {
	errorNotPurple[i].style.color = 'red';
}

// note: dont use '-' between words in const and var names, use camel case

/* 5.2.5 */

querySelector // most flexible of element selectors
querySelectorAll

document.querySelectorAll('li'); // selects all the things with li tags
document.querySelector('li'); // only returns first element

// can also select by id

document.querySelector('#myHeading'); // selects the h1 element with id = 'myHeading'

document.querySelectorAll('.error-not-purple'); // selects all items with class name error-not-purple


// make paragraph with title name 

document.querySelector('[title=label]'); /returns the paragraph with the title attribute

// can change class selector with query selector all

// with the n-child pseudo class selector we can zebra stripe the list without relying on classes

const evens = document.querySelectorAll('li:nth-child(even)'); // replace 'even' with 'odd' to see all the odd elements with background color of gray

for (let i = 0; i < evens.length; i+=1) {
	evens[i].style.backgroundColor = 'lightgray';
} 



/* 5.3.1 */

Element.textContent // use this method to read or set text values of elements
// use it to retrieve the text content of a node

let myHeading = document.querySelector('h1');

myHeading.textContent; // "JavaScript and the DOM"

myHeading.textContent = "this is a new heading"; // change the h1 to the text on the RHS

//when the button is clicked, we'll use the value of the text input to set the paragraph's text content property
const input = document.querySelector('input');
const p = document.querySelector('p.description');
const button = document.querySelector('button');

button.addEventListener('click', () => {
	p.textContent = input.value;
})


// let's change textContent with innerHTML

// in the browser, it functions exactly the same way

// innerHTML can also read and alter the elements in a webpage, anything in HTML tags

let ul = document.querySelector('ul');

ul.innerHTML; // if we call inner on the ul it gives us a string of the HTML code w/ in the ul element

ul.innerHTML = "<li>red cabbage</li"; // when I hit enter, we see that there is just one list item; we replaced all the list contents with this one HTML


/* 5.3.2 */

// let's look at changing the attribute of an element

// attributes exists as property of an element object, like the href attribute

input.type // "text"

input.className // "description"

// can change the input's type attribute

input.type = 'checkbox' // we just turned it into a checkbox by changing its type attribute

// let's update the element's title to say list description

p.title = "List description"; // a tooltip appears over the paragraph of "List Description" when the cursor is over it

// if you want to get or set an element's class, you have to use Element.className


/* 5.3.3 */


// let's look at the element's style property
// you can set inline style on an html page with the style attribute and overrides CSS

p.style // let's look at p's style property

p.style.color = 'darkblue' // changes text color to dark blue

p.style.backgroundColor = 'lightblue ' 

// let's make a button that will toggle things on the page in and out of view

// let's add a button in HTML file
<button id="toggleList">Hide list</button>
<div class="list">
 // all selected ul elements
</div>

// in .js file

const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');

const input = document.querySelector('input');
const p = document.querySelector('p.description');
const button = document.querySelector('button');

button.addEventListener('click', () => {
	p.textContent = input.value;
})
toggleList.addEventListener('click', () => {
	if listDiv.style.display = 'none';
}) // add click event listener to button

/* let's make the button show AND reveal the list */

toggleList.addEventListener('click', () => {
	if (listDiv.style.display == 'none') {
		listDiv.style.display = 'block';
	} else {
		toggleList.textContent = 'Show list';
		listDiv.style.display = 'none';
	});


/* 5.3.4 */

Element.createElement('div'); //create a new div

// nodes belong to the dom, elements belong to the html




