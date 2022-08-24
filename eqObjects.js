const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  let result = false;
  if (Object.keys(object1).length === Object.keys(object2).length) {
    
    for (let key in object1) {

      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        result = eqArrays.eqArrays(object1[key],object2[key]);

      } else {
        
        if (object1[key] === object2[key]) {
          result = true;
        }
      }
    }
  }
  return result;
};

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// eqObjects(ab, ba); // => true
// assertEqual.assertEqual(eqObjects(ab,ba),true);

// const abc = { a: "1", b: "2", c: "3" };
// eqObjects(ab, abc); // => false
// assertEqual.assertEqual(eqObjects(ab,abc),false);


// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// eqObjects(cd, dc); // => true
// assertEqual.assertEqual(eqObjects(cd,dc),true);

// const cd2 = { c: "1", d: ["2", 3, 4] };
// eqObjects(cd, cd2); // => false
// assertEqual.assertEqual(eqObjects(cd,cd2),false);

module.exports = {eqObjects:eqObjects};