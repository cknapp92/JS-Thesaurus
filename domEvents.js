/* Traversing the DOM and Node API */

// create DOM element
let newDiv = document.createElement('div');

// add class/id/attr name
newDiv.className = 'hello';
newDiv.id = 'hello';
newDiv.setAttribute('title', 'hello');

// create text node
let newDivText = document.createTextNode('hello world');

// add that text to div
newDiv.appendChild(newDivText);

// i.e. <div>hello world</div>


/* DOM Events */

let button = document.getElementById('button').addEventListener('click', buttonClick);

function buttonClick (e) {
  console.log(e.target); // gives the html of DOM element you clicked on
  console.log(e.target.id); // gives id ""
  console.log(e.target.className); // gives you entire class name ""
  console.log(e.target.classList); // gives you a DOM token list; an array of the classes ""

  console.log(e.type); // tells us the name of the event
  console.log(e.clientX); // gives position of mouse on X axis when clicked from the window, from the top down
  console.log(e.clientY); // gives position of mouse on Y axis ""

  console.log(e.offsetX); 
  console.log(e.offsetY); // gives mouse position of the element you're inside of, not from the window

  console.log(e.altKey); // hold down alt key while you click to get true
  console.log(e.ctrlKey); // "" ctrl
  console.log(e.shiftKey); 

}

function runEvent () {
  console.log(e.type);
}

/* Mouse Events */

button.addEventListener('dblclick', runEvent);
button.addEventListener('mousedown', runEvent); // as soon as the mouse goes down, the event fires off
button.addEventListener('mouseup', runEvent); // when you release from mouse, event fires off

let box = document.getElementById('box');

box.addEventListener('mouseenter', runEvent); // as soon as the box is entered, the event fires off
box.addEventListener('mouseleave', runEvent); // as as the box is left ""

box.addEventListener('mouseover', runEvent); // 'mouseover' is for any inner element that is entered, the 'mouseenter' is only for the parent element
box.addEventListener('mouseout', runEvent); // 'mouseout' is for any inner element that is left, 'mouseleave' is only for the parent element

box.addEventListener('mousemove', runEvent); // fires whenever you're inside the element and moving the mouse


// example to make background color of DOM element 'box' change when mouse is moved over it

box.addEventListener('mousemove', runEvent);

function runEvent (e) {
  box.style.backgroundColor = 'rgb('+e.offsetX+', '+e.offsetY+', 40)';
}

/* Key Events */

let itemInput = document.querySelector('input[type="text"]');
let form = document.querySelector('form');

itemInput.addEventListener('keydown', runEvent);
itemInput.addEventListener('keyup', runEvent);
itemInput.addEventListener('keypress', runEvent);


function runEvent (e) {
  console.log(e.target.value); // logs what is typed into an input 
  document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>'; // will output the text typed into the input into a div on the page
}

itemInput.addEventListener('focus', runEvent); // when we select the input field
itemInput.addEventListener('blur', runEvent); // when we click away from the input field

itemInput.addEventListener('cut', runEvent); // fires off event on cut
itemInput.addEventListener('paste', runEvent); // fires off event on paste

itemInput.addEventListener('input', runEvent); // fires off event when you type in input

// with a select box

let select = document.querySelector('select');

select.addEventListener('change', runEvent);
select.addEventListener('input', runEvent); // event fires on both 'change' and 'input when you use a select box

function runEvent (e) {
  console.log(e.target.value);
}

// with a submit button

form.addEventListener('submit', runEvent);

function runEvent (e) {
  e.preventDefault(); // now it doesn't use its default behavior
  console.log(e.type);
}