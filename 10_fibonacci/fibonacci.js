const fibonacci = function (n) {
  if (n < 0) return "OOPS";
  const obj = Array.from({ length: +n }).reduce(
    (val) => {
      return { cur: val.prev + val.cur, prev: val.cur };
    },
    { cur: 0, prev: 1 }
  );
  return obj.cur;
};
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));
console.log(fibonacci(7));
console.log(fibonacci(8));
console.log(fibonacci(9));
// Do not edit below this line
module.exports = fibonacci;
