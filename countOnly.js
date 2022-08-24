const assertEqual = require('./assertEqual');

const countOnly = function(allItems, itemsToCount) {

  let returnObj = {};

  for (let item of allItems) {
    if (itemsToCount[item]) {
      if (returnObj[item]) {
        returnObj[item] += 1;
      } else {
        returnObj[item] = 1;
      }
    }
  }

  return returnObj;
};


console.log(countOnly(['a','b','c'], {a:true, b:true, c:false}));

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual.assertEqual(result1["Jason"], 1);
assertEqual.assertEqual(result1["Karima"], undefined);
assertEqual.assertEqual(result1["Fang"], 2);
assertEqual.assertEqual(result1["Agouhanna"], undefined);