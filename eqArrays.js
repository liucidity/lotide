// import our assertEqual module
// const assertEqual = require('./assertEqual');

const assertEqual = require("./assertEqual");

const eqArrays = function(arr1,arr2) {
  //check if arrays are equal length
  if (arr1.length !== arr2.length) {
    return false;
  }
  //check individual elements
  for (let i = 0; i < arr1.length; i++) {
    if (!Array.isArray(arr1[i]) && !Array.isArray(arr2[i])) {
      // console.log(`${i} is not an array`);
      // console.log(Array.isArray(arr1[i]),Array.isArray(arr2[i]));
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    // console.log(`${i} is an array`);
    if (!eqArrays(arr1[i],arr2[i])) return false;
  }
  
  return true;
};


module.exports = {eqArrays:eqArrays};

eqArrays([[2, 3], [4]], [[2, 3], [4]], true); // => true

eqArrays([[2, 3], [4]], [[2, 3], [4, 5]],false);// => false
eqArrays([[2, 3], [4]], [[2, 3], 4], false); // => false
assertEqual.assertEqual(eqArrays([[[[2, 3]], [4]]], [[[[2, 3]], [4]]]), true);
assertEqual.assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]),false);
assertEqual.assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]),false);

assertEqual.assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
// assertEqual.assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

// assertEqual.assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
// assertEqual.assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);// => false

// assertEqual.assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
