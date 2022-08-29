const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr1, arr2) {
  console.log(eqArrays(arr1,arr2) ?
    `✅✅✅ Array Assertion Passed: [${arr1}] === [${arr2}]` :
    `🛑🛑🛑 Array Assertion Failed: [${arr1}] !== [${arr2}]`);
};
module.exports = assertArraysEqual;

