const { expect } = require('chai');
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {
  it("returns [1] from 'hello'.e", () => {
    expect((letterPositions('hello').e)).to.deep.equal([1]);
  });
  it("returns [2,3] from 'hello'.l", () => {
    expect((letterPositions('hello').l)).to.deep.equal([2,3]);
  });
});