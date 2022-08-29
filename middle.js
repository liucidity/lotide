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

module.exports = middle;