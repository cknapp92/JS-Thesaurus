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

https://stackoverflow.com/questions/336859/var-functionname-function-vs-function-functionname?rq=1 ; see Crowder's answer



What is the difference between var and let?


let can also be used to avoid problems with closures. It binds fresh value rather than keeping an old reference as shown in examples below.

for(var i = 1; i < 6; i++) {
	document.getElementById('my-element' + i)
		.addEventListener('click', function() { alert(i) })
}

Code above demonstrates a classic JavaScript closure problem. Reference to the i variable is being stored in the click handler closure, rather than the actual value of i.

Every single click handler will refer to the same object because there’s only one counter object which holds 6 so you get six on each click.

General workaround is to wrap this in an anonymous function and pass i as argument. Such issues can also be avoided now by using let instead var as shown in code below.

'use strict';

for(let i = 1; i < 6; i++) {
	document.getElementById('my-element' + i)
		.addEventListener('click', function() { alert(i) })
}

https://stackoverflow.com/questions/762011/whats-the-difference-between-using-let-and-var-to-declare-a-variable?rq=1


*/ 





