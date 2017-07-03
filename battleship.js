var guess;
var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc; 
var location2 = location1 + 1; 
var location3 = location2 + 1;
var hits = 0;
var guesses = 0;
var isSunk = false;

while (isSunk) {
	guess = prompt( "Guess a number between 0 and 6:" );
} if ( guess < 0 || guess > 6 ) {
	alert ( "Invalid number. Enter a number between 0 and 6" );
} else {
	guesses ++;
	
} if ( guess == location1 || guess == location2 || guess == location3 ) {
	alert("HIT!");
	hits ++;
} if ( hits == 3 ) {
	isSunk = true;
	alert ( "You've sunk my battleship!" );
} else {
	alert("MISS!");
}
var stats = "You took " + guesses + " to sink the battleship. That means your accuracy was " + (3/guesses);

alert(stats);