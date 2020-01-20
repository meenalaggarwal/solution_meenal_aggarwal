var fs = require('fs');

function FileHandler() {}

FileHandler.prototype.readJSONFile = function(fileName) {
	if (!fileName) {
		return new Error('Bad Request');
	}
	try {
		var rawData = fs.readFileSync(fileName);
		return JSON.parse(rawData);
	} catch(err) {
		return new Error('Bad Request');
	}
};

FileHandler.prototype.writeJSONFile = function(fileName, data) {
	if (!fileName || !data) {
		console.log('bshdbvhsbvdhsbdhj')
		return new Error('Bad Request');
	}
	return fs.writeFileSync(fileName, JSON.stringify(data));
};

module.exports = FileHandler;