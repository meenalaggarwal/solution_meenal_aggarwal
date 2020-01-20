var FileHandler = require('./utils/FileHandler.js');
var clicksParser = require('./utils/clicksParser.js');

function main() {
	var fh = new FileHandler();
	
	// Read Input File
	var clicks = fh.readJSONFile('./clicks.json');

	if (clicks instanceof Error) {
		return clicks;
	} else {
		// Clicks Parser 
		var resultSet = clicksParser(clicks);
		
		// Write result to resultset file
		fh.writeJSONFile('./resultset.json', resultSet);
		console.log('***************DATA SUCCESSFULLY GENERATED**********************');

		return resultSet;	

	}
}

module.exports = main();