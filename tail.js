//add our previous assertEqual module to be used to check equality
const assertEqual = require('./assertEqual.js');

//create tail function that does not modify original array, returns array with first element removed
const tail = function(array) {
  const tailArray = array.slice(1);
  return tailArray;
};

module.exports = tail;