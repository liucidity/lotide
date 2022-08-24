const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  
  console.log(eqObjects.eqObjects(actual,expected) ?
    `✅✅✅ Array Assertion Passed: [${inspect(actual)}] === [${inspect(expected)}]` :
    `🛑🛑🛑 Array Assertion Failed: [${inspect(actual)}] !== [${inspect(expected)}]`);
};

module.exports = {assertObjectsEqual:assertObjectsEqual};

// assertObjectsEqual({a:1,b:2,c:3},{a:1,b:2,c:3});