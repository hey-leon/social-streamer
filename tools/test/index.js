/**
 * @module runs tests.
 */
const { run, clean } = require('../libs');


/**
 * clean up .nyc_output
 */


/**
 *  run ava with nyc and watch.
 */
run('watch', ['npm run test:once', 'source'])
.catch(console.log);
