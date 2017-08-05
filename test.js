var questions = [
	['How many states are in the US?', 50],
	['How many continents are there?', 7],
	['How many legs does an insect have', 6]
];

var correctAnswers = 0;
var question;
var answer;
var response;
var html;
var correct = [];
var wrong = [];

function buildList(arr){
	var listHTML = '<ol>';
	for (var i = 0; i <arr.length; i += 1) {
		listHTML += '<li>' + arr[i] + '</li>';
	}
	listHTML += '</ol>';
	return listHTML;
}

for (var i = 0; i < questions.length; i += 1) {
	question = questions[i][0];
	answer = questions[i][1];
	response = parseInt(prompt(question)); 
	if (response===answer) {
		correctAnswers += 1;
		correct.push(question);
	} else {
		wrong.push(question);
	}
}

function print(message) { 
	document.write(message); 
}

html = "You got " + correctAnswers + " question(s) right.";
html += "You got these questions right.";
html += buildList(correct);
html += "<h2> You got these questions wrong.</h2>";
html += buildList(wrong);
print(html);