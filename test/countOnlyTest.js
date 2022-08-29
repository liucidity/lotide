const assert = require('chai').assert;
const { expect } = require('chai');
const countOnly = require('../countOnly');


describe("#countOnly", () => {
  it("returns {a:2} from ['a','b','c','a',d','c'] and {a:true}",() => {
    expect(countOnly(['a','b','c','a','d','c'], {a:true})).to.deep.include({a:2});
  });
});