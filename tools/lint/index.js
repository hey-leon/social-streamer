/**
 * @module lints files.
 */
const { run } = require('../libs');


/**
 * manages tasks of: regenerating docs.
 */
run('eslint', [
  'source/**/**.js',
  'source/**/**.jsx',
  'tools/**/**.js'
]);
