eval(require('fs').readFileSync(__dirname+'/help.js').toString());
/* * * * */

log('\nHello User!');

var TIME = 1000;

setTimeout(function () {
	log('\nI am Bruno, The Awesome!');
	
	setTimeout(function () {
		log('What is your name?');
		var name = readLine();
		if (name.toLowerCase().indexOf('bruno') !== -1) {
			log('Oh my god! You\'re Bruno too?? What are the odds? You must be amazingly awesome as well!');
		} else if (name.toLowerCase().indexOf('anna') !== -1) {
			log('Really? Well that\'s quite a kinky name isn\'t it?');
		} else {
			log('Oh what a nice name.');
		}
	}, TIME);
}, TIME);
