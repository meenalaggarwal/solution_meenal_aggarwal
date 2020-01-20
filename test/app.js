var assert = require('assert');
var fs = require('fs');

describe('Main App', function() {
	var clickData;
  	describe('resultSet', function() {
    	it('Valid ResultSet', function(done) {
    		var res = require('../app.js');
    		var expectedData = [
			  {
			    "ip": "11.11.11.11",
			    "timestamp": "3/11/2016 02:13:11",
			    "amount": "7.25"
			  },
			  {
			    "ip": "11.11.11.11",
			    "timestamp": "3/11/2016 06:45:01",
			    "amount": "12.00"
			  },
			  {
			    "ip": "11.11.11.11",
			    "timestamp": "3/11/2016 07:02:54",
			    "amount": "4.50"
			  },
			  {
			    "ip": "44.44.44.44",
			    "timestamp": "3/11/2016 02:13:54",
			    "amount": "8.75"
			  },
			  {
			    "ip": "44.44.44.44",
			    "timestamp": "3/11/2016 06:32:42",
			    "amount": "5.00"
			  },
			  {
			    "ip": "44.44.44.44",
			    "timestamp": "3/11/2016 13:02:55",
			    "amount": "8.00"
			  },
			  {
			    "ip": "33.33.33.33",
			    "timestamp": "3/11/2016 07:02:54",
			    "amount": "15.75"
			  },
			  {
			    "ip": "66.66.66.66",
			    "timestamp": "3/11/2016 07:02:54",
			    "amount": "14.25"
			  },
			  {
			    "ip": "55.55.55.55",
			    "timestamp": "3/11/2016 13:02:40",
			    "amount": "8.00"
			  },
			  {
			    "ip": "55.55.55.55",
			    "timestamp": "3/11/2016 14:03:04",
			    "amount": "5.25"
			  },
			  {
			    "ip": "55.55.55.55",
			    "timestamp": "3/11/2016 15:12:55",
			    "amount": "6.25"
			  },
			  {
			    "ip": "55.55.55.55",
			    "timestamp": "3/11/2016 16:22:11",
			    "amount": "8.50"
			  },
			  {
			    "ip": "55.55.55.55",
			    "timestamp": "3/11/2016 17:18:19",
			    "amount": "11.25"
			  },
			  {
			    "ip": "55.55.55.55",
			    "timestamp": "3/11/2016 18:19:20",
			    "amount": "9.00"
			  }
			];
      		assert.deepEqual(res, expectedData);
    		done();
    	});
  	});
});
