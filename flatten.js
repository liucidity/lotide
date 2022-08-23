const assertArrEq = require('./assertArraysEqual');

const flatten = function(arr) {
  let flat = [];
  const initialValue = 0;

  arr.reduce(
    (previousValue, currentValue) => {
      Array.isArray(currentValue) ? flat = flat.concat(currentValue)
        : flat.push(currentValue);
    },initialValue
  );

  //[[1,2]] -> [1,2]
  console.log('flatArray:', flat)

  return flat;
};

assertArrEq.assertArraysEqual(flatten([1, 2, [[3, 4]], 5, [6]]), [1, 2, 3, 4, 5, 6]);

//keep track of variable
//line 3 pass paramater 