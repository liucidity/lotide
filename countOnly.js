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

module.exports = countOnly;
