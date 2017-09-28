/* What does use strict do? 

Allows you to place a program/function in a strict operating context.

Makes debugging easier. Alerts you earlier to problems in your code and directs you to their probable source.

How do you enable strict mode? One of the ways you do that is to type in the string 'use strict';

It is not a special keyword call use and strict, it is a string. It is a string because when it was first thought up, only the newer browsers supported it.

When the file was loaded up in an older browser, it would ignore a string. In a newer browser, it would know to change it into strict mode operating context. 

Doing it at the top, strict will apply to everything in the file.

If you are working on legacy code, it is possible to apply strict mode to parts of your code by putting in a function scope. Everything outside of the function is in non strict mode.

W/o strict mode, assigning a value to an undeclared, a global variable is automatically created. There is always a global object. In a browser, the global object is window. 

Now we've created a property on the global window and assigned a value to it.

Why is that bad?

If you've declared a variable at the top properly and assigned it to 0. Then you try to assign it later to another value. Then you create another global. You want to do something to it (i.e. if (var i >0)...), then you spend a long problem trying to see what happened.

When you have strict mode, it will throw a Reference Error.

This tells you up front that there is a problem with the syntax in your program. By forcing you to only use variables that have been declared with var, it eliminates forced globals and weird syntax problems.

Strict also prevents you from using words as identifiers that are reserved words in JS. Strict mode will throw an error. For example, using var let = 1. 


In non-strict mode, you can delete a function or variable.

In strict, it doesnt let us delete either. It also doesn't let us delete arguments to functions. It throws an uncaught syntax error.

Also, in strict, it makes the eval keyword a little bit safer. In non-strict mode, you can use eval as a variable (var eval = 1), but in strict, it causes an error. It makes callng eval easier. It evaluates strings (i.e. eval("var a = 1");). In non-strict, the value in the eval block leaks out.

var = 2;
eval("var a = 1")
console.log(a); 

In strict,  variables you define only exist in the eval block and nowhere else. It logs 2. This is important since eval can be very powerful and a very dangerous feature in JS.



Does JS pass parameters by value or reference?

var a;
function foo(a) {

}

When you pass a to function foo as a parameter, are you passing by value or reference?

Primitive types such as strings, numbers, booleans are passed by value and objects are passed by reference.

Explain to me what passed by value is and what is passed by reference.

Passed by value -- if you change the value of a primitive type inside a function the changes won't change affect the variable in the outer scope. var is in the outer scope and in the function foo is the inner/function scope.

var a = 1;
function foo(a) {
  a = 2;
}
foo(a);
console.log(a); // 1

If I set a to 2 in the function, it's still logging one. That's because when primitive types are passed to foo, they are passed by value. When you think of passed by value, it is passing a copy of a. Any thing you do to a inside the body in the function won't affect a, because you passed in a copy of the a, not the actual a variable. 

Again, the same applies to if a = true outside the function and we change a = false inside the function, a will still print true because a is still a primitive and when we pass it to a function it, because we pass in a primitive, we pass in a copy of a and will still log a 


When you passing something by reference, you are passing something that points to something else, not a copy of the object. When you change a property of that object from within the function, the changes will be reflected in the outer scope.

var a = {};
function foo(a) {
  a.moo = false;
}
foo(a);
console.log(a); // Object {moo: false}

That's because when you pass in an object, when you pass an object into a function, you are not passing a copy into the function, when you change a property of that object you actually are changing the property of the a object in the outer scope. Changing the a object in the inner scope changes it in the outer scope as well. 

If we change entirely what a points to:

var a = {'moo' :'too'};
function foo(a) {
  a = {'too':'moo'};
}
foo(a);
console.log(a); // {moo:'too'}

It still returns the original a value because we are changing entirely what a points to. We can only change the property of a.

In JS, when we say we pass by reference, we can't change what a points to, we can only change a property of a to something else. You can't change what a points to:

var a = {'moo' :'too'};
function foo(a) {
  a.too = {moo'};
}
foo(a);
console.log(a); // Object {moo:'too', too:'moo'}

JS passes strings, numbers, booleans (primitive types) by value and it passes objects by reference.  


What are the different types in JS?

In ES5, there were 5 primitive and 1 non primitive (object).

There is a type null, just when you use typeof it says 'object'. Incorrectly, JS has been reporting object. It can't be reversed without causing a number of problems. It should be null.

What's the different between a dynamically typed language and a statically typed language like Java?

In Java, we might define a string:

String a = 'moo';

in a statically typed language, this a will hold strings and only strings. in java, as you write the code, you have to specific exactly what types the variables will hold.

You can't do 

a = 1; // Error

In JS, we have a variable a, but the type of the variable a is inferred by the value we assign to a.

var a = 'moo';
typeof a;
a = 1;
typeof a;

With JS, the type of variables are determined dynamically at runtime when we run the application whereas in Java the type of a variable is defined statically when we write the code.

They are both useful in different scenarios. Its much easier to write a quick Js/python application. But you uncover problems in dynamically typed languages as runtime, when the application is executed. If some function in our program expected a to be a string, but it turned out to be a number, we would only discover this when we run it, it may throw an error or worse, it may cause an error in the program and not tell us about it, and lead to bigger problems in the future.

When Java is compiled, the compiler will throw an error much earlier.

The disadvantage is that it's harded to write. Memory and performance is more tightly controlled with static language as compared to dynamically typed languages.

We've got two types that perhaps mean kind of the same thing: null/undefined. We have two ways to represent this idea of no value. There is a subtle difference between them.

var a;
console.log(a); // undefined

When a hasn't been initialized with another value, undefined is what JS uses to express 'no value'. It is used for uninitized variables, for missing parameters to functions and unknown variables and properties to things like the window object.

window.hello / undefined

undefined is used by the JS engine to inform you that there is an uninitialized variable or an unknown property of an object.

If we write:

var a = null;
console.log(a);

null is used by programmers to indicate no values. The engine will never set a value to null for you. Only a human being will ever set the value of a variable to null. That's a subtle but important distinction between null and undefined. 

In a language like Java, if we wrote 

String a = null;

Null isn't a value in and of itself in other statically typed values, but in JS it is

The type of null is null and the null type has one value and only one value, which is the keyword null. And the same with undefined, the same way 1 and 2 is a value. undefined is also a type so undefined the type has one value which is called undefined. That's a subtle but important distinction between null/undefined in JS. 

Comparing null == undefined returns true. They are loosely equivalent.

Both null and undefined are values each with their own type.



What is the type of NaN?

typeof NaN // "number"

NaN is used to define a number that isn't really a number. The result of a bad calculation.

"abc"/4 // NaN

There are some surprising characteristics of NaN which can lead to some hairpulling bugs.

NaN compared to anything else in the world is false. NaN is compared to any other value is false, including itself.

NaN == NaN // false

How do you check to see if something is NaN?

isNaN(NaN) // true

isNaN(1) // false

isNaN("1") // false

isNaN("A") // true

Its implicit coercion. "A" is being coerced into a number to check whether it is not a number.

isNaN(Number("A")) // true

We can't be entirely sure that something is NaN being isNaN is not reliable. 

How do you check for NaN? How do you consistently see if a variable is NaN? Since NaN is the only JS value is treated for inequality to itself, we can use the not double equals operator.

var a = NaN;

a !== a // false 

If this previous line is false, only then can you really confirm that a value is NaN.



What are the different scopes in JS?

By scope we mean the lifetime of a variable. Where a variable is visible and able to use in your code

global variables are available from any part of your function.

Another way to define a global is to add it as a property to your global object. On the window object;

var asim = 1;
window.moo = 1;

We can use it the same way we use asim. The reason we can use moo the same way is that all variables are properties of the global object (the window object). That's really what happens when we declare a global variable.

window.asim; // 1

We also have function or locally scoped variables. 

function moo() {
  var foo = 1;
};

console.log(foo); // Ref Error

the variable foo is not available outside the function block

Block level scope does not exist for var:

for (var i = 0; i < 5; i++) {
  var j = 5;
}

console.log(j); // 5

We are essential declaring global variables when we declare i and j.



What is hoisting?

If we use strict, we cannot use a variable bofore it's declared.

"use strict";

console.log(a);
var a = 1;

I would expect this code to fail, but when we save and refresh, undefined is returned from the console.log(a)

When JS sees a code like var a = 1, it splits it into two lines. the first is the declaration and then the assignment. var a puts it at the top of the given scope and then it puts a = 1. It looks like this:

var a;
console.log(a);
a = 1;

When we do console.log(a), var a has already been declared from the JS engine's point of view. That's why the console.log(a) returns undefined

if that was in a function, the same thing would happen. the variable declaration would just be pushed to the top of the function scope. 


function foo() {
  console.log(a);
  var a = 1;
}

foo(); // undefined

As well as hoisting variables, it will also hoist functions itself.

foo();

function foo() {
  var a; 
  console.log(a);
  a = 1;
}

JS is able to call the function foo before it even sees function foo, so it moves it like this:

function foo() {
  var a; 
  console.log(a);
  a = 1;
}

foo();


If we do it like this:

foo();

var foo = function() {
  var a;
  console.log(a);
  a = 1;
}

// Uncaught TypeError: foo is not a function

We are not getting undefined as before. The same thing is happening as happens with variable hoisting.

We think that with hoisting the function body should be moved to the top, but what happens is the same thing that happens with variable hoisting:

var foo;

foo();

foo = function() {
  var a;
  console.log(a);
  a = 1;
}

When we call foo, foo is equal to undefined and you can't call undefined. Functions and variables are hoisted to the top of the page, but it you have an anonymous function assigned to a variable you might have an issue like we've just described.




What do the functions call bind and apply do?

Now that we know that the value of this is so unstable, it's not determined by how the code is written (its not lexical), its determined by how the code is executed. We can then look at ways to stabilize this so we can be more confident about this' value.

Sometimes we stabilize our variable that points to this, whatever we want this to be with that, vm or self. 

call, bind and apply are ways of locking down what this means when executing different functions.

To call a function, we can just type the name with parens

function a() {
  console.log(this);
};

a(); 

In JS, functions are objects and have properties, some of which are functions.

Some properties are 'arguments', 'caller', 'name' and 'prototype'

function a() {
  console.log(this);
}

console.log(a.name); // a

Lets give a some parameters:

function a (param1, param2) {
  console.log(this);
}

now the length of the function is 2

Theoretically, I should be able to add properties onto this function:

a.moo = 1;

Now moo will be a property on the a function.

You can also call methods on functions:

console.log(a.toString());

// function a(param1, param2) {
  console.log(this);
}

Another function that you can call on a function is call.

a.call();

a.call() calls the function. It's essentially the same as a(). Why use a.call() instead? The main reason is stabilizing the value of this.

"use strict";

function a() {
  console.log(this);
};

a.call(); // undefined

In strict mode, the default value of this is going to be undefined object. What you can do with the call function is what you want this to be:

function a() {
  console.log(this);
};

a.call({}); // Now this is the empty object you passed in

You can pass in whatever you want:

function a() {
  console.log(this);
};

a.call(1); // this now points to the number 1

To use an old example, we had an object called asim:

var asim = {
  checkThis: function() {
    // this
    function checkOther() {
      console.log(this);
    };
    checkOther.call(this);
  }
}

asim.checkThis();

If you remember this example, normally the this value in the checkOther function was going to be the global object or (with use strict) was goign to be undefined. By using the call method, if we are calling asim.checkThis(); this is the object asim. 

We use call to be explicit regarding what we want this to be in the function that we're calling.

The way to think about this parens method of calling a function is that  is equivalent to:

asim.checkThis() === asim.checkThis.call(asim);

if you don't have a caller, it will pass in non-strict mode, the window object and in strict mode, nothing so it will be undefined.

You can also pass in parameters to the call method.

function a(b,c,d) {
  console.log(this);
  console.log(a);
  console.log(b);
  console.log(c);
}

a.call(1,2,3,4); // 1
// 2
// 3
// 4

That's the call function, what about the apply function. How is that related?

It's quite easy to understand apply when you understand call. It's another function that's available on functions.

a.apply(1, [2,3,4]); // 1
// 2
// 3
// 4

The difference is that as the second argument you put in all the function arguments as a parameter.

But why use call vs. apply? Normally you would use call unless the function takes a variable number of parameters.


Let's say I've got a fxn called sum. You can pass a variable number of parameters without having to actually provide those parameters in the function definition.

function sum() {
  var total = 0;
  for (var i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

var x = sum.call(null, 1,2,3);
console.log(x);

If we have a long list of parameters, we can't pass in more parameters than we expect and do sum().

We can use the apply function:

var things = [1,2,3,4,5];
var x = sum.apply(null, things);
console.log(x)

You use the apply method when you have a function that takes a variadic amount of parameters


What about the bind method?

var a = function() {
  console.log(this);
}

a();

What bind lets us do is that at the time we define this function expression, not the time we call it, we can lock down what we want this to be. 

We do this by writing it as:

var a = function() {
  console.log(this);
}.bind(1);

a(); // 1

Now, whatever we do to a, it will always return 1.

var asim = {
  func: a
}

asim.func(); // 1

One gotcha is:

function() {
  console.log(this);
}.bind(1);

bind doesn't work with function declarations.

var a = function a() {
  console.log(this);
}

a = a.bind(1)

a(); // 1

All that we're doing is when we type .bind() at the end we are shortcircuiting that extra line to bind something directly to the function object that's created.


var a = function a() {
  console.log(this);
}.bind(1);

a() // 1


How can we use bind in our previous example to solve our problem of stabilizing?

var asim = {
  checkThis: function() {
    var checkOther = function () {
      console.log(this);
    }.bind(this);
    checkOther();
  }
}

asim.checkThis();

We assign var checkOther to a function and then we can bind(this) and call checkOther(). The bind(this) is binding the this of the console.log(this) to the asim object.

Functions are in fact objects and derive from other objects, and there is a base function object that has the methods call apply and bind.



What is the prototype chain?

Every object in JS has a prototype. When looking for a property on an object, it will then go to the prototype chain when it can't find it directly on the object.

Let's imagine we have an instance of the object person and we are asking JS to find person.kind. JS will first chekc the person object and if it can't find that, then it will look for the prototype on person and if it points to another object, it will look for the property on that object. It will keep on going down the chain and only if none of those objects on the prototype chain have that property will it return undefined.

var animal = {
  kind: 'human';
}

In some browsers, you can see the objects prototype.

I can like objects together in the prototype chain by assigning them to the proto property.

var asim = {};

asim.__proto__ = animal;

console.log(asim.kind);

Now I've linked asim's prototype to animal's. This asim object doesn't have a kind property, but the object's prototype is the animal object and it serves as the base object. JS is going to look in the asim object for kind, will look proto to animal and will find it there and print:

'human'

console.log(animal.isPrototypeOf(asim)); // true

you can check to see if one object is a prototype of another with the isPrototypeOf method.

If you add/change a property to the prototype object, that is reflected dynamically. 

animal.kind = 'igloo';

console.log(asim.kind) // 'igloo'

If we update the kind property on the prototype object, we will see the change, but what will happen if we change it on the asim object?

asim.kind = 'igloo';
console.log(asim.kind); // 'igloo'
console.log(animal.kind); // 'human'

It sets kind on the asim object. This is important: updating a property that previously only existing on the prototype of the object, adds it to the object and not on the prototype of the object.

Using the __proto__ isn't a good way of assigning prototypes to objects.

Object.create() is a better way

var asim = Object.create(animal);

We are going to pass to it what we want to be the prototype of our new object. We want animal to be the prototype of asim.

We are replacing the lines:

var asim = {};
asim.__proto__ = animal;

You can also pass other info to the second parameter of Object.create:

var asim = Object.create(animal, {food: {value:"mango"}})

console.log(asim); 

// asim: Object
// food: "mango"

It will have a key of food and the value of this key is "mango"


We learned objects are linked to others in a prototype chain and only returns undefined when it searches the chain and doesn't return anything.

More usefully you can use the Object.create() to make a new object and assign a prototype to it. You can pass in properties to the new object being created with Object.create into the second parameter of Object.create


What is the difference between classic and prototypal inheritance?

What is classical inheritance -- named that way b/c its talking about methods of oo in languages like Java and C++. We have things like classes that are like blueprints, it is the architectural diagram and an instance as an object made to the specifications of the class

You create a class and an instance of a class.

But in JS uses prototypes. New objects are created from existing objects. There is no blueprint, we just build a house based on another house. In prototypal inheritance, it is emulating something like classical inheritance.

It is sometimes called the constructor pattern. There is really no OO method in JS. All orientation is prototypal. There are these fake classical patterns, then we have the object oriented prototypal pattern.

We don't have a classical method in JS. ALl inheritance in JS is prototypal. We also have a pseudo classical pattern which allows people to write OO style code in JS, familiar to people coming from other languages.

How do you do pseudo classical inheritance?

This is asked if you know how to implement OO principles in JS. They are hard to learn. Unlike languages like Java, C++ and Python there are no core features of the language to support it.

In ES5, there is no structure called class. There is one in ES6. We can mimic structures that are present in other languages with new keyword and . This is what is called pseudo classical inheritance. It is more properly called the constructor pattern.

The class describes the behavior of an object. JS doesn't have any concept of a class but we can mimic it using a function constructor.


function Person(first_name, last_name) {
  this.first_name = first_name;
  this.last_name = last_name;
}

var dude = Person("asim", "hussain");

// Uncaught TypeError;

Why are we getting this error?

By default, this is set to the global window object. By default, this is set to undefined. We are trying to set out parameters to something that is undefined, that's why we get the TypeError.

if we run it again, we don't get any errors.

This code seems to work:

var dude = new Person("asim, "hussain");
console.log(dude);

// dude: Person
// first_name: "asim"
// last_name: "hussain"

The new keyword is doing more things than just creating a new object and prototype linking it.

function Person(first_name, last_name) {
  this.first_name = first_name;
  this.last_name = last_name;
  this.full_name = function() {
    return this.first_name + ' ' + this.last_name;
  }
}

var dude = new Person('asim', 'hussain');
console.log(dude.full_name());

// asim hussain

That's one way of adding functions to our pseudo classes in JS. Another way is using function prototypes in JS.

Let's breakdown the statement

var dude = new Person("asim", "hussain")

We create an instance of the Person pseudo class by calling the function with new. dude has the properties with the values "asim" and "hussain". 

All objects in JS have the __proto__ property. What does dude point to? To understand that, we have to know that functions in JS have a prototype function.

We have prototype on a function and __proto__ on an object. SO the prototype property of a function points to an object. This object has a constructor property which points to person itself, but because it is an object itself it has the __proto__ property which points to another object and another and it eventually points to null.

What does the dude instance point to?

dude actually points to the Person prototype object. It actually points to the same thing the  prototype property on the Person constructor function points to.

When the object is constructed, it ends up having a prototype chain where the dude instance points to the prototype constructor that was used to create the dude instance and goes on and on until it hits null.

We can now add functions to the prototype of function, which is made available to dude through its prototype chain.

Person.prototype.full_name_prototype = function () {
  return this.first_name + ' ' + this.last_name;
};

This has exactly the same functionality as the original full_name function.

console.log(dude.full_name_prototype());

It's not on the dude object, so it looks in the dude prototype.

The second advantage of the prototype approach is that if you create multiple instances, they all share the same prototype and the function that we added (full_name_prototype), we added on the prototype. It saves on memory to add it on the prototype.

Putting everything on the Person.prototype object is often where they should go.

But there is one advantage of having the function on the class object. You can have some properties that are publicly available and some that are private. 

Everything that we've created here is publicly available. How do we implement immutable functionality?

We can take advantage of a feature of JS known as closures.

In order to take advantage of closures, we remove this in the this.full_name function and replace them with the parameters that we pass in (first_name, last_name). JS will keep a reference to the first name and last name.

In the proto object, we have full_name_prototype.

If you have your function in the body of your constructor, you can simulate something close to a private variable.

But in prototype methods, you use this.first_name and this.last_name



With OO, there is encapsulation (with the pseudoclasses) and there is inheritance.

How do we do inheritance?

If you are copying and pasting code, you are usually not utilizing the best approach.


What is prototypal inheritance?

It's a lot easier to understand that pseudo classical inheritance. The biggest thing to understand is that we have already answered it. It is just the prototype hcain. We don't create a class or pseudoclass. There are no constructors and we don't use the new keyword. create an object whose prototype is another object. One of the benefits of this pattern is that we're using the tools that JS has natively rather than trying to imitate new features of other languages, like in pseudoclassical inheritance.

var Person = {
  full_name: function() {
    return this.first_name + ' ' + this.last_name;  
  }
};

We then create another object that points to this base object. We do that with Object.create function.

var conrad = Object.create(Person);
console.log(conrad); 

We create an object called conrad which points to the Person object. We've got the prototype of the conrad object pointing to the Person object. On the person object, we have the full name function. It is on the person object which is a prototype of the conrad object.

If i wanted to call the function, I can just do:

console.log(conrad.full_name());

But we haven't define first_name and last_name, so we can't return it yet.

Where do we put them?

We can put it on the person object:

var Person = {
  init: function(first_name,last_name) {
    this.first_name = first_name;
    this.last_name = last_name;
    return this
  },
  full_name: function() {
    retur this.first_name + ' ' + this.last_name;  
  }
};

var conrad = Object.create(Person);
conrad.init("conrad","knapp")
console.log(conrad.full_name())


We can also initialize it like:

var conrad = Object.create(Person, {
  first_name: {
    value: 'Conrad'
  },
  last_name: {
    value: 'Knapp
  }
});

console.log(conrad.full_name());

That's another solution, but it's very verbose.

There's a third solution:

function PersonFactory(first_name, last_name) {
  var conrad = Object.create(Person);
  person.first_name = first_name;
  person.last_name = last_name;
  return person;
}

var conrad = PersonFactory("conrad","knapp");

console.log(conrad.full_name());

There is no universal solution to create an instance of an object that point to other objects.

How do we inherit?

With the prototype pattern, there is no specific inheritance methodology, we just keep adding to the prototype chain.

If I wanted to create another object related to person:

var Professional = Object.create(Person);

var conrad = Object.create(Professional);

We have the conrad object that points to the professional object via its prototype and that points to the Person object. 

Now we can bootstrap a function onto our Professional object:

var Professional = Object.create(Person, {
  professional_name: {
    value: function() {
      return this.honorific + ' ' + this.first_name + this.last_name;
    }
  }
});

So now this professional object will be bootstrapped with a function which will print out honorific, first name and last name.

But also we'll need to bootstrap our conrad object with some initial values. One of the solution is to bootstrap more properties and then pass in the values I want once I create conrad object (with conrad.init());

There's a method of adding these functions directly on the professional object. Before creating an instance of conrad, we can add:

Professional.init = function()....

The first way of adding methods is with the Object.create, the second with directly adding them with a set method on the object, and then we can create an object factory.

The prototype pattern is just connecting objects to objects via their prototype chain.

You're going to find a whole segment of JS developers that support one paradigm or another. You should have an idea of what each of the pros and cons of each solution.

The constructor pattern is the most common. You need to be able to recognize it. The constructor pattern will feel more natural because it will mimic the syntax you will have in other languages. It allows for the possibilities of private member variables.

The pro of the prototype pattern is that its very easy to understand, its simple. Once you get how simple it is, it feels very natural to do OO in JS. It depends on you're working with a team that prefers the prototype pattern, use that and the same for the other style. You're going to need to be able to look at code and recognize what its doing. You need to be able to switch between both choices.


What is CORS?

Stands for cross origin resource sharing. CORS allows you to break the same origin policy of a browser. Let's imagine that you go to moo.com and load the page. From within that page came html, css and JS. when that JS ran, it asked for data from foo.com. Maybe it uses an api from there. It sends a request from foo.com. The origin policy means that by default, any further requests that need to be made for resources must only come from and be sent to moo.com When that data is returned, it is blocked by the browser. It doesn't let that data propagate into the rest of your application. It's a security feature. If you own foo.com. And you created an api to support the running of your website. Maybe some people don't even contact that owners of foo and get it using some script, the browser blocks it by default.

CORS lets you selectively unblock certain resources. If foo.com and moo.com were owned by the same person, they might set up a CORS so it could share data. 

If we want to open up access, there are two ways that happens. The way to do that is with a basic get request. Other requests are based on the get request. What happens is that code in the browser sends a get request to moo.com. The origin is the domain whose website the browser is currently displaying. The servers of foo.com will do what they need to do and return a response. For the response to work, the header will need to be Access-Control-Allow-Origin. If the value to that header was the same as the origin header that send the request, the browser will let your application run. The server could also pass back in a star, which means it will let it through. If foo.com passes back another domain that doesn't match the original origin. Your JS code won't even see that response.

To enable CORS the browser will always send the origin to the server and it expects the server to respond back with Access-Control-Allow-Origin which will expect an origin back with either * or the original domain.

It's not the request that gets blocked, its the response that gets blocked. The thing to remember about gets is that the promise with gets is that its not going to change anything on the server side. foo.com is going to return some data. It's not going to change anything in its data. It's not going to change state, its just going to return something.

If I was issuing a put request, it would be send to foo.com. If the response fails CORS, it gets blocked. By that point that the response is blocked, foo.com has already made changes to its database because we issued a put. 

How CORS gets around this is by sending something called a preflight request. A preflight request is an http request with the method options. If we were issuing a put request, the browser would first send an options request to foo.com. It would still set the origin to moo.com, but it would also send another header called access-control-request-method with a value being the method it wants to send to the server. foo.com issues a response. It would then set the access-control-allow origin to

If this preflight request came back successfully, only then would the browser issue the put. Its similar to the get request. We would send the origin and the server would return with the header of access-control-allow-origin. 

test-cors.org acts as both the client and the server.

To make CORS work, you need coordination from the server side. Whoever is in control of that server needs to make sure they are sending the right headers in response to your requests. To get around the same origin policy of the browser, we use CORS. how it works is the server needs to respond back with the access-control-allow-origin header and it needs to respond with star or the original origin that was send. With put/posts and deletes, there will be a preflight request via the option http method, and will check with the server whether the type of request you are sending is allowed.



What is JSONP?

Do you understand when you're supposed to use it? It was brought up in the previous lecture. CORS is the current accepted method of being able to bend the rules of the same origin policy. JSONP predates CORS and was created as a pseudo standard way to retrieve data from a different domain.

It has a couple of limitations. It only works with get requests. It doesn't work with put, post, delete. But it has a lot of uses. It will query the yahoo weather service and will work on any browser with no issues. JSONP is a simpler solution to bending the origin policy and requesting data from a different domain.

If you are requesting data from a server which returns JSON. 

[
  {

  }
]


In a JSONP response, it would be wrapped in the name of a function:

conradFunction([
  {
    "id": 1,
    "first_name": "Conrad",
    "last_name": "Knapp"
  }
])

This is what we'd get from a server if we're asking for JSONP. It would return us something that looks just like JS. 

How does wrapping some JSON with another function make it allowed to be accessed from another domain? It is a neat little trick== a script tag does not have any limitations to where it can pull a script from. It doesn't need to adhere to the same origin policy as if you were using an AJAX request. You can make a request from any origin in the world and the script tags will allow.

If a script tag is added to a page, the browser loads the file associated in the source property and runs the code straight away.

We can then write in our script:

<script>
  function callbackFunction(json) {
    console.log(json);
  }
</script>

That's what happens under the hood when you make a JSONP request to the server. You tell the server via a queried parameter on the request, you tell it the name of the function that it should wrap it's JSON response with...

You won't see JSONP in the XHR tab, you will find it in the All tab.

JSONP creates a random function name, creates a fake script tag, adds your api request to the source, adds that to page, lets the browser download that api response and execute it as if it was JS, it will then call whatever function your framework is using created and that framework will return that to you as if you made an ajax request. It's another solution to the origin policy and the browser. It's easy if you want to do a get request and the server supports JSONP.

What is the difference between event bubbling and event capturing?

When you click on a button, does it go up the tree to the window? The button is fired by the window object and travels directly down to the button, the target. It also touches every single parent to the button on the way down. If you added event listeners for the click event for each of those elements, each of those would have been called. Even when it reaches the bottom, it goes back up to the top, the window, the root. It always starts from the window, the target and then back up to the window. The part that goes from the window to the target is called the event capturing phase. The part that goes from the target to the root is the event bubbling phase, event 2.

How come you haven't seen evidence of that in your code. Every event listener would have been called twice, right? The answer is that when you add an event listener, you can choose which phase you want it to listen to. You can add a listener which pays attention to the capturing phase and one that pays attention to the bubbling phase. By default, it is added to the event bubbling phase.

if you do specific a boolean at the end of your event listener (addEventListener) and its false, its for the bubbling phase. If its true, it's the capturing phase.

When you click on something, there are two phases that travels through. The first is the capturing phase -- root to target. The second is the bubbling phase -- the target to the root. The event listener listens to those phases independently. By default, you are always listening to the event bubbling phase (false).


What is the difference between stopPropagation() and preventDefault()?

Stop propagation actually stops the event from preceding down the event capturing phase or going up the event bubbling phase and no listeners will be called after it is called to stop propagating.

The event doesn't propagate until the previous listener has finished. 

As its propagating, its not async. It won't be called until the previous event listener has finished.

We stop the event from feeding to the rest of the tree with stop propagation. It stops the event from moving to the next callback. If that's stop propagation, what does prevent default do? (event.preventDefault())

It hasn't actually stopped the event from propagating, from moving from the root to the target element. The event still propagates, but if you look at the checkbox (in our example) it's not ticked. The event however has gone through the whole path.

stop propagation stops the event from moving to the next element and prevent default stops the default behavior that event would have triggered in whatever element you performed the event on (it prevents the tick from being applied in the checkbox in our case).




*/