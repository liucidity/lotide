//add our previous assertEqual module to be used to check equality
const assertEqual = require('./assertEqual.js');

//create head function that takes in array and returns first element(head) of array
const head = function(array) {
  return (array[0]);
};



//Test Cases
assertEqual.assertEqual(head([5,6,7]), 5);
assertEqual.assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

//other tests
// An array with only one element should still yield that one element as its head
assertEqual.assertEqual(head([5]), 5);

// An empty array should yield undefined as its head
assertEqual.assertEqual(head([]), 5);