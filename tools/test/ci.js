/**
 * @module runs test once without coverage
 */
const { run } = require('../libs');


/**
 * performs the task of:
 *  - run ava with nyc.
 *  - clean up tmp direrctories.
 */
run('ava', ['source/**/spec.js'])
.then(
  status => process.exitCode = status
)
.catch(console.log);
