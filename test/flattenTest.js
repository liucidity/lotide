const assert = require('chai').assert;

const flatten = require('../flatten');

describe("#Flatten", () => {
  it("reduces [[a,b]] to [a,b]", () => {
    assert.deepEqual(flatten([['a','b']]),['a','b']);
  });
});