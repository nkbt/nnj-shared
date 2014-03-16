var config = {
	sayYes: false
};

function say() {
	if (config.sayYes) {
		return "Yes!";
	}
	return "No.";
}

function sayYes(shouldSayYes) {
	config.sayYes = !!shouldSayYes;
}

exports.sayYes = sayYes;
exports.say = say;
