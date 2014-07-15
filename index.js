module.exports = process.env.TEST_COV ? 
  require('./src-cov/immutable_sequence') :
  require('./src/immutable_sequence');
