const fibonacci = function(number) {
  let temp;
  let fiboPrevious = 0;
  let fiboCurrent = 1;
  if (number==0) {
    return 0;
  }
  if (number < 0 ) {
    return "OOPS";
  }
  for (i=1; i<number; i++) {
    temp = fiboCurrent;
    fiboCurrent += fiboPrevious;
    fiboPrevious = temp;
  }
  return fiboCurrent;
};

// Do not edit below this line
module.exports = fibonacci;
