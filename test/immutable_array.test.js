/* globals describe, it */

var ImmutableArray = require('..');

describe('Immutable Array', function () {
  it('should be initialized as an empty array', function () {
    var a = new ImmutableArray();
    a.length.should.eql(0);
  });
});
