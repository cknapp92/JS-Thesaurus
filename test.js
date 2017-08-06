const myList = document.getElementsByTagName('li');

for (let i = 0; i < myList.length; i++) {
	myList[i].style.color = 'purple';
}

const ErrorNot = document.querySelectorAll('.error-not-purple');

for (let i = 0; i < ErrorNot.length; i++) {
	ErrorNot[i].style.color = 'red';
}

const evens = document.querySelectorAll('li:nth-child(even)');

for (let i = 0; i < evens.length; i+=1) {
	evens[i].style.backgroundColor = 'lightgray';
}