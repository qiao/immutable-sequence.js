/* globals describe, it */

var ImmutableArray = require('..');

describe('Immutable Array', function () {
  it('should be initialized as an empty array', function () {
    var a = new ImmutableArray();
    a.length.should.eql(0);
  });

  it('should be initialized with an array', function () {
    var a = new ImmutableArray([1, 2, 3]);
    a.length.should.eql(3);
  });

  it('should be able to push an element to the end', function () {
    var a = new ImmutableArray();
    a.push(1);
    a.length.should.eql(1);
  });

  it('should be able to unshift an element to the front', function () {
    var a = new ImmutableArray();
    a.unshift(1);
    a.length.should.eql(1);
  });

  it('should be able get the element at a certain position', function () {
    var a = new ImmutableArray([1, 2, 3]);
    a.get(0).should.be(1);
    a.get(1).should.be(2);
    (function () {
      a.get(3);
    }).should.throw();
  });

  it('should be able to split at a certain position', function () {
    var a = new ImmutableArray([1, 2, 3]);
    var split = a.splitAt(1);
    split[0].length.should.eql(2);
    split[1].length.should.eql(1);
  });
});
