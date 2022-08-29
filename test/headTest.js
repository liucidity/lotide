const assertEqual = require('../assertEqual.js');
const head = require('../head.js');
//Test Cases
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([5,6,7]), 5);
assertEqual(head([5]), 5);
// An empty array should yield undefined as its head
assertEqual(head([]), undefined);
//other tests
// An array with only one element should still yield that one element as its head