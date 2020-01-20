var moment = require('moment');

module.exports = function(clicks) {
	var ipDateObj = {};
	var ipCountObj = {};

	// parser to generate data in below form
	/*
		ip__date: {
			timePeriod: {
				timestamp: <timestamp>,
				amount: <amount>
			}
		}
	*/
	for (var i = 0; i < clicks.length; i++) {
		var click = clicks[i];
		var ip = click.ip;
		var timestamp = new Date(click.timestamp);
		var date = timestamp.getDate() + timestamp.getMonth() + timestamp.getDate();
		var key = ip + '__' + date;
		var timePeriod = timestamp.getHours() + 1;

		if (ipDateObj[key] && ipDateObj[key][timePeriod]) {
			var storedData = ipDateObj[key][timePeriod];
			if (storedData.amount < click.amount || (storedData.amount === click.amount && 
				moment(storedData.timestamp).isAfter(moment(click.timestamp)))) {
				ipDateObj[key][timePeriod] = {
					timestamp: click.timestamp,
					amount: click.amount.toFixed(2)		
				};
			}
		} else if (ipDateObj[key]) {
			ipDateObj[key][timePeriod] = {
				timestamp: click.timestamp,
				amount: click.amount.toFixed(2)
			};
		} else {
			ipDateObj[key] = {
				[timePeriod]: {
					timestamp: click.timestamp,
					amount: click.amount.toFixed(2)
				}
			};
		}
		if (ipCountObj[ip]) {
			ipCountObj[ip] = ipCountObj[ip] + 1;
		} else {
			ipCountObj[ip] = 1;
		}
	}

	return resultSetGenerator(ipDateObj, ipCountObj);
};

function resultSetGenerator(ipDateObj, ipCountObj) {
	// Result Set Generator
	var resultjson = [];
	var ipDateKeys = Object.keys(ipDateObj);

	for (var i = 0; i < ipDateKeys.length; i++) {
		var ip = ipDateKeys[i].split('__')[0];
		if (ipCountObj[ip] > 10) {
			continue;
		} else {
			var ipDatePeriods = Object.keys(ipDateObj[ipDateKeys[i]]);
			for (var p = 0; p < ipDatePeriods.length; p++) {
				resultjson.push({
					ip: ip,
					timestamp: ipDateObj[ipDateKeys[i]][ipDatePeriods[p]].timestamp,
					amount: ipDateObj[ipDateKeys[i]][ipDatePeriods[p]].amount
				});
			}	
		}
	}
	return resultjson;
}