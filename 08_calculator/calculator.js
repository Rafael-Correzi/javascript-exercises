const add = function(...numbersSummed) {
  let sum = 0;
  for (let n of numbersSummed){
    sum += n;
  }
  return sum;
	
};

const subtract = function(...numbersSubtracted) {
  let subtraction = numbersSubtracted[0]*2;
  for (let n of numbersSubtracted){
    subtraction -= n;
  }
  return subtraction
	
};

const sum = function(arr) {
  return arr.reduce((sum, current) => sum + current, 0);
	
};

const multiply = function(arr) {
  return arr.reduce((multiplied, current) => multiplied * current, 1 );

};

const power = function(base, exponent) {
  let result = 1;
  for (i = 1; i <= exponent; i++) {
    result *= base;
  }
  return result;
	
};

const factorial = function(number) {
  if (number < 0) {
    return('ERROR');
  }
  let result = 1;
  for(i = number; i > 0; i--) {
    result *= i;
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
