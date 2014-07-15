/* globals describe, it */

var ImmutableSequence = require('..');

describe('Immutable Sequence', function () {
  it('should construct an empty immutable sequence when given an empty array', function () {
    var s = ImmutableSequence.fromArray([]);
    s.length.should.eql(0);
  });

  it('should construct an immutable sequence containing initial elements', function () {
    var s = ImmutableSequence.fromArray([1, 2, 3]);
    s.length.should.eql(3);
  });

  it('should be able to push an element to the end', function () {
    var s = ImmutableSequence.fromArray([]);
    s.push(1);
    s.length.should.eql(1);
  });

  it('should be able to unshift an element to the front', function () {
    var s = ImmutableSequence.fromArray([]);
    s.unshift(1);
    s.length.should.eql(1);
  });

  it('should be able get the element at a certain position', function () {
    var s = ImmutableSequence.fromArray([1, 2, 3]);
    s.get(0).should.be(1);
    s.get(1).should.be(2);
    (function () {
      s.get(3);
    }).should.throw();
  });

  it('should be able to split at a certain position', function () {
    var s = ImmutableSequence.fromArray([1, 2, 3]);
    var split = s.splitAt(1);
    split[0].length.should.eql(2);
    split[1].length.should.eql(1);
  });
});
