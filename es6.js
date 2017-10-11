/* 1 - var scoping 



You can reassign var variables and they can be redefined

can write:
var width = 100;
var width = 200;

var variables - function scoped
 you can't access them outside a function

if you use var in an if statement, it will leak out to the entire window. You can access it

let and const are scoped to the block (any set of curly braces)

if you try to access let/const set in curly braces from outside the braces, you will get a reference error

2 - let vs. const

 you can't redeclare let in same scope
you can reassign let however

if let/const variables of the same names are in different scopes, we can treat them as two different variables

you can't reassign a const. Will return type error if you do

const is not immutable, just cannot be reassigned

for a reference type declared with const, properties can be changed. where it points to cannot be changed however

3 - let and const in the real world

let and const replace the IIFE
IIFE runs itself immediately and it creates a scope where nothing is going to leak into the parent scope

you put your variables in an IIFE so your var variables will not be in your global scope. They are not leaking onto the global scope.

you don't need IIFEs because let and const are block scoped

{
  const name = 'Conrad';
} 

let and const fix problems with your for loop

the problem is that when declaring i with var, the i variable leaks into the global scope

for (var i; i < 10; i++) {
  setTimeout(function(){
      console.log('The number is ' + i);
  }, 1000);
}

The number is 10

console.log will run immediately, and after a second all of them will be 10

this is because console.log(i) will run immediately, but after one second, this loop has gone through every iteration and variable i is being overwritten every single time and the problem is that by the time the timeout runs, the number is already at 10.

the way to fix this is with let i

you can't use const because it will overwrite itself


Temporal Dead Zone

var variables will be automatically declared by the JS engine as undefined if they are used before you declare them:



 console.log(pizza);
 var pizza = 'deep dish';

undefined



if let/const variables are referenced before they are declared, an Uncaught Reference Error will be thrown

that is called the temporal dead zone, because you can't access a let/const variable before it has been declared


is var dead

use var for top-level variables that are shared across many especially large scopes
 use let for localized variables in smaller scopes
refactor let to const after some refactoring and you're sure there isn't going to be any variable reassignment


arrow functions

concise
has implicit returns (allows us to write nifty one-liners)
doesn't rebind value of this when you use arrow function inside other function

arrow functions are particularly useful in callback situations

arrow functions are always anonymous functions

the benefit to using a named function is that it will show up in a stack trace

 if you use an arrow function, you cannot name them

you can, however, but them in a variable:

const sayMyName = (name) => { alert(`Hello ${name}`)};

sayMyName('Conrad');


arrow functions and this

the this keyword doesn't get rebound using arrow functions, it is just inherited from the parent scope

you generally want functions as your top level function

if we enter a new function, even if its in a new function, with a plain function call, its not bound to anything and will always point to the window

to fix the this problem with a function in a function use arrow functions because it inherits the value of this from the parent function


default function arguments

if arguments are not passed in, they get a value of undefined

if you don't pass in all the values you need, if you try to do math with undefined, you get NaN

we need default params in order to fix this problem


function calculateBill (total, tax = 0.13, tip = 0.15) {
  return total + (total * tax) + (total * tip);
}

const totalBill = calculateBill(100);



 10 - when not to use arrow functions

- with a function in a function
  if you use an arrow function, this is not bound to that function it is nested in

- when you need a method to bind to an object (function within an object literal)

- when you need to add a prototype method



*/