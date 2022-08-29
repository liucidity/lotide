// import our assertEqual module
// const assertEqual = require('./assertEqual');

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
    } else if (!eqArrays(arr1[i],arr2[i])) return false;
  }
  return true;
};

module.exports = eqArrays;
