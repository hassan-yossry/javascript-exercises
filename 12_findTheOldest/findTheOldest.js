const findTheOldest = function (arr) {
  return arr
    .map((itm) => {
      const { name, yearOfBirth: start, yearOfDeath: end = 2022 } = itm;
      return { name, age: end - start };
    })
    .sort((a, b) => -a.age + b.age)[0];
};

// Do not edit below this line
module.exports = findTheOldest;
