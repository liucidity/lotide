const assertArraysEqual = require('./assertArraysEqual');

const takeUntil = function(array, callback) {
  //grab items until we value in array is equal to the callback
  let output = [];

  let finished = false;
  while (!finished)
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i])) {
        console.log(callback(array[i]),i);
        finished = true;
        return output;
      }
      output.push(array[i]);
      
    }
  return output;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


// [ 1, 2, 5, 7, 2 ]
// --
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]

assertArraysEqual.assertArraysEqual(takeUntil(data1, x => x < 0),[ 1, 2, 5, 7, 2 ]);
assertArraysEqual.assertArraysEqual(takeUntil(data2, x => x === ','),[ 'I\'ve', 'been', 'to', 'Hollywood' ]);