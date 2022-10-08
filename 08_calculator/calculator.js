const add = function(num1, num2) {
	return num1 + num2
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(array) {
	if (array.length < 1) {
    return 0
  }
  let result = array.reduce((previousValue, currentValue) => previousValue + currentValue);
  return result
};

const multiply = function(nums) {
  let result = nums.reduce((a, b) => a * b, 1);
  return result 
};

const power = function(base, power) {
	let result = base ** power;
  return result
};

const factorial = function(num) {
  let result = num;
  if (num === 0 || num === 1) 
    return 1; 
  while (num > 1) { 
    num--;
    result *= num;
  }
  return result;
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
