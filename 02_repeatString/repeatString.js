const repeatString = function(x, y) {
  let str = '';
  if (y<0) {
    return 'ERROR';
  }
  for (i = 0; i < y; i++) {
    str += x;
  }
  return str;

};

// Do not edit below this line
module.exports = repeatString;
