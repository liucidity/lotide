// import our assertEqual module
// const assertEqual = require('./assertEqual');

const eqArrays = function(arr1,arr2) {
  //check if arrays are equal length
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    //check individual elements
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  }
  return true;
};


module.exports = {eqArrays:eqArrays};

// assertEqual.assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
// assertEqual.assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

// assertEqual.assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
// assertEqual.assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);// => false

// assertEqual.assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
