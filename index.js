module.exports = process.env.TEST_COV ? 
  require('./src-cov/immutable_array') :
  require('./src/immutable_array');
