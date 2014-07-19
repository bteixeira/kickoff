eval(require('fs').readFileSync(__dirname+'/help.js').toString());
/* * * * */

log('\nHello User!');

setTimeout(function () {
	log('\nI am Bruno, The Awesome!');
	
	setTimeout(function () {
		log('What is your name?');
		var name = readLine();
		if (
