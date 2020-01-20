var assert = require('assert');
var fs = require('fs');

var FileHandler = require('../../utils/fileHandler.js')

describe('FileHandler', function() {
	var fh;
	before(function() {
		fh = new FileHandler();
	});

	describe('readJSONFile', function() {
		it('With valid filename', function(done) {
			var res = fh.readJSONFile('./clicks.json');
				assert.equal(typeof res, 'object');
			done();
		});

		it('With invalid filename', function(done) {
			var res = fh.readJSONFile('./clickss.json');
				assert.equal(res instanceof Error, true);
			done();
		});

		it('Without filename', function(done) {
			var res = fh.readJSONFile();
				assert.equal(res instanceof Error, true);
			done();
		});
	});

	describe('writeJSONFile', function() {
		it('With valid filename', function(done) {
			fh.writeJSONFile('./test.json', {test: true});
			var res = fh.readJSONFile('./test.json');
				assert.equal(typeof res, 'object');
			done();
		});

		it('Without filename', function(done) {
			var res = fh.writeJSONFile();
				assert.equal(res instanceof Error, true);
			done();
		});

		it('Without data', function(done) {
			var res = fh.writeJSONFile('./test.json');
				assert.equal(res instanceof Error, true);
			done();
		});
	});

	after(function() {
		fs.unlinkSync('./test.json');
	});
});
