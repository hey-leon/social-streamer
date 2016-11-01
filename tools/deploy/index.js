const { run } = require('../libs');

run(
  'docker', [
    'build',
    '-t', 'qutseamless/api',
    '-f', `${__dirname}/Dockerfile`, '.',
  ]
)
.then(
  () => run(
    'docker', ['push', 'qutseamless/api']
  )
);
