const fibonacci = function (index) {
  let fibonacci = [1, 1];
  index = Number.parseInt(index);
  if (index < 0) return "OOPS";
  if (index === 1 || index === 2) return 1
  if (index >= 3) {
    for (let i = index; i > fibonacci.length; i--) {
      let num1 = fibonacci[-1];
      let num2 = fibonacci[-2];
      let newNum = num1 + num2;
      fibonacci.push(newNum);
    }
    return fibonacci[-1];
  }
};

// Do not edit below this line
module.exports = fibonacci;
