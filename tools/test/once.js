/**
 * @module run tests once.
 */
const { run, clean } = require('../libs');


/**
 * performs the task of:
 *  - run ava with nyc.
 *  - clean up tmp direrctories.
 */
run('nyc', ['ava', 'source/**/spec.js'])
.then(status => {
  process.exitCode = status;
  return clean('.nyc_output');
})
.catch(console.log);
