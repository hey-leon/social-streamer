import { blue } from 'chalk';


/**
 * log a message prepended with application name
 */
export default function log(message) {
  return console.log(
    blue('[social search streamer] ') + message
  );
}
