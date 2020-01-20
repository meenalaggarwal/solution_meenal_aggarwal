var assert = require('assert');
var fs = require('fs');

var clicksParser = require('../../utils/clicksParser.js')

describe('ClicksParser', function() {
	var clickData;
	before(function() {
		clickData = [
			{ "ip":"11.11.11.11", "timestamp":"3/11/2016 02:02:58", "amount": 7.40 },
		  	{ "ip":"11.11.11.11", "timestamp":"3/11/2016 02:12:32", "amount": 6.50 },
		  	{ "ip":"11.11.11.11", "timestamp":"3/11/2016 02:13:11", "amount": 7.25 },
		  	{ "ip":"22.22.22.22", "timestamp":"3/11/2016 05:00:54", "amount": 8.75 },
		  	{ "ip":"22.22.22.22", "timestamp":"3/11/2016 05:02:45", "amount": 11.00 },
		  	{ "ip":"22.22.22.22", "timestamp":"3/11/2016 05:20:45", "amount": 11.00 },
		  	{ "ip":"33.33.33.33", "timestamp":"3/11/2016 06:20:45", "amount": 12.00 },
		  	{ "ip":"33.33.33.33", "timestamp":"3/11/2016 06:21:45", "amount": 12.00 },
		  	{ "ip":"33.33.33.33", "timestamp":"3/11/2016 06:22:45", "amount": 12.00 },
		  	{ "ip":"33.33.33.33", "timestamp":"3/11/2016 06:23:45", "amount": 12.00 },
		  	{ "ip":"33.33.33.33", "timestamp":"3/11/2016 06:24:45", "amount": 12.00 },
		  	{ "ip":"33.33.33.33", "timestamp":"3/11/2016 06:25:45", "amount": 12.00 },
		  	{ "ip":"33.33.33.33", "timestamp":"3/11/2016 06:26:45", "amount": 12.00 },
		  	{ "ip":"33.33.33.33", "timestamp":"3/11/2016 06:27:45", "amount": 12.00 },
		  	{ "ip":"33.33.33.33", "timestamp":"3/11/2016 06:28:45", "amount": 12.00 },
		  	{ "ip":"33.33.33.33", "timestamp":"3/11/2016 06:29:45", "amount": 12.00 },
		  	{ "ip":"33.33.33.33", "timestamp":"3/11/2016 06:30:45", "amount": 12.00 }
		];
	});

  	describe('parser', function() {
    	it('Check each ip with most expensive click in an hour', function(done) {
    		var res = clicksParser(clickData);
    		var expectedData = [{ "ip":"11.11.11.11", "timestamp":"3/11/2016 02:02:58", "amount": 7.40 },
      			{ "ip":"22.22.22.22", "timestamp":"3/11/2016 05:02:45", "amount": 11.00 }];
      		assert.deepEqual(res, expectedData);
    		done();
    	});

    	it('Check same ip in an hour as max expensive click', function(done) {
    		var res = clicksParser(clickData);
    		var expectedData = [{ "ip":"11.11.11.11", "timestamp":"3/11/2016 02:02:58", "amount": 7.40 },
      			{ "ip":"22.22.22.22", "timestamp":"3/11/2016 05:02:45", "amount": 11.00 }];
      		assert.deepEqual(res, expectedData);
    		done();
    	});

    	it('Check for more than 10 clicks', function(done) {
    		var res = clicksParser(clickData);
    		var expectedData = [{ "ip":"11.11.11.11", "timestamp":"3/11/2016 02:02:58", "amount": 7.40 },
      			{ "ip":"22.22.22.22", "timestamp":"3/11/2016 05:02:45", "amount": 11.00 }];
      		assert.deepEqual(res, expectedData);
    		done();
    	});

    	it('Check for different date clicks', function(done) {
    		clickData.push({ "ip":"33.33.33.34", "timestamp":"4/11/2016 06:30:45", "amount": 12.00 })
    		var res = clicksParser(clickData);
    		var expectedData = [{ "ip":"11.11.11.11", "timestamp":"3/11/2016 02:02:58", "amount": 7.40 },
      			{ "ip":"22.22.22.22", "timestamp":"3/11/2016 05:02:45", "amount": 11.00 },
      			{ "ip":"33.33.33.34", "timestamp":"4/11/2016 06:30:45", "amount": 12.00 }];
      		assert.deepEqual(res, expectedData);
    		done();
    	});
  	});
});
