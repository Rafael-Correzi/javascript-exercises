const removeFromArray = function(arr, ...removeValue) {
  for (let i of removeValue) {
    if (arr.includes(i)) {
     arr.splice(arr.indexOf(i), 1);
    }
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
