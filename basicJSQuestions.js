/*
 
What is the difference between using a function expression and a function declaration?

1) Function expression
var functionOne = function() {
	// Some code
}; 

2) Function declaration
function functionTwo() { 
	// Some code 
}

A Function expression is only declared when the compiler reaches it, while a function declaration is declared as soon as its surrounding function or script is executed:

A function expression:
	// TypeError: undefined is not a function 
	functionOne(); 

	var functionOne = function() { 
		console.log("Hello!"); 
	};  
	
A function declaration:
	// Outputs: "Hello!" 
	functionTwo(); 

	function functionTwo() { 
		console.log("Hello!");
	} 
 
functionOne is merely a variable that has an anonymous function assigned to it, whereas functionTwo is actually a named function

Source: https://stackoverflow.com/questions/336859/var-functionname-function-vs-function-functionname?rq=1 ; see Crowder's answer





What is different about variable declaration in JS versus other languages?

In other languages such as C, variables (also known as bindings) are created at the spot where the declaration occurs. In JS, this is not the case: Where your variables are actually created depends on how you declare them, and ECMAScript 6 offers options to make controlling scope easier. 

--What is hoisting?

Variable declarations using var are treated as if they’re at the top of the function (or in the global scope, if declared outside of a function) regardless of where the actual declaration occurs; this is called hoisting. 

Example:
 function getValue(condition) {
					  if (condition) {
							var value = "blue";
// other code
							return value;
					  } else {
		// value exists here with a value of undefined
						return null;
	  					}
		 // value exists here with a value of undefined
 }
					
					
If you are unfamiliar with JavaScript, you might expect the variable value to be created only if condition evaluates to true. In fact, the variable value is created regardless. 

Behind the scenes, the JavaScript engine changes the getValue function to look like this:

	function getValue(condition) {
		var value;
			if (condition) {
				value = "blue";
					// other code
			return value;
			 } else {
			return null;
			}
	}

The declaration of value is hoisted to the top, and the initialization remains in the same spot. That means the variable value is still accessible from within the else clause. If accessed from the else clause, the variable would just have a value of undefined because it hasn’t been initialized in the else block.






What is the difference between var and let?


let can also be used to avoid problems with closures. It binds fresh value rather than keeping an old reference as shown in examples below.

for(var i = 1; i < 6; i++) {
	document.getElementById('my-element' + i)
		.addEventListener('click', function() { alert(i) })
}

The code above demonstrates a classic JavaScript closure problem. Reference to the i variable is being stored in the click handler closure, rather than the actual value of i.

Every single click handler will refer to the same object because there’s only one counter object which holds 6 so you get six on each click.

General workaround is to wrap this in an anonymous function and pass i as argument. Such issues can also be avoided now by using let instead var as shown in code below.

'use strict';

for(let i = 1; i < 6; i++) {
	document.getElementById('my-element' + i)
		.addEventListener('click', function() { alert(i) })
}

Source: https://stackoverflow.com/questions/762011/whats-the-difference-between-using-let-and-var-to-declare-a-variable?rq=1



What is an API?

Stands for application programming interface. Allows you to programmatically interact with another program. The objects and methods you can use in any given environment. In the browser, it is called the DOM to interact with webpages.


What is a Rest API?

REST API allows you to interact with objects and actions via http requests rather than Javascript directly. Most websites that provide an api provide some documentation on how you can interact with it.




What are the types of events in a JS program?

Two: a user a event and a system event. You can use callback functions to handle events

User Event
	ex: mouse click; when a click happens on a button, an event is triggered and an alert is shown
System Event
	ex: setTimeout - timeout gets executed after a given time. The system is what triggers the timeout, though the developer may decide the time when callback is executed.
	
	ex: ready state change of an ajax request. ready state change handler triggered by the system when it gets through different stages of the request (when it sends the request, when it loads data in, and when it's finished)
	
	there are a number of system events in node.js like reading data from url or file, when an action is completed and various error handling events
	
	

What is a route?

Routes are common to express and other web frameworks. To user, it is just the url. It's called a route b/c its the path a user takes to access data on the server. A route is sometimes an endpoint. From the application's perspective, a route provides the instructions to trigger a set of programming.


What is a client?

The device that is used to visit a website. We can think of a client as a web browser (the routes are just the urls you type into the browser). The server knows how and when to serve data to the client b/c makes an http request to the server. Request is the technical name for what happens when you type  a url into your browser. The browser is making a url request to the server at the url address you typed in. 

http requests can be made in many ways. One of them is known as a get request. When the client makes a get request, the server can return a variety of responses. If the client made a get request to a route that the server is set up to respond to, the server will send a response, otherwise it sends back an error (i.e. a 404 error).

	

What is JSON?



What is an object?

An object is 
a container for values 
	in the form of properties and 
functionality 
	in the form of methods.
	
Objects provide data storage in properties.

The name of a property is a key.

The contents of a property is known as a value.
	
	Methods are able to return values. They may or may not return values.
		Note: methods often use anonymous functions
	
	Properties can be accessed or assigned. This is known as "getting" or "setting"
	
All real-world objects have state and behavior. 
	State - condition of all the values at a particular point in time (i.e. radio can be on/off)
	Behavior - what the object does (i.e. can change radio station)
	State is stored in its properties and behavior in its methods
	
Pros of objects:
	- It allows you hide complexities of code from user
	- It allows you to organize your code, keep everything together for a particular object (called encapsulation)


	
What are the different kinds of objects?

Native objects (provided by the JS language)
	- ex: number, string, array, boolean, object, etc.
Host objects (provided by the host environment where the JS is running)
	- browser has many host objects
	- ex: document, console, Element
Your Own Objects (used to handle the state of your application)
	- the objects you create in your own programming
	- ex: songs in a playlist, tasks in a to-do list, characters in a game
	
	
What is an object literal?

It holds data/information about a particular thing at a particular time.
	Stores the state of a thing
	
	var person = {
		name: 'Conrad',
		human: true
		'full name': 'Conrad Reed' // you can use invalid var names
		// when you write them as strings, but its discouraged
	}
	
person.name; // person['name'];
person.human;
person['full name'] // use valid var names and use dot notation instead, which is more convenient

Can use dot notation or bracket notation to access properties in an object.

Useful for: Creating one-off object or passing values to a function.




What is the 'this' keyword?

var dice = {
	sides: 6,
	roll: function () { 
		var randomNumber = Math.floor(Math.random() * dice.sides) + 1;
		console.log(randomNumber);
	}
}
		
		
It may be less manageable to change the name of your object because it is referenced all over your code. But with the 'this' keyword you don't have to know the name of the variable to access its properties.

Depending on where and how a function is called, this can mean different things. Here 'this' means the object literal of dice. 

var dice = { 
	sides: 6,
	roll: function () { 
		var randomNumber = Math.floor(Math.random() * this.sides) + 1;
		console.log(randomNumber);
	} 
}

We can add another object, a ten sided die (dice10) and the 'this' will refer to 10 sides.

var dice10 = { 
	sides: 10,
	roll: function () { 
		var randomNumber = Math.floor(Math.random() * this.sides) + 1;
		console.log(randomNumber);
	}
}

The simplest way to think of 'this' is that 'this' is the owner of the function, that is, the object where the method is called. 'this' is the object that owns the method being called


What does the 'return' keyword do?

The return keyword prevents any additional lines of code from being executed. Cannot add code afterwards in the function block.

Ex:
function dice () {
	var randomNumber = Math.floor(Math.random() * 6) + 1;
	return randomNumber;
	alert('something'); // will not get executed
}

dice(); // 6



What is a constructor function?

If you want to create multiple objects of the same type. Used to describe how an object should be created. Will create similar objects. Each object created is known as an 'instance' of that object type.

Instance is a
	specific realization of a
		type or
		object

Ex:
 function Contact(name,email) { 
	this.name = name; // 'this' inside a constructor function means a 
		// new instance of an object (kind of like this = {};)
	this.email = email;
	this.sendEmail = function() { //Do something }
 } 

var contact = new Contact('Conrad', 'web@net.org') // create a contact with name and email. // this contact instance contains my contact info

Use 'new' keyword to create new instance. Turns a regular function call into a constructor function.
	People capitalize constructor functions out of convention so you know when to use the 'new' keywords
		When you use 'new' keyword, it alters what 'this' is in the function, a new object where you can assign new properties or even methods
		
Maintaining code with several object literals can get cumbersome and is a good time to use constructors. Will handle initial creation of objects and will allow you to create as many objects of the same type as you like.





What is a prototype?

When you are making a constructor function, it's not a good idea to have the method attached to the constructor. Every time there is a new instance, method is run over and over again, which can create problems. But we also don't want to separate the method from the constructor as a separate function just floating around. As a solution, we have the prototype.

The prototype on the constructor function is an object like an object literal and we can assign a function to it, which becomes a method and we don't need it in the constructor function. 

JS is known as a prototypal programming language, meaning, you can use prototypes as templates for objects. For values and behaviors to be shared between instances of objects. Instead of the method being defined for every instance when we construct one, it is shared between all instances through the template or prototype.


function Dice(sides) {
	this.sides = sides;
}

Dice.prototype.roll = function () {
	var randomNumber = Math.floor(Math.random() * this.sides) + 1;
	return randomNumber;
}

var dice = new Dice(6); 
var dice10 = new Dice(10);

What happens when we call dice.roll() now? First the JS interpreter tries to call it on the object itself, if it's not there, it will check its prototype. If the roll is there, it will call the method in the context of that instance (in the prototype).



What is inheritance? What is the prototype chain?


What happens when there are objects w/ similar properties and behavior? Creating separate constructor functions for each type of object seems to be a lot of work, especially if behavior is shared. We can use inheritance to solve this problem and make our programming simpler. Inheritance is a technique that allows you to share the same code between similar types

We can create a type (that has shared properties) for constructors and link it. This is called a prototype chain. When you access a property or method on an object, it checks to see if it's directly on the instance. If not, it will check the prototype. If not there, it will check the prototype chain.

Prototypes let you encapsulate code and share the code with related objects very easily.


What are handlers?

Methods that get executed when a click happens, because they handle the click




What is a conditional?
	
Executes a block of code if true or another block if false


What are branches?

The paths that an if-else statement follows are known as branches. The flow of execution based on a condition. They branch the flow of your program's logic in different directions based on the results of the conditional test. You can branch off in as many directions as you want.





What is the switch statement for?

Used for multiple branching logic (not two-way branch; if-else). switch is similar to an if statement. It has parens, with curly braces that hold code. 

var x = 0;

switch (x) {
	case 0:
		console.log('yes');
		break;
	case 1:
		console.log('no')
		break;
	default:
		console.log('invalid')
		break;
} 

All cases are contained within one block of code, with the keyword case.

Consider the value x, if it is equal to 0, run this block of code. When it reaches the break statement, it jumps the block of code to the next set of instructions.

If break is missing, the statement will fall through to the next code and unexpected things can happen. That's why the switch statement is not always considered the best practice.

default statement acts like the else block in an if-else statement.

A switch statement saves you a lot of typing in comparison to if-else branching.





What is a ternary operator?

a compact, two-way branch conditional expression. It is used to write compact code. Called ternary because it involves three expressions.

<boolean> ? <expression if true> : <expression if false>

Ex:
if (isTrue) {
	console.log ('yes');
} else {
	console.log ('no');
}


isTrue ? console.log ('yes') : console.log ('no');


Usually seen as:

var yesOrNo = isTrue ? 'yes' : 'no';

console.log(yesOrNo);




What is the module pattern?

You don't want to clutter the global namespace. A simple function that prints a string... 

function foo() {
	console.log('foobar');
}

...is  accessable in the global namespace (when we type the function name 'foo'). This is cluttering the global namespace

It's a problem because so much is happening in the browser, you may have several JS libraries in your application (i.e. jQuery, angular, etc) loaded onto the page.

If you have to navigate many variables that clutter the global namespace, it can be a problem if you have the same names between variables.

We can wrap the function in parens to solve this problem. Treat this function as an expression to be evaluated immediately that doesn't require naming.

(function(){
function foo() {
	console.log('foobar');
}

foo();
}());	
	
	
We can't access the function 'foo' from the console anymore (it is undefined); a sign that the global namespace is less cluttered.

Another form:

!function(){
function foo() {
	console.log('foobar');
}

foo(); 
}();


We can also import other globals to be used within the module, but with a reference locally within the module. For example, underscore. We're going to bring it in as a parameter

!function(_){
	underscore.someawesomemethod = "something";
	console.log(underscore.VERSION);
}(_);



What is the module export pattern?

Ex: 
var awesomeNewModule = (function(){
	var exports = {};
	exports.helloMars = function() {
		console.log('hello mars');
	};
	return exports
}());

awesomeNewModule.helloMars() // 'hello mars'

// have access to this in the console, but don't have access to the variables globally


What is the point of writing modular code?

You split your app into pieces that don't depend onto each other. If one intrroduces a breaking error into the code, it doesn't affect the rest of the code. 


What is loose augmentation?

What is the submodule pattern?





*/






