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

function bar(x, y, z) {
	
	return foo(x);
	
	function foo(x) {
		
	}
	
	
}