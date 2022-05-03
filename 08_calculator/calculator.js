const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((prev, curr) => prev + curr, 0);
};

const multiply = function (arr) {
  return arr.reduce((prev, curr) => prev * curr, 1);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (n) {
  return Array.from({ length: n }, (_, idx) => idx + 1).reduce(
    (prev, itm) => prev * itm,
    1
  );
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
