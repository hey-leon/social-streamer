/**
 * @module lints files and applies fixes.
 */
const { run } = require('../libs');


/**
 * manages tasks of: regenerating docs.
 */
 run('eslint', [
   '--fix',
   'source/**/**.js',
   'source/**/**.jsx',
   'tools/**/**.js'
 ]);
