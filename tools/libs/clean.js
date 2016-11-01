const run = require('./run');


/**
 * deletes all directories/files matching the glob patterns.
 * @param  {String} glob to match files to deletexs.
 * @returns {Promise} returns a promise of task completion
 */
function clean(glob) {
  return run('rm', ['-rf', glob]);
}

module.exports = clean;
