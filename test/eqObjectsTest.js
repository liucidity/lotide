// assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }),true);// => true
// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }),false);
// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }),false);



// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// eqObjects(ab, ba); // => true
// assertEqual.assertEqual(eqObjects(ab,ba),true);

// const abc = { a: "1", b: "2", c: "3" };
// eqObjects(ab, abc); // => false
// assertEqual.assertEqual(eqObjects(ab,abc),false);


// const cd = { c: "1", d: ["2", 3] };i
// const dc = { d: ["2", 3], c: "1" };
// eqObjects(cd, dc); // => true
// assertEqual.assertEqual(eqObjects(cd,dc),true);

// const cd2 = { c: "1", d: ["2", 3, 4] };
// eqObjects(cd, cd2); // => false
// assertEqual.assertEqual(eqObjects(cd,cd2),false);



// assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }),true);// => true
// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }),false);
// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }),false);

const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe("#eqObjects", () => {
  const cd = { c: "1", d: ["2", 3] };
  const dc = { d: ["2", 3], c: "1" };
  const za = { a: { z: 1 }, b: 2 };
  const az = { a: { z: 1 }, b: 2 };
  const abyz = { a: { y: 0, z: 1 }, b: 2 };
  const ab = { a: 1, b: 2 };


  it(`returns true from comparing ${cd} and ${dc}`, () => {
    assert.isTrue(eqObjects(cd,dc));
  });
  it(`returns true from comparing ${az} and ${za}`, () => {
    assert.isTrue(eqObjects(az,za));
  });
  it(`returns false from comparing ${abyz} and ${ab}`, () => {
    assert.isFalse(eqObjects(abyz,ab));
  });

});