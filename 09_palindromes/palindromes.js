const palindromes = function (str) {
  str.toLowerCase().replace(/\W/, "");
  return str
    .toLowerCase()
    .replace(/\W/g, "")
    .split("")
    .every((_, idx, arr) => arr[arr.length - idx - 1] === arr[idx]);
};
console.log(palindromes("racecar"));
// Do not edit below this line
module.exports = palindromes;
