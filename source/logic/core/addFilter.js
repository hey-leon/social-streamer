import { List } from 'immutable';


/**
 * default value for a socket is a list.
 */
const defaultVal = new List();


/**
 * helper to add sockets to filters.
 */
function addFilterIfNotExists(filter, socket) {
  return filter.indexOf(socket) === -1 ?
    filter.push(socket) : filter;
}


/**
 * adds a filter if not exists and adds socket to filter.
 */
export function addFilter(state, { filter, socket }) {
  const updater = f => addFilterIfNotExists(f, socket);

  return state.update(
    filter, defaultVal, updater
  );
}
