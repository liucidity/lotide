//add our previous assertEqual module to be used to check equality
const assertEqual = require('./assertEqual.js');

//create tail function that does not modify original array, returns array with first element removed
const tail = function(array) {
  const tailArray = array.slice(1);
  return tailArray;
};

//Test cases
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual.assertEqual(words.length,3);

//An array with only one element should yield an empty array for its tail
console.log(tail([1]));
// An empty array should yield an empty array for its tail
console.log(tail([]));