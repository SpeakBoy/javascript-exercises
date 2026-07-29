const add = function(x, y) {
  return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(nums) {
	return nums.reduce((acc, curr) => add(acc, curr), 0);
};

const multiply = function(nums) {
  return nums.reduce((acc, curr) => acc * curr, 1);
};

const power = function(x, y) {
	return x ** y;
};

const factorial = function(x) {
	let total = 1;
  let curr = x;
  while (curr > 1)
  {
    total *= curr;
    curr--;
  }
  return total;
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
