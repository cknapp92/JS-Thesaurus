/* 


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

Virtually all UI, when you do some interaction with it, you see the same progression, you listen for an event (you get input from the user), then you make an async request to the server and follow up with an animation. The observable can model all three things. You can compose those three things together seamlessly. It models all the most common async components you see in interfaces.

We need to take all these old async APIs (including the DOM) and we need to take all them and adapt them into observables.



How do you subscribe to an event?

// "subscribe"

var handler = (e) => console.log
document.addEventListener("mousemove", handler);

// "unsubscribe"

document.removeEventListener("mousemove", handler);

Take an event handler and you add it to some DOM node (could be a button or a link tag). We give it the name of an event and we give it a callback. Every time a mouse move happens the call back is evoked. The mouse move is pushed at us.

// "subscribe"

var subscription =
	mouseMoves.forEach(console.log);

Here's how you do the exact same thing with an observable. You can just forEach over it. We're passing in a function that gets evoked for every item in the observable. 

An array method of forEach is going to completely synchronously. When you forEach over an observable, it completes immediately, but as things arrive over time, the function get invoked.

If you don't want to receive messages anymore

// "unsubscribe"

subscription.dispose(); 




*/ 