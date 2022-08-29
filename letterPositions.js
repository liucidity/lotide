const assertArraysEqual = require('./assertArraysEqual');

const letterPositions = function(sentence) {
  const results = {};


  //results[char] push index

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === ' ') i++;

    let char = sentence[i];
    if (results[char] === undefined) {
      results[char] = [];
    }
    results[char].push(i);
    // results[char].push[i];
  }
  return results;
};

module.exports = letterPositions;

// assertArraysEqual(letterPositions('hello').h,[0]);
// assertArraysEqual(letterPositions('hello').e,[1]);
// assertArraysEqual(letterPositions('hello').l,[2,3]);
// assertArraysEqual(letterPositions('hello').o,[4]);


// console.log(letterPositions("lighthouse in the house"));