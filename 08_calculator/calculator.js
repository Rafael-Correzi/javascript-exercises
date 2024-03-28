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
  let sum = 0;
  for (let n of arr){
    sum += n;
  }
  return sum;
	
};

const multiply = function(arr) {
  let multiplication = 1;
  for (let n of arr) {
    multiplication *= n;
  }
  return multiplication;

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
