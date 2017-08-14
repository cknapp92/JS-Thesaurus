/* 


What is the basic focus of functional programming?

Aligning the how with the what of a program. Making the technical details of writing in your code model very closely the form of what the program accomplishes. 

FP involves breaking down the problem into smaller, atomic parts. It's a paradigm where if you follow certain rules and practices, you get benefits. They are very reusable, easy to maintain, testable and have a simple mental model and your app can scale horizontally. When you are working on a transformation, you are not as focused on the flow, you are more focus on a particular part of the problem. You don't have to worry about state management so much.

What functional libraries help us accomplish the goals of FP?

- rambda
- underscore
- lodash

What is a function?

A function is any callable expression that can be evaluated by applying the () operator to it. Functions can return either a computed value or undefined (void function) back to the caller. 

Because FP works a lot like math, functions are meaningful only when they produce a usable result (not null or undefined); otherwise, the assumption is that they modify external data and cause side effects to occur.

What is the difference between function expressions and function statements?

expressions (functions that produce a value) 
statements (functions that don’t)


What's an indication that a function describes the what instead of the how?

When the pseudocode (in basic words what the function is doing) corresponds closes to a literal reading of the actual code.


What is the functional approach to solving a problem?


Sometimes a problem is difficult and complex to tackle head on. When this occurs, you should immediately look for ways to decompose it. If the problem can be broken down into smaller versions of itself, you may be able to solve the smaller version and build it up to solve the entire problem. 

What's the advantage of using a declarative style of programming?

Using the declarative style, you can focus on what the output of the applcation will be instead of how to get there, facilitating deeper reasoning in your application.

Because it’s declarative, it describes what the data output is and not how it came to be.

An imperative program flow is radically different from a functional program flow. A functional flow gives you a clear picture as to the purpose of the pro- gram without revealing any of its internal details, so that you can reason more deeply about the code as well as how data flows into and out of the different stages to pro- duce results.


What is a first-class function?

the term first-class comes from making functions actual objects in the language—also called first-class citizens.


Although not common practice, functions can also be instantiated via constructors, which is proof of their first-class nature in JavaScript. The constructor takes the set of formal parameters, the function body, and the new keyword, like so:

var multiplier = new Function('a', 'b', 'return a * b');

multiplier(2, 3); //-> 6

What is a higher-order function?

Function that accepts or returns functions.

In addition to being assignable, JavaScript functions like sort() accept other functions as arguments and belong to a category called higher-order functions.

Because functions behave like regular objects, you can intuitively expect that they can be passed in as function arguments and returned from other functions. These are called higher-order functions. 

Because functions are first-class and higher-order, JavaScript functions can behave as values, which implies that a function is nothing more than a yet-to-be-executed value defined immutably based on the input provided to the function.

Using higher-order functions declaratively makes it obvious how data transforms in each node, revealing more insights about your data.

What is closure and why is it useful for functional programming?

A closure is a data structure that binds a function to its environment at the moment it’s declared. It’s based on the textual location of the function declaration; therefore, a closure is also called a static or lexical scope surrounding the function definition. Because it gives functions access to its surrounding state, it makes code clear and read- able. As you’ll see shortly, closures are instrumental not only in functional programs when you’re working with higher-order functions, but also for event-handling and callbacks, emulating private variables, and mitigating some of JavaScript’s pitfalls.

What is the problem with the global scope and global data?

In the global scope, every line that executes causes visible changes to occur.
It’s tempting to use global variables, but they’re shared among all scripts loaded onto the page, which can easily lead to namespace collisions if your JavaScript code isn’t pack- aged into modules. Polluting the global namespace can be problematic because you run the chance of overriding variables and functions declared in different files.
Global data has the detrimental effect of making programs hard to reason about because you’re obligated to keep a mental note of the state of all variables at any point in time. This is one of the main reasons program complexity increases as your code becomes larger. It’s also conducive to having side effects in your functions, because you inevitably create external dependencies when reading from or writing to it.

when writing in an FP style, you’ll avoid using global variables at all cost.


How does JS's scoping mechanism work?

It begins by checking the innermost scope and works its way outward. JavaScript’s scoping mechanism works as follows:
1 It checks the variable’s function scope.
2 If not in the local scope, it moves outward into the surrounding lexical scope,
searching for the variable reference until it reaches the global scope.
3 If the variable can’t be referenced, JavaScript returns undefined.

An internal JavaScript mechanism hoists variable and function declarations to the top of the current scope—the function scope, in this case. 


Is there block scope in JS?

Because JavaScript has function scope exclusively, any variables declared in a block are accessible at any point in the function.

if (someCondition) {
           var myVar = 10;
}

Variables declared in if statements are accessible from outside the code block.

However, ES6 JavaScript provides the let keyword to help resolve this loop-counter ambiguity by properly binding the loop counter to its enclosing block:

for(let i = 0; i < arr.length; i++) {
	// ...
}
i;  // i === undefined

let resolves the hoisting problem and scopes i in the right place. Outside the loop, i isn’t defined.

Can you emulate private variables in JS?

JavaScript doesn’t have a native keyword for private variables and functions to be accessed only in the scope of an object.

Using closures, however, it’s possible to emulate this behavior. One example is returning an object, much like zipCode and coordinate in the earlier example. These functions return object literals with methods that have access to any of the outer func- tion’s local variables, but don’t expose these variables, therefore effectively making them private.


What are operations like map, filter, reduce? Why are they useful?

Operations like map, reduce, and filter that allow you to traverse and transform data structures in a sequential manner.

These operations are so important that virtually all functional pro- grams use them in one way or another. They also facilitate removing manual loops from your code, because most loops are just specific cases handled by these functions.

Typically the data flowing into an app starts as an array. Typical starting point for data. We deal with things in bulk in the form of arrays.

Essentially, we are going from an array of things to something else. It fits the paradigm of starting with data, transforming the data and ending somewhere, which is the general structure of applications.

What verbs do arrays in JS have built in?

- filter
	Filter is a kind of test function in comparison to map
		It doesn't change every part of the array; only those items that pass the test
	Accepts a lambda function; Removes things out of the array
		items.filter((x) => x%2===0) // what's left are evens
	[1,2,3].filter((x) => x%2===0); // [2]
	["bacon cheeseburger", "bacon salad"].filter((x) => /bacon/.test(x) ); // ["bacon cheeseburger", "bacon salad"]
- slice 
	You take a slice of an array in a declarative way; items.slice(0,5)
- concat
	You combine items, accepts anything and returns a new array; items.concat([1,2,3])
- map
	Transforms each item in an array, returns new array; items.map(x => x * x);
	Accepts a lambda function; 1st argument of lambda is a placeholder of each item as language loops through the array
	Return value is added to the new array
	You pass in a function of what you want it to do through each part in the loop; [1,2,3].map((x) => 2**x); // [2, 4, 8]
- reduce
	transform from array to anything
		items.reduce((acc, cur) => acc + cur, 0);
	accumulative = acc; start with an acc of 0
	current = cur
	from an array of something to something
	takes a lambda function and initial accumulation value
		the lambda function usually takes two values
	[1, 3, 2, 5, 6, 8].reduce((acc, cur) => acc + cur, 0);
		start with acc of 0, then acc + cur = 1, then 1 + cur = 4...
	
Possibilities with reduce: 
	we can also shallow flatten arrays with reduce
	you can write a function that splits arrays
	you can compose functions (using spread operator)
		
- forEach
	[1,2,3].forEach(x => console.log(x));
	// 1
	// 2
	// 3

The array is a kind of 'wonder' container. These verbs are associated with a bigger paradigm. You can tap into the power of composing these things together. To scale your app, you can use these building blocks (known as chaining).


What is currying functions?

You can write currying with reduce. 

What is method chaining and method cascading? How are they different?


Method chaining is an OOP pattern that allows multiple methods to be called in a single statement. When these methods all belong to the same object, method chaining is referred to as method cascading. Although this pattern is seen mostly in object-oriented applications, under certain conditions, such as working with immutable objects, it works just as well with functional programming. 


Method chaining is an OOP pattern that allows multiple methods to be called in a single statement. When these methods all belong to the same object, method chaining is referred to as method cascading. Although this pattern is seen mostly in object-oriented applications, under certain conditions, such as working with immutable objects, it works just as well with functional programming. 


Is chaining possible for arrays as well as strings?

Wouldn’t it be nice to translate this pattern to work with arrays as well? The behavior we see in strings has also been extended to work with JavaScript arrays, but most people aren’t familiar with it and resort to quick-and-dirty for loops.


What other techniques replace looping?

Another technique commonly used to replace loops is recursion, which you can use to abstract iteration when tackling problems that are “self-similar” in nature. For these types of problems, sequential function chains are inefficient and inadequate. Recursion, on the other hand, implements its own ways of processing data by yielding the heavy lifting of standard looping to the language runtime.

What is recursion?

Recursion is a technique designed to solve problems by decomposing them into smaller, self-similar problems that, when combined, arrive at the original solution. 

What are the parts of a recursive function?


	A recursive function has two main parts:
■ Base cases (also known as the terminating condition)
■ Recursive cases


What is a base case?


The base cases are a set of inputs for which a recursive function computes a concrete result, without having to recur. The recursive case deals with a set of inputs (necessar- ily smaller than the original) for which the function calls itself. If the input isn’t smaller, the recursion runs indefinitely until the program crashes. As the function recurs, the nature of the inputs unconditionally become smaller, finally reaching the instance for which the base case is triggered and the process terminates with a value.


What is recursive thinking?

Recursive thinking takes itself or a modified version of itself into consideration. A recursive object is self-defining; for instance, think of the composition of branches in a tree. A branch has leaves as well as other branches, which in turn have more leaves and more branches. This process continues indefinitely and is halted only by a limit- ing external factor—the size of the tree, in this case.


What is the difference between recursion and iteration?

Recursion and iteration are two sides of the same coin. In the absence of mutation, recursion offers a more expressive, powerful, and excellent alternative to iteration. In fact, pure functional languages don’t even have standard looping constructs like do, for, and while, since all looping is done recursively. Recursion also leads to code that’s easier to understand because it’s premised on repeating the same actions multi- ple times on smaller input. 

What is the main mechanism for code reuse in OOP?

Object-oriented programs use inheritance as the main mechanism for code reuse. Recall from the previous chapter that Student inherits from Person, and that all state and methods are inherited by the child type. 


What is the main mechanism for code reuse in FP?

Functional programming takes a different approach. Instead of creating new data structure classes to meet specific needs, it uses common ones like arrays and applies a number of coarse-grained, higher-order operations that are agnostic to the underlying representation of the data.

These operations are designed to do the following:
■ Accept function arguments in order to inject specialized behavior that solves your particular task
■ Replace the traditional, manual looping mechanisms that contain mutations of temporary variables and side effects, thereby creating less code to maintain and fewer places where errors can occur


Can you map (use the map function) over things other than arrays?

Yes, for example, mapping over containers. The concept of mapping over data structures (in this case, an array) to transform the constituent values has far-reaching implications. Just as you can map any function over an array, you can also map a function over any object.


How do you gather meaningful results from your data?

Suppose you want to compute the country with the largest count from a collection of Person objects. You can use the reduce function to accomplish this.
reduce is a higher-order function that compresses an array of elements down to a single value. This value is computed from the accumulated result of invoking a func- tion with an accumulator value against each element.

Reducing an array into a single value. Each iteration returns an accumulated value based on the previous result; this accumulated value is kept until you reach the end of the array. The final outcome of reduce is always a single value.

What's an alternative to map and filter?

An alternative to combining map and filter is to use a concept called array compre- hension, also known as list comprehension. It’s a functional feature that encapsu- lates the functionality of map and filter into a concise syntax using the for...of and if keywords, respectively:

[for (x of iterable) if (condition) x]

let iterable = [10, 20, 30];

// Iterate over array

for (const value of iterable) {
	console.log(value);
}
// 10
// 20
// 30

// Iterate over string

let iterable = 'boo';

for (let value of iterable) {
	console.log(value);
}
// "b"
// "o"
// "o"


What is the module pattern?

Closures can also provide a way to manage your global namespace to avoid globally shared data. Library and module authors take closures to the next level by hiding an entire module’s private methods and data. This is referred to as the Module pattern because it uses a single immediately invoked function expression (IIFE) to encapsulate internal variables while allowing you to export the necessary set of functionality to the outside world and severely reduce the number of global references.


NOTE: As a general best practice, I recommend packaging all of your functional code inside well-encapsulated modules. You can transfer all the core principles of functional programming you’ve learned in this book to the level of modules.


What are callbacks?

JavaScript’s first-class, higher-order functions can be passed into other functions as callbacks. Callbacks are useful as hooks to handle events in an unobtrusive manner. Suppose you need to make a request to the server and want to be notified once the data has been received. The traditional idiom is to provide a callback function that will handle the response.



getJSON('/students',
	(students) => {
 		getJSON('/students/grades',
			grades => processGrades(grades),
			error =>  console.log(error.message));
},
(error) =>
		console.log(error.message)
)

getJSON is a higher-order function that takes two callbacks as arguments: a success function and an error function. 


What are some different function forms?

1) declared function

function multiplier(a,b) {
					 return a * b;
}

2) anonymous function (assigned to a variable)

var square = function (x) { 
	return x * x;
}

The right side of an anonymous function expression is a function object with an empty name property. You can use anonymous functions to extend or specialize a function’s behavior by passing them as arguments.

3) lambda expression

var square = x => x * x;


4) assigned to object properties as methods

	var obj = {
			method: function (x) { return x * x; }
};

Why assign functions to variables?

Because they’re first- class, functions can be assigned to variables and executed at a later time. 

What is state? Is it easy to manage state in JS?

The state of a program can be defined as a snapshot of the data stored in all of its objects at any moment in time. No, sadly JavaScript is one of the worst languages when it comes to securing an object’s state. A JavaScript object is highly dynamic, and you can modify, add, or delete its properties at any point in time. 


What is a node?

 A node is an object that contains a value, a reference to its parent, and an array of children. If a node has no parent, it’s considered the root. 


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

How does the 'this' reference work?

unlike in other programming languages, the this reference is set based on how the function is used (globally, as an object method, as a constructor, and so son) and not by its lexical context (its location in the code).


This can lead to code that’s hard to understand, because you need to pay close attention to the context in which a function is executing.


Is 'this' used in functional programming?

the use of this in functional code is rarely seen (in fact, it’s avoided at all costs). It’s heavily used by library and tool implement- ers for special cases that demand bending the language context to perform incredible feats. These often involve the function methods apply and call.


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


What are the functions call and apply?

JavaScript supports calling functions via the function methods (like meta-functions) call and apply, which belong to the function’s prototype. 

Both methods are used extensively when scaffolding code is built so that API users can create new functions from existing ones.


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




/* Example - Get top-rated netflix videos */

var getTopRatedFilms = user => // create function that accepts user
	user.videoLists. // object; each user obj has a videoLists array
		map(videoList => // map over all videoList
		videoList.videos.
			filter(video => video.rating === 5.0)). // filter
		concatAll(); // to only return films with rating of 5
		// use concatAll to flatten the array into a list
get TopRatedFilms(user).
	forEach(film => console.log(film));


/* Example - Drag Operation */

var getElementDrags = elmt => // we should be able to see events
	elmt.mouseDowns. // as a collection, like we do with functions
		map(mouseDown =>
			document.mouseMoves.
				takeUntil(document.mouseUps)).
		concatAll();
		
getElementDrags(image).
	forEach(pos => image.position = pos);
