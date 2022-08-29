const eqArrays = require('./eqArrays.js');
const assertEqual = require('./assertEqual');

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) return false;
  for (let key in object1) {
    //check if Array, if arrays !== return false
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key],object2[key])) {
        return false;
      }
    } else if (typeof object1[key] === "object" && typeof object2[key] === "object") {
      if (!eqObjects(object1[key],object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }

  }
  return true;
};
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }),false);


module.exports = eqObjects;

