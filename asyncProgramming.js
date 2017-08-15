/* 

What is inversion of control?

Inversion of control means there's part of my program that I'm in control of executing and there is another portion of my code that I'm not in control of executing. The way we express that is to take the first part that executes now and the second half that executes in a callback and when I give that callback to someone else, that's what inverts the control and it puts them in control of when and in what manner to execute the second half of my program.

This is one of the two evils of 'callback hell,' this notion of inversion of control.

// line 1
setTimeout( function() {
	// line 3
	// line 4
}, 1000);
// line 2

lines 1, 2 are what's happening now, we are in control of them
lines 3, 4 are going to be in some later time and we have given that control to someone else (we give it to setTimeout in this case)

We don't have a trust issue with the timer necessarily, because setTimeout is part of the JS engine. But maybe it's part of a third-party library?

// example scenario using a third-party library

trackCheckout(
	purchaseInfo,
	function finish() {
		chargeCreditCard(purchaseInfo);
		showThankYouPage();
	}
);

when you pass in a callback, you are trusting it won't be called in too many times or too few times. It doesn't necessarily have to be a third-party utility, it can be another part in your system, something you wrote.

Every time you pass a callback, you have been implicitly trusting that certain things won't happen:
	1) that it won't be too early
	2) it won't be too late
	3) it won't be too many times
	4) not too few times
	5) no lost context
	6) no swallowed errors
	
There is no built-in solution for this inversion of control. We're going to need something better that is designed to solve all of these trust issues.


What is the second tenet of callback hell?

Callbacks are not reason-able (they are not able to be reasoned about).

Our brains are fundamentally single threaded. We are only thinking about one thing at a time. We think about things in a sequential fashion. Your brain can be interrupted event-wise and can adjust. We naturally plan things in a sequential, synchronous, step-by-step fashion. This is how we code, as well.


Where our brain diverges from the JS engine, more bugs can emerge in our code. We should try to program more naturally like your brain so there are hopefully less bugs in your program. 



What is temporal dependency?

When one thing depends on another thing finishing before it  can go, that's a temporal dependency. The only way with callbacks for us to express TD is nesting one inside of the other, the call to one inside of the call to the other. The only way to handle temporal dependency with callbacks alone is through nesting. Why is that a problem? Now your brain can't linearly progress through the code.
 
Callbacks alone don't have a way of expressing things in a sequential fashion. There's no way to do async programming in a sync fashion. Actually, it is quite possible. We just need a better pattern. 







What is the problem with loops?


When you start doing async programming, you can't repeat asynchronous programming with a loop. Loops become useless to us. We need to find ways of processing streams of data when they come in without using loops. 

We can replace loops with simple functions such as forEach, map, filter and other functions that don't change the original array but create a new, original array.


What's the difference between events and arrays?

Events and arrays are both collections. Why don't we program them the same way? We should approach them the same way.



What is the iterator design pattern?

You have a producer (the iterator) and consumer. The consumer requests info from the producer until the producer says it doesn't have any more data or an error occurs. 

Think of this as a function returning multiple values. 

var iterator = [1,2,3].iterator();
console.log(iterator.next()); // { value: 1, done: false }
...
{ done: true}

Map, filter and concatAll can also be implemented using an iterator. 



What is the observer design pattern?

This is essentially DOM events. The producer pushes data at you. That's how an event works. In the iterator, the consumer is in control, but in the observer, the producer is in control. The only difference is who is in control (consumer vs. producer).

The iterator and the observer design patterns are deeply related. They are symmetrical. Understanding their relationship is the key to become an expert at async programming.




We need some well defined way for producers to tell consumers that "I have no more data for you." Because there's no way to say completion or error, there are a lot of Push APIs, and all of them are slightly different (don't show completion and error equally). But if you look at iterations where the consumer is in control, we have one interface, it is standardized and everyone uses it everywhere. This is a mistake; we should have one interface we use for Push streams in JS.

If you can have an iterable (an array), something you can ask for an iterator from, its not an iterator, it's something you can ask to give you an iterator. The opposite or an iterable, is an observable. Think of it as a collection that arrives over time.


Why are observables important and powerful?

Virtually every UI, when you do some interaction with it, you see the same progression, you listen for an event (the user does something), then you make an async request to the server and follow up with an animation. The observable can model all three things. if you model all three of those actions, you can use certain function to  compose those three things together seamlessly, with little code. It is capable of modeling all the most common async actions you see in interfaces.

The first thing we need to do is take all these old async APIs (including the DOM) and adapt them into observables.

Adapt for example a DOM event into an observable.

Event:

// "subscribe"

var handler = (e) => console.log
document.addEventListener("mousemove", handler);

// "unsubscribe"

document.removeEventListener("mousemove", handler);

Take an event handler and you add it to some DOM node (could be a button or a link tag). We give it the name of an event and we give it a callback. Every time a mouse move happens the call back is evoked. The mouse move is pushed at us.

Observable:

// "subscribe"

var subscription =
	mouseMoves.forEach(console.log);

Here's how you do the exact same thing with an observable. You can just forEach over it. We're passing in a function that gets evoked for every item in the observable. What comes out is a subscription object.

An array method of forEach is going to completely synchronously. When you forEach over an observable, it completes immediately, but as items in the observable arrive over time, the function get invoked. 

If you're not interesting in receiving data/messages anymore, the consumer can say it doesn't care. The same removeEventListener.

// "unsubscribe"

subscription.dispose(); 


What is an observable?


An observable is like an event that's a first-class function that you can give three handlers instead of one. An observable is nothing but an object with a forEach method. The forEach is how you get the data out.




*/ 