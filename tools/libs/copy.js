const run = require('./run');

/**
 * copy a glob to a new dir.
 *
 * @param  {String} glob the glob pattern to copy from.
 * @param  {String} dir the directory to copy the files to.
 * @returns {Promise} returns promise resolving when glob is copied.
 */
function copy(glob, dir) {
  return run('cp', ['-r', glob, dir])
}

module.exports = copy;
