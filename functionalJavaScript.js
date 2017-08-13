/* 

What is state? Is it easy to manage state in JS?

The state of a program can be defined as a snapshot of the data stored in all of its objects at any moment in time. No, sadly JavaScript is one of the worst languages when it comes to securing an object’s state. A JavaScript object is highly dynamic, and you can modify, add, or delete its properties at any point in time. 


Why are string and numbers the easiest types to work with?

Part of the reason is that, traditionally, these primitive types are inherently immutable, which gives us a certain peace of mind that other user-defined types don’t. In functional programming, we call types that behave this way values.


Although JavaScript primitive types can’t be changed, the state of the variable that refers to a primitive type can. Therefore, you need to be able to provide, or at least emulate, immutable references to data so that your user-defined objects behave as if they were immutable.


What are JS objects?

Despite all the syntactic sugar added around classes in ES6, JavaScript objects are nothing more than bags of attributes that can be added, removed, and changed at any time. 


What is the difference between OOP and FP?

OOP focuses on logically connecting many data types with specialized behavior. FP focuses on connecting operations on those data types with composition.

What is the focus between OOP and FP?

The focus of OOP is to create inheritance hierarchies (such as Student from Parent) with methods and data tightly bound together. Functional programming, on the other hand, favors general polymorphic functions that crosscut different data types and avoid the use of 'this'.

Can both OOP and FP be used?

Yes, there is a sweet spot where both OOP and FP paradigms can be used productively. JavaScript allows you to work with both.

How do you use both of them at the same time?
	
You need to treat objects as entities or values and separate their functionality into functions that work on these objects.

How can you prevent an object’s internal state from changing? 

ES6 uses the const keyword to create constant references. Encapsulation is a good strat- egy to protect against mutations

For simple object structures, a good alternative is to adopt the Value Object pattern. A value object is one whose equality doesn’t depend on identity or reference, just on its value; once declared, its state may not change. In addition to numbers and strings, some examples of value objects are types like tuple, pair, point, zipCode, coordinate, money, date, and others.


What is Object.freeze?

JavaScript’s new class syntax doesn’t define keywords to mark fields as immutable, but it does support an internal mechanism for doing so by controlling some hidden object metaproperties like writable. By setting this property to false, JavaScript’s Object.freeze() function can prevent an object’s state from changing.


Object.freeze() can also immobilize inherited attributes. So freezing an instance of Student works exactly the same way and follows the object’s prototype chain protect- ing every inherited Person attribute. But it can’t be used to freeze nested object attributes

Object.freeze() is a shallow operation. To get around this, you need to manually freeze an object’s nested structure.


What are the problems with using the method 'this'?


With methods, you’re encouraged to use “this” to access the object’s state. Instance methods use “this” to access an object's data, which is a side effect. Using this is problematic because it gives you access to instance level data outside of the method scope, which causes side effects. 


FP separates methods into general functions that can work across many types.

Using FP, object data is not intimately coupled to specific parts of your code and is far more reusable and maintainable.


get fullname() {
	return [this._firstname, this._lastname].join(' ');
}
can be split out as follows:

var fullname =
	person => [person.firstname, person.lastname].join(' ');
	// 
	“this” is effectively replaced with the object passed in. 


/* 


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





