
const assertArraysEqual = require('./assertArraysEqual');

const without = function(source, itemsToRemove) {
  let output = [...source];

  for (let item of itemsToRemove) {
    // console.log(`output:${output}`)
    if (output.includes(item)) {
      output.splice(output.indexOf(item),1);
    }
  }
  return output;
};

without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]



//true test cases
assertArraysEqual.assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]),["1", "2"]);
assertArraysEqual.assertArraysEqual(without([1, 2, 3], [1]),[2, 3]);
assertArraysEqual.assertArraysEqual(without(['a', 'b', 'c'], ['b']),['a','c']);
assertArraysEqual.assertArraysEqual(without([1, 2, 3], [3]),[1, 2]);
assertArraysEqual.assertArraysEqual(without([1, 2, 3], [1,3]),[2]);
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual.assertArraysEqual(words, ["hello", "world", "lighthouse"]);

//false cases
assertArraysEqual.assertArraysEqual(without(["1", "2", "3"], [1, 2, "33"]),["1", "2"]);
assertArraysEqual.assertArraysEqual(without([1, 2, 3], [2]),[2, 3]);
assertArraysEqual.assertArraysEqual(without(['a', 'b', 'c'], ['a']),['a','c']);
assertArraysEqual.assertArraysEqual(without([1, 2, 3], [7]),[1, 2]);
assertArraysEqual.assertArraysEqual(without([1, 2, 3], [12,3]),[2]);
