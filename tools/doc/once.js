/**
 * @module manages the task fo generating esdocs. (basically thin cmd wrapper).
 */
const { run } = require('../libs');


/**
 * manages tasks of: regenerating docs.
 */
run('npm', ['run', 'test:once'])
.then(() =>
  run('esdoc', [
    '-c',
    `${__dirname}/esdocs.json`,
  ])
);
