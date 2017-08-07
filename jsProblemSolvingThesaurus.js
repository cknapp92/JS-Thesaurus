/* This is just a compilation of techniques I've discovered or tested to solve various problems in JavaScript. I wanted a place to centralize and review all of the notes that I'm made in coming up with various solutions to challenging problems */

/* Get the highest value of a series of numbers */

Math.max(10, -20, 15, 24); // 24

/* To get the highest value in an array */

function getMax(numArray) {
	return Math.max.apply(null, numArray);
}

var arr2 = [25, 62, 24, 1];

getMax(arr2); // 62