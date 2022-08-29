//add our previous assertEqual module to be used to check equality
const assertEqual = require('./assertEqual.js');

//create head function that takes in array and returns first element(head) of array
const head = function(array) {
  return (array[0]);
};

module.exports = head;