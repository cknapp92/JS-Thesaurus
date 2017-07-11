function calculateArea (dingus) {
	var area;
	if (dingus <= 0) {
		return 0;
	} else {
		area = Math.PI * dingus * dingus
		return area;
	}
	
}

var radius = 5.2;
var theArea = calculateArea(radius);

console.log("The area is " + theArea);