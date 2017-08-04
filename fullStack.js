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

// break statement; immediately exits a loop


while (true) {
	break; 
}













