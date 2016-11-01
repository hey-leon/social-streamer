import store from './logic/store';
import * as t from './twitter';
import io from 'socket.io';

/**
 * @type {io} an intance of socket io
 */
let app;


/**
 * add socket & dispatch message to redux
 */
function message(store, socket, action) {
  action.data.socket = socket;
  store.dispatch(
    action
  );
}


/**
 * dispatch action to remove all filters
 */
function disconnect(store, socket, action) {
  action = {
    type: 'removeAllFilters',
    data: { socket },
  }
  store.dispatch(action);
}


/** 
 * register actions to socket events
 */
function register(s) {
  s.on('message', action => message(store, s, action));
  s.on('disconnect', () => disconnect(store, s, null));
}


/**
 * start io and on connections register event handlers
 */
export function start(port, cb) {
  app = new io(port);
  app.on(
    'connection', register
  );

  t.start(app, store);
  if (cb) {
    cb();
  }
}


/**
 * safe shutdown
 */
export function stop() {
  t.stop()
  app.close();
}

