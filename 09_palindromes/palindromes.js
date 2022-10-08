const palindromes = function (string) {
  let normalized = string.replace(/[^\w\s\']|_/g, "").replace(/\s/g, "").toLowerCase();
  let array1 = normalized.split("");
  let array2 = normalized.split("").reverse();
  for (let i = 0; i < normalized.length; ++i) {
    if (array1[i] !== array2[i]) return false;
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
