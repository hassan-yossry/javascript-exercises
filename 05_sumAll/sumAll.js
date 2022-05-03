const sumAll = function (a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    if (typeof a !== "bigint" || typeof b !== "bigint") return "ERROR";
  }
  if (a < 0 || b < 0) return "ERROR";
  if (a > b) [a, b] = [b, a];
  let sum = 0;
  for (let i = a; i <= b; i++) sum += i;
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
