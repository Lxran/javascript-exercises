const reverseString = function(string) {
  let reverse = string.split("").reverse();
  let result = "";
  for (let i = 0; i < string.length; i++) {
    result += reverse[i]
  }
  return result;
};

// Do not edit below this line
module.exports = reverseString;
