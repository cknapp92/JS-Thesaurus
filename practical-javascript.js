/* 

todos; // ["item 1 updated", "item 2", "item 3"];

todos.splice(0,1); // ["item 1 updated"]

to delete the first item we put in 0 as the first argument, we use 1 for the second parameter because we only want to delete one thing. It also returns the item we deleted ["item 1 updated"]

todos; // ["item 2", "item 3"];

todos.splice(1, 1); // ["item 3];

todos; // ["item 2"];


A function is just like a recipe. It's a set of instructions that does something.

If you want to change the recipe and maybe it's for a sandwich, you want the customer to be able to have different toppings. And you want to generalize this recipe so that you don't have to have a bunch of different recipes, you just have one recipe that can change depending on the different toppings.

function makeSandwichWith(filling) {
  Get one slice of bread;
  Add filling;
  Put a slice of bread on top;
}

makeSandwichWith(ham)

Inside of parentheses you can add variables that you can put within your function

If you want to use a variable as a parameter for a function, you need to have declared it before (i.e. we need to have declared ham before), but we could pass in a primitive value like 'ham'

For example:

function sayHiTo(person) {
 console.log('hi', person);
}

When we pass in 'conrad' to person: sayHiTo('conrad'); person is being set to 'conrad'

person = 'conrad'

Parameters are assigned a value when you pass them into the function, when you call the function.



todos = ["item 1", "item 2", "item 3"];

function displayTodos() {
  console.log('My todos:', todos);
}


function changeTodo(position, newValue) {
  todos[position] = newValue;
}

changeTodo(0, 'my todo'); 

todos; // ["changed", "item 2", "item 3"]



function deleteTodo(position) {
  todos.splice(position, 1);
  displayTodos();
}

deleteTodo(0); // My todos: ["item 2", "item 3"];



You use objects to group related data and functions together

var myComputer = {
operatingSystem: 'mac';
screenSize: 13;
purchaseYear: 2013; 
}

var conrad = {
  name: 'Conrad';
  sayName: function(){
    console.log(this.name);
  }
}

conrad.sayName(); // 'Conrad'



*/