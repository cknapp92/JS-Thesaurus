/* Changing Impure to Pure Function */

/* Impure */

function foo(x) {
	y = x * 2;
	z = x * 3;
}

var y,z;

foo(5); // when I call foo, I change the state of y and z forever
// that's why foo is known as an impure function


y; // 5
z; // 10

foo (5);

y; // 25
z; // 50



/* Pure */

function bar(x, y, z) { // wrap bar around foo to make it pure
	// I'm passing in everything; everytime I pass in bar with
	// the exact same universe, I get the same result every time
	foo(x);
	return [y,z]; // return multiple things with brackets
	
	function foo(x) { // foo is the same definition
		y = y * x;
		z = y * x;
	}
}

bar(5,2,3); // [10,15]
// no independent variables back anymore; an array is returned
// b/c no other way to return multiple things with 'return'
// functional programmers like lists, they are convenient to do
// operations on; reach for array before object 

//pure functions don't change outside state
// however, they do change outside state

bar(5,10,15); // [50, 75]



/* Impure */
function foo(x) {
	y++;
	z = x * y;
}

var y = 5, z;

foo(20);
z; // 120

foo(25);
z; // 175


/* Pure */

// What variables represent the state of our program? 
// Not really x is a parameter
// y, yes, because it changes over time
// z, is not something we need to input as part of our universe, it's just output

function bar(x,y) {
	
	var z; // need z to return it
	
	foo(x); // can call function before it's declared; makes it easier to understand the code
	return [y,z]; // x isn't something that we're changing, just an input, a starting state; we only need to return what changes and what we want to observe (y and z)
	
	function foo(x) {
		y++;
		z = x * y;
	}
}

bar(20,5); // [6,120]
bar(20,5); // [6, 120]

bar(25,6); // [7, 175]


// on the inside, the function is very unpure
// on the outside: bar takes in a universe and outputs a result



/* Impure */

function doubleThemMutable(list) {
	for (var i=0; i < list.length; i++) {
		list[i] = list[i] * 2;
	}
}

// It's having a side effect on the outside world but by reference
// side-effect. B/c we pass in a reference it's able to 
// make a change to a value that's not in itself
// For that reason it's an impure function

var arr = [3,4,5]; 
doubleThemMutable(arr); 

arr; // [6,8,10]


/* Pure */

//How do we produce another list rather than changing the list in place?

function doubleThemMutable(list) {
	var newList = [];
	for (var i=0; i<list.length; i++){
		newList[i] = list[i] * 2;
	}
	return newList;
}

var arr = [3,4,5]; 
var arr2 = doubleThemMutable(arr);

arr; // [3,4,5]
arr2; // [6,8,10]

// used principle of immutability not to change arr

/* Composition */


function sum(x, y) {
	return x + y;
}

function mult(x, y) {
	return x * y;
}

function compose2(fn1, fn2) {
	return function comp() {
		var args = [].slice.call(arguments);
		return fn2(
			fn1(args.shift().args.shift())
			args.shift()
		);
	}
}

var multAndSum = compose2(mult, sum);

multAndSum(3, 4, 5); // 17




/* Currying */


function SumX (x) { // receives x variable, closing over that x
	return function(y) {
		return x + y;
	}
}

var add10 = SumX(10); // bind the x value to 10

// What's the key difference here? x never changes
// for the lifetime of that function, the x value will always be 10
// won't allow for a side-effecting change 
// this is an example of currying/partial application:
// taking a function that would normally take multiple variables
// and presetting some of them

add10(3); // 13;
add10(14); // 24;



/* Example of Partial Application */

function foo(x,y) {
	return function(){
		return x + y;
	};
}

var x = foo(3,4);

x(); // 7
x(); // 7



/* Recursive Example */

// mult function cannot take in 4 parameters

function mult() {
	return x * y * z;
}

mult(3,4,5); // 60
mult(3,4,5,6); // Oops!



/* use recursion to modify mult so it can take in an arbitrary amount of parameters */

// all recursive functions have (1) a base case - some way
// to know it is time to stop so it doesn't run forever
// and (2) a recursive call is needed

function mult(...args) { // use gather operator; gather all into 
 //array args
	if (args.length <= 2) {
		return args[0] * args[1];
	}
	return args[0] * mult(...args.slice(1)); // slice creates a
	// whole new array; takes method as context, but doesn't 
	// change context, but makes a new one
}

mult(1,2,3,4); // 24


