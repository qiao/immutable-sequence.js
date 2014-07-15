module.exports = process.env.IMMUTABLE_SEQUENCE_TEST_COV ? 
  require('./src-cov/immutable_sequence') :
  require('./src/immutable_sequence');
