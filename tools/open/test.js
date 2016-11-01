/**
 * @module lints files and applies fixes.
 */
const { run } = require('../libs');


/**
 * manages tasks of: regenerating docs.
 */
run('npm', ['run', 'doc:once'])
.then(() =>
  run('open', ['docs/test/index.html'])
);
