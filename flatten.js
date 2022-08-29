const flatten = function(arr) {
  let flat = [];
  const initialValue = 0;

  arr.reduce(
    (previousValue, currentValue) => {
      Array.isArray(currentValue) ? flat = flat.concat(currentValue)
        : flat.push(currentValue);
    },initialValue
  );
  return flat;
};

module.exports = flatten;