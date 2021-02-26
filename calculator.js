function add (a,b) {
	return a+b;
}

function subtract (a,b) {
	return a-b;
}

function sum (a) {
	return a.reduce((a,b) => a+b, 0);
	
}

function multiply (a,b) {
	return a*b;
}

function power(a,b) {
	return a**b;
}

function factorial(a) {
	let count = 1;
	while (a > 0) {
		count *= a;
		a -= 1;
	}
	return count;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}