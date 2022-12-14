const assertArraysEqual = require('./assertArraysEqual');

const takeUntil = function(array, callback) {
  //grab items until we value in array is equal to the callback
  let output = [];

  let i = 0;
  while (!callback(array[i])) {
    output.push(array[i]);
    i++;
  }
  return output;
};

module.exports = takeUntil;

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);


// // [ 1, 2, 5, 7, 2 ]
// // --
// // [ 'I\'ve', 'been', 'to', 'Hollywood' ]

// assertArraysEqual(takeUntil(data1, x => x < 0),[ 1, 2, 5, 7, 2 ]);
// assertArraysEqual(takeUntil(data2, x => x === ','),[ 'I\'ve', 'been', 'to', 'Hollywood' ]);