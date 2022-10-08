const sumAll = function(start, end) {
  let numbers = [];
  if (start < 0 || end < 0 || !Number.isInteger(start) || !Number.isInteger(end)) {
    return "ERROR"
  } else {
    for (let i = 0; i <= Math.max(start, end) - Math.min(start,end); i++) {
      numbers.push(Math.min(start, end) + i)
    }
  }
  let result = numbers.reduce((previousValue, currentValue) => previousValue + currentValue);
  return result

};

// Do not edit below this line
module.exports = sumAll;
