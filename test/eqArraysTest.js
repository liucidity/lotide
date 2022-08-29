const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

eqArrays([[2, 3], [4]], [[2, 3], [4]], true); // => true
eqArrays([[2, 3], [4]], [[2, 3], [4, 5]],false);// => false
eqArrays([[2, 3], [4]], [[2, 3], 4], false); // => false
assertEqual(eqArrays([[[[2, 3]], [4]]], [[[[2, 3]], [4]]]), true);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]),false);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]),false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true

// assertEqual.assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false
// assertEqual.assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
// assertEqual.assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);// => false

// assertEqual.assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
