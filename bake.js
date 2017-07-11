function bake (degrees) {
	var message;
	
	if (degrees > 500) {
		message = "I'm not a nuclear reactor!";
	} else if (degrees < 100) {
		message = "I'm not a refridgerator!";		
	} else {
		message = "That's a good temp";
		setMode(bake);
		setTemp(degrees);	
	}
	return message;
		
}

	var status = bake(350);