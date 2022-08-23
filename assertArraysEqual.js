const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr1, arr2) {
  console.log(eqArrays.eqArrays(arr1,arr2) ?
    `✅✅✅ Array Assertion Passed: [${arr1}] === [${arr2}]` :
    `🛑🛑🛑 Array Assertion Failed: [${arr1}] !== [${arr2}]`);
};

module.exports = {assertArraysEqual:assertArraysEqual};

// assertArraysEqual([1,2,3],["1",2,3]);