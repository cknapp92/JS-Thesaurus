var word = "bottles";
var count = 99;
	while (count > 0) {
		document.write(count + " " + word + " of beer on the wall <br>");
		document.write(count + " " + word + " of beer <br>");
		document.write(" you take one down and pass it around <br>");
		count = count - 1;
		if (count > 0) {
			document.write(count + " " + word + " of beer on the wall <br>");
		} else {
			document.write("No more bottles of beer on the wall! <br>");
		}
	}