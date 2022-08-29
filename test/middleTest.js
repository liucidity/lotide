const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns [5] for [1,2,3,4,5,6,7,8,9]", () => {
    assert.deepEqual(middle([1,2,3,4,5,6,7,8,9]), [5]);
  });
  it("returns [3,4] for [1,2,3,4,5,6]", () => {
    assert.deepEqual(middle([1,2,3,4,5,6]), [3,4]);
  });
  it("returns [] for [2,4]", () => {
    assert.deepEqual(middle([2,4]), []);
  });
  it("returns [] for [1]", () => {
    assert.deepEqual(middle([1]), []);
  });
});