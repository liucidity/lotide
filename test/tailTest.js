const assertEqual = require('../assertEqual');
const tail = require('../tail');


//Test cases
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(tail(words).length,2);

// //An array with only one element should yield an empty array for its tail
// console.log(tail([1]));
// // An empty array should yield an empty array for its tail
// console.log(tail([]));