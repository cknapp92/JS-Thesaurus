var requestStream = Observable.of('https://api.github.com/users');

var responseStream = requestStream
	.flatMap(requestUrl => Observable.fromPromise(jQuery.getJSON(requestUrl)));

responseStream.subscribe(response => {
  console.log(response);
});