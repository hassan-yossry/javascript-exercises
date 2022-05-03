const removeFromArray = function (arr, ...vals) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    let addit = true;
    for (let j = 0; j < vals.length; j++)
      if (vals[j] === arr[i]) {
        addit = false;
        break;
      }
    if (addit) res = [...res, arr[i]];
  }
  return res;
};
// Do not edit below this line
module.exports = removeFromArray;
