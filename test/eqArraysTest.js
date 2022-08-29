const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');
const { assert } = require('chai');
const eqObjects = require('../eqObjects');

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

describe("#eqArrays", () => {

  const arr1 = [[2, 3], [4]];
  const arr2 = [[2, 3], [4]];
  const arr3 = [[2, 3], [4]];
  const arr4 = [[2, 3], [4, 5]];
  const arr5 = [[2, 3], [4]];
  const arr6 = [[2, 3], 4];
  it(`returns true comparing ${arr1} and ${arr2}`, () => {
    assert.isTrue(eqObjects(arr1,arr2));
  });
  it(`returns true comparing ${arr3} and ${arr4}`, () => {
    assert.isFalse(eqObjects(arr3,arr4));
  });
  it(`returns true comparing ${arr5} and ${arr6}`, () => {
    assert.isFalse(eqObjects(arr5,arr6));
  });
});