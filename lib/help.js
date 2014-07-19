var log = console.log;

var readLine = function () {
	var fs = require('fs');
	var buffer = new Buffer(1024);
	var bytes;
	var fd;
	var result;
	if (process.platform === 'win32') {
		fd = process.stdin.fd
	} else {
		fd = fs.openSync('/dev/stdin', 'rs');
	}
	
	bytes = fs.readSync(fd, buffer, 0, 1024);
	buffer = buffer.slice(0, bytes); // TODO if more than 1024 bytes available the remaining will still be in sdinfs.closeSync(fd);
	result = buffer.toString();
	result = /(.*)[\n\r]*/.exec(result)[1];
	
	if (process.platform !== 'win32') {
		fs.closeSync(fd);
	}
	
	return result;
}

var readNumber = function () {
	var line = readLine();
	var number = parseFloat(line);
	if (isNaN(number)) {
		log('\n\tOh Noes! This is not a number!\n');
		process.exit(1);
	}
	return number;
}

var E = Math.E;
var LN10 = Math.LN10;
var LN2 = Math.LN2;
var LOG2E = Math.LOG2E;
var LOG10E = Math.LOG10E;
var PI = Math.PI;
var SQRT1_2 = Math.SQRT1_2;
var SQRT2 = Math.SQRT2;
var random = Math.random;
var abs = Math.abs;
var acos = Math.acos;
var asin = Math.asin;
var atan = Math.atan;
var ceil = Math.ceil;
var cos = Math.cos;
var exp = Math.exp;
var floor = Math.floor;
//var log = Math.log;
var round = Math.round;
var sin = Math.sin;
var sqrt = Math.sqrt;
var tan = Math.tan;
var atan2 = Math.atan2;
var pow = Math.pow;
var max = Math.max;
var min = Math.min;

