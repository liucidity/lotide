const assertEqual = require('./assertEqual');

const findKeyByValue = function(object, value) {
  for (let key in object) {
    if (object[key] === value) {
      return key;
    }
  }
};

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual.assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual.assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);