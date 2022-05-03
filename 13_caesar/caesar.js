const shiftChar = function ([up, lower], code, stepd) {
  let step = stepd;
  const num = up + 1 - lower;
  if (stepd < 0) step = (stepd % num) + num;
  if (stepd >= 0) step = stepd % num;
  if (step >= 0) return ((code + step - lower) % (up + 1 - lower)) + lower;
  return code;
};
// A B C D
// 0 1 2 3
// -1 -> -1+4 ->3

const caesar = function (string, step) {
  return string
    .split("")
    .map((itm) => itm.charCodeAt(0))
    .map((itm) => {
      const unia = "a".charCodeAt(0);
      const uniz = "z".charCodeAt(0);
      const uniA = "A".charCodeAt(0);
      const uniZ = "Z".charCodeAt(0);

      let val = itm;

      if (itm >= unia && itm < uniz) val = shiftChar([uniz, unia], itm, step);

      if (itm >= uniA && itm <= uniZ) val = shiftChar([uniZ, uniA], itm, step);

      return val;
    })
    .map((itm) => String.fromCharCode(itm))
    .join("");
};
console.log(caesar("Mjqqt, Btwqi!", -5));
// Do not edit below this line
module.exports = caesar;
