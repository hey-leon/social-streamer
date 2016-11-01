/**
 * this module is used for developing and runs the webpac dev server, connected
 * to webpack dashboard.
 */
const { run } = require('../libs');


/**
 * - builds project
 * - runs dev server with dashboard.
 */
run('npm', ['run', 'build'])
.then(() => {
  run('watch', [
    'npm run build',
    'source',
  ]);
  run('nodemon', [
    '--watch', 'build',
    'build/main.js',
  ]);
});