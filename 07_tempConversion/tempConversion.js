const ftoc = function(temp) {
  let f = ((temp - 32) * (5/9));
  if (Number.isInteger(f)) {
    return f
  }
  return Number.parseFloat(f.toFixed(1))
};

const ctof = function(temp) {
  let c = (temp * (9/5) + 32);
  if (Number.isInteger(c)) {
    return c
  }
  return Number.parseFloat(c.toFixed(1))
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
