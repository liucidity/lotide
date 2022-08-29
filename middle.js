const assertArraysEqual = require ('./assertArraysEqual');

const middle = function(array) {
  const middleIndex = Math.floor(array.length / 2);

  if (array.length <= 2) {
    return [];
  }

  if (array.length % 2 === 0) {
    return [array[middleIndex - 1], array[middleIndex]];
  }

  return [array[middleIndex]];
};

//Tests
assertArraysEqual.assertArraysEqual(middle([1,2,3,4,5,6,7,8,9]), [5]);
assertArraysEqual.assertArraysEqual(middle([1,2,3,4,5,6]), [3,4]);
assertArraysEqual.assertArraysEqual(middle([2,4]), []);
assertArraysEqual.assertArraysEqual(middle([1]), []);
