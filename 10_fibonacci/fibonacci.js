const fibonacci = function (index) {
  let fibonacci = [1, 1];
  Number.parseInt(index);
  if (index < 0) return "OOPS";
  if (index === 1 || index === 2) return 1
  for (let i = index; i > 2; i--) {
    let newNum = fibonacci.at(-1) + fibonacci.at(-2);
    fibonacci.push(newNum);
  }
  return fibonacci.at(-1);
};

// Do not edit below this line
module.exports = fibonacci;
