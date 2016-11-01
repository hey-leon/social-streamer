/**
 * @module manages the task of building the app.
 */
const { run } = require('../libs');


/**
 * @type {String} [directory='build'] directory the build directory.
 */
const directory = process.argv[2] || 'build';


/**
 * performs tasks of: rebuild modules.
 */
run('babel', [
  '-q', 'source', '-d', directory, '-i', '**/spec.js',
])
.catch(console.log);
