import { start, stop } from './app';
import log from './log';

// application port.
const port = process.argv[2] || 9000;


// safe shutdown
process.on('SIGINT', stop);


// start app.
start(
  port, () => log(`listening on: ${port}`)
);
