'use strict';

var str = 'Is this This'?;

var regex = new RegExp("is");

console.log(regex.test(str); // true

// test is always going to return a true or false

var regex = new RegExp("it"); // change to "it"

console.log(regex.test(str); // false


// the second method for creating a regex is the literal regex


// var regex = new RegExp("is")

var regex = /is/;  // two forward slashes and we pass in the pattern we're looking for

console.log(regex.test(str); // true


// we get more info this way:

var regex = /is/;

console.log(regex.exec(str)); // ["is", index: 5, input: "Is this This"]

console.log(regex.exec(str)); // ["is", index: 10, input: "Is this This"]

console.log(regex.exec(str)); // null

console.log(regex.exec(str)); // ["is", index: 5, input: "Is this This"] ; starts at the beginning again



console.log(str.match(regex)); // will return an array of all the matches

// ["Is, "is", "is"]



var str = 'Cat sat on the hat.';

var regex = /Cat/