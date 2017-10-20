const componentGenerator = require('./component/index.js');
const containerGenerator = require('./container/index.js');


module.exports = function (plop) {
	// controller generator
	plop.setGenerator('container', containerGenerator);
	plop.setGenerator('component', componentGenerator);

	//helpers
	plop.addHelper('curly', (object, open) => (open ? '{' : '}'));
	
}; 