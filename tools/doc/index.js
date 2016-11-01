/**
 * @module manages the task fo generating esdocs. (basically thin cmd wrapper).
 */
const { run } = require('../libs');


/**
 * manages tasks of: regenerating docs.
 */
run('watch', ['npm run doc:once', 'source']);
