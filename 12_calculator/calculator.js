const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  let sum = 0;
  for (let arr of array) {
    sum += arr;
  }
  return sum;
};

const multiply = function(array) {
  let mult = 1;
  for (let arr of array) {
    mult *= arr;
  }
  return mult;
};

const power = function(num, power) {
	return num ** power;
};

const factorial = function(num) {
	let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact *= i;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
