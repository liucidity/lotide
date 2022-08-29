const assertArrEq = require('./assertArraysEqual');

//flatten function that passes in array to flatten, and a tempCurrentArray
const flatten = function(arr, currentArray) {
  currentArray = [];
  let flat = [];
  const initialValue = 0;
  //reduce to go through every value in array
  // if (!Array.isArray(arr)){
  //   return flat;
  // }

  arr.reduce(
    (previousValue, currentValue) => {
      console.log('arr:',arr)
      console.log('currentValue:', currentValue)
      //if currentValue is an array, recall flatten
      Array.isArray(currentValue) ? flatten(currentValue,currentArray)
        : flat.push(currentValue); console.log('flatArray:', flat)
    },initialValue,

  );

  flat = flat.concat(currentArray);
  console.log('currentArray', currentArray)
  
  return flat;
};

assertArrEq.assertArraysEqual(flatten([1, 2, [[3, 4]], 5, [6]]), [1, 2, 3, 4, 5, 6]);

//keep track of variable
//line 3 pass paramater array



function flatten(arr) {
  return arr.reduce((acc, cur) => acc.concat(Array.isArray(cur) ? flatten(cur) : cur),[]);
};


const arr = [1,2,[3,[4,[5]]]];

const flattened = flatten(arr);
console.log(flattened);


const arr = [1, 2, [3, 4, [5, 6]]];
// to enable deep level flatten use recursion with reduce and concat
function flatDeep(arr, d = 1) {
   return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
                : arr.slice();
};
flatDeep(arr, Infinity);
// [1, 2, 3, 4, 5, 6]
/*
  Output: [ 1, 2, 3, 4, 5 ]
*/
