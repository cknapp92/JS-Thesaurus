// we take some list of data in the form of an array and we want to transform it into something else -- using the reduce function, which is built into all arrays

// you need a reducer and the initial value, the accumulator

var data = [];

var reducer = function(acc, item) {
    return acc + item;
}

var total = data.reduce(reducer, initialValue);

// return previous accumulator and add that to the current item

// the very first time this runs, we need to provide a specific value, so it knows what to start with

var initialValue = 0;

console.log("The sum is", total); // The sum is 0




// Ex 2:

var data = [5,3,10];

var reducer = function(acc, item) {
    return acc + item;
}

var initialValue = 0;

var total = data.reduce(reducer, initialValue);

console.log("The sum is", total); // The sum is 18


//array.reduce always evaluates to the final value of the accumulator, which will be 18


/* --------- */

var votes = [
    "angular",
    "angular",
    "vue",
    "react",
    "react",
    "react",
    "vanilla"
];

// What we want is to turn this into an object that gives us the number of votes for each framework named

// I have an array and I want to turn this into an object. This is a job for reduce

var initialValue = {};

var reducer = function(tally, vote) {
    if(!tally[vote]) {
        tally[vote] = 1;
    } else {
        tally[vote] = tally[vote] + 1;
    }
    
    return tally;
};

// tally is whatever got returned the last time the reducer was run, except the first time it was run

// vote is going to be each of these items in a row

var result = votes.reduce(reducer, initialValue);

console.log(result);

// because this is reduce, this whole thing evaluates to the last value that gets returned from the reduce function


var data = [1,2,3];

// transform array into another array, reduce it into another array where every value is doubled

var doubled = data.reduce(function(acc,value) {
    acc.push(value * 2);
    
    return acc;
}, []);

console.log("My doubled data:", doubled);

// this is called a map.

var doubleMapped = data.map(function(item) {
    return item * 2;
})

console.log("My doubled data:", doubleMapped);


// reduce an array into a smaller array that only contains even numbers

var data2 = [1,2,3,4,5];
var evens = data2.reduce(function(acc, value) {
    if (value % 2 === 0) {
      acc.push(value);
    }
    return acc;
}, []);

console.log(evens);

// this is the same as filter

var evenFiltered = data2.filter(function(item){
    return (item % 2 === 0);
});


// why use reduce when we have map or filter, especially when they are composable?


var filterMapped = data2.filter(function(value) {
    return value % 2 === 0;
}).map(function (value) {
    return value * 2;
});

console.log(filterMapped);

// this is fine for small numbers, but what if you have a big array?


var bigData = [];

for (var i = 0; i < 1000000; i++) {
  bigData[i] = i;
}

console.time('bigData');

var filterMapped = data2.filter(function(value) {
    return value % 2 === 0;
}).map(function (value) {
    return value * 2;
});

console.timeEnd('bigData'); // 76 ms


console.time('bigDataReduce');
var reducedBigData = bigData.reduce(function(acc,value) {
    if (value % 2 === 0) {
        acc.push(value * 2);
    }
    return acc;
}, [])

console.timeEnd('bigDataReduce'); // 54ms


// Why is that?
// Because when you're composing map and filter, filter will go through 1 million and return 500,000 and map has to go through that 500,000
// reduce is filtering and mapping all in one step.
// It only goes through the million once
// reduce allows you to perform all these operations at once so you're not constantly iterating over the same data set


function reducer(acc,value) {
    return acc + value;
}

var data = [1,2,3,4,5];

// we can reduce this data into a sum

var sum = data.reduce(reducer, 0);

console.log(sum); // 15

// what if we want to calculate the mean?

// instead of creating the sum and dividing it by the length, what can we do?

// we take advantage of the fact that there's a couple of other supporting functions in the reduce function

function reducer(acc, value, index, array) {
  var intermediaryValue = acc + value;
 
  if (index === array.length - 1) {
      return intermediaryValue / array.length;
  }
    
  return intermediaryValue;    
}

var data = [1,2,3,4,5,6];
var mean = data.reduce(reducer,0);

console.log(mean);

// we've directly reduced the array into a mean, instead of creating the sum and then dividing it



/* COMMON ERRORS */

// Always pass in an initial value for the accumulator (even when you are working with numbers) 

// Also, make sure you are always returning the accumulator




// Flatten

// Say you have an array of arrays

var data = [[1,2,3], [4,5,6], [7,8,9]];

// you want an array of nine numbers, not three array
// flatten is when you take a list of lists and you return just a single list of that thing

var flattenedData = data.reduce(function(acc, value) {
    return acc.concat(value);
}, []);

console.log(flattenedData); // [1,2,3,4,5,6,7,8,9]



// Flatmap - a type of reduce operation, just like map or filter

// takes a list of values where the values are complex objects and turns each of those values into an array

// in this case, for each of these movies we're just going to pull out the cast, then concatenate the arrays together with the flatten operation

// what you have is a list of values that were extracted through some compound operation from a list of more complex  values


var batman = [
    {
        title: 'Batman Begins',
        year: 2005,
        cast: [
          "Christian Bale",
          "Katie Holmes",
          "Dino"
        ]
    },
    {
        title: 'The Dark Knight',
        year: 2008,
        cast: [
          "Christian Bale",
          "Gary Oldman",
          "Scruffy"
        ]
    },
    {
        title: 'The Dark Knight Rises',
        year: 2012,
        cast: [
          "Christian Bale",
          "Tom Hardy",
          "Anne Halfway"
        ]
    }
];

var stars = batman.reduce(function(acc,value){
    return acc.concat(value.cast);
}, [])

console.log(stars); // ["Christian Bale", "Katie Holmes", "Dino", "Christian Bale", "Gary Oldman", "Scruffy", "Christian Bale", "Tom Hardy", "Anne Halfway"]

// this doesn't satisfy one of our constraints, not to have the star names repeated

var stars = batman.reduce(function(acc,value) {
    value.cast.forEach(function(star) {
        if (acc.indexOf(star) === -1) {
            acc.push(star);
        }
    })
    return acc;
}, []);

console.log(stars); // ["Christian Bale", "Katie Holmes", "Dino", "Gary Oldman", "Scruffy", "Tom Hardy", "Anne Halfway"]



// if you reduce over a set of values, the function you are providing is going to be called for each of these values in order one at a time from left to right

// the index will be 0,1,2,3,4

var data = [1,2,3,4,"5"];

var sum = data.reduce(function(acc,value,index){
  console.log(index);
  return acc + value;
}, 0);

console.log(sum); // 0
//1
//2
//3
//4
//105

// is there a way to reverse the direction of reduce like with a for loop?

var sum = data.reduceRight(function(acc,value,index){
  console.log(index);
  return acc + value;
}, 0);

console.log(sum);

//4
//3
//2
//1
//0
//054321




// if I have first class functions in my programming language, like we have in JS, functions are essentially data

function increment(input) { return input + 1;}
function decrement(input) { return input - 1;}
function double(input) { return input * 2;}
function halve(input) { return input / 2;}

var initial_value = 1;
var incremented_value = increment(initial_value);
var doubled_value = double(initial_value);
var final_value = decrement(doubled_value);

console.log(final_value);

// you're initializing all these variables and you are introducing all these possibilities for errors, such as misspelling one of them

// I'm going to write a single function that composes all of these functions and not introduce a lot of variables that pollute the global namespace

var initial_value = 1;

function transform(input) {
    return((input + 1) * 2) - 1;
}

var final_value = transform(initial_value);

console.log(final_value);

// let's not cram all these details into one line

// A pipeline is a term for a series of functions that get applied to some initial value in order to return some final value

// This pipeline can be invoked as one single function so you don't have all of these intermediary values littering up your code base

// Pipeline work well in simple little JS stuff as well as big data

// We want to increment a value, then double, then decrement

var pipeline = [
  increment,
  double,
  decrement
];

var final_value = pipeline.reduce(function(acc, fn) {
  return fn(acc);
}, initial_value);

console.log(final_value);


// this so much cooler than you think because it's composed. this pipeline is an array, it can be composed by another function

var pipeline = [
    increment,
    increment,
    increment,
    double,
    increment,
    increment,
    halve
];

var final_value = pipeline.reduceRight(function(acc, fn) {
  return fn(acc);
}, initial_value);

console.log(final_value);


// this is cool because we can easily look at it and determine the order and flow of operations

// this is a little bit like unix pipes


// use reduce to deal with data that is not as clear as it might be

var luke = {
    name: "luke skywalker",
    jedi: true,
    parents: {
        father: {
            jedi: true
        },
        mother: {
            jedi: false
        }
    }
}

var han = {
    name: "han solo",
    jedi: false,
    parents: {
        father: {
            jedi: false
        },
        mother: {
            jedi: false
        }
    }
}

var anakin = {
    name: "anakin skywalker",
    jedi: true,
    parents: {
        mother: {
            jedi: false
        }
    }
}

var characters = [luke, han, anakin];

characters.forEach(function(character) {
    console.log(character.name + "'s father was a jedi:", character.parents.father.jedi)
})

/* luke skywalker's father was a jedi: true
han solo's father was a jedi: false
Uncaught TypeError: */

// if we try to write a pipeline that looks at character.parents.father.jedi we are going to get an undefined exception for anakin. what are we going to do about that?

// is there some way we can write code without it crapping out and get the behavior we want?

// we need to come up with the path that we need to follow through the character

function fatherWasJedi(character) {
    var path = "parents.father.jedi";
    return path.split('.').reduce(function(obj, field) {
      if (obj) {
          return obj[field];
      }
      return false;
    }, character)
}

// the last time this runs with anakin, obj is going to be undefined (false), but with luke and han it will return true

characters.forEach(function(character) {
  console.log(character.name + "'s father was a jedi:", fatherWasJedi(character));
});

// luke skywalker's father was a jedi: true
// han solo's father was a jedi: false
// anakin skywalker's father was a jedi: false
