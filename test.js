var text = ''; // create 'text' var and give it an empty string

for (var i = 1; i <= 100; i+= 1) {
	text += '<div>' + i + '</div>'; // add string of text to variable
}
	document.write(text);
