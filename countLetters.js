const assertEqual = require('./assertEqual');

const countLetters = function(sentence) {
  let result = {};
  const str = sentence.replace(/\s/g,'');
  for (const char of str) {
    result[char] = result[char] + 1 || 1;
  }
  return result;
};

console.log(countLetters('hello'));
