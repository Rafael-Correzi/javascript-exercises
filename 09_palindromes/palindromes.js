const palindromes = function (str) {
  return str.toLowerCase().replace(/[^\w]|_/g, '').split('').reverse().join('') === str.toLowerCase().replace(/[^\w]|_/g, '');

};

// Do not edit below this line
module.exports = palindromes;
