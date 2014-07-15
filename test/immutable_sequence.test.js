/* globals describe, it */

var ImmutableSequence = require('..');

describe('Immutable Sequence', function () {
  it('should construct an empty immutable sequence when given an empty array', function () {
    var s = ImmutableSequence.fromArray([]);
    s.size().should.eql(0);
  });

  it('should construct an immutable sequence containing initial elements', function () {
    var s = ImmutableSequence.fromArray([1, 2, 3]);
    s.size().should.eql(3);
  });

  it('should be able to get the first element', function () {
    var s = ImmutableSequence.fromArray([]);
    (s.peekFirst() === null).should.be.true;

    s = ImmutableSequence.fromArray([1, 2, 3]);
    s.peekFirst().should.equal(1);
  });

  it('should be able to get the last element', function () {
    var s = ImmutableSequence.fromArray([]);
    (s.peekLast() === null).should.be.true;

    s = ImmutableSequence.fromArray([1, 2, 3]);
    s.peekLast().should.equal(3);
  });

  it('should be able to add an element to the end', function () {
    var s = ImmutableSequence.fromArray([]);
    s = s.addLast(1);
    s.size().should.eql(1);
  });

  it('should be able to add an element to the front', function () {
    var s = ImmutableSequence.fromArray([]);
    s = s.addFirst(1);
    s.size().should.eql(1);
  });

  it('should be able get the element at a certain position', function () {
    var s = ImmutableSequence.fromArray([1, 2, 3]);
    s.get(0).should.eql(1);
    s.get(1).should.eql(2);
  });

  it('should throw an error when the index is out of range', function () {
    var s = ImmutableSequence.fromArray([]);
    (function () {
      s.get(0);
    }).should.throw();

    s = ImmutableSequence.fromArray([1, 2, 3]);
    (function () {
      s.get(3);
    }).should.throw();
  });

  it('should be able to remove an element from the front', function () {
    var s = ImmutableSequence.fromArray([1, 2, 3]);
    s = s.removeFirst();
    s.size().should.equal(2);
    s.peekFirst().should.equal(2);
    s.peekLast().should.equal(3);
  });

  it('should be able to remove an element from the end', function () {
    var s = ImmutableSequence.fromArray([1, 2, 3]);
    s = s.removeLast();
    s.size().should.equal(2);
    s.peekFirst().should.equal(1);
    s.peekLast().should.equal(2);
  });

  it('should be able to split at a certain position', function () {
    var s = ImmutableSequence.fromArray([1, 2, 3]);
    var split = s.splitAt(1);
    split[0].size().should.eql(1);
    split[1].size().should.eql(2);
  });
});
