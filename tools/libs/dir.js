const run = require('./run');


/**
 * makes a dir, and its parents if !parents.
 *
 * @param  {type} directory the dir structure to create. 
 * @returns {Promise} returns a promise resolving when dir/s are made.
 */
function dir(directory) {
  return run('mkdir', ['-p', directory]);
}

module.exports = dir;
