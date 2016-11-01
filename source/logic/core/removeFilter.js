import cleanFilter from './helpers/cleanFilter';


/**
 * removes sockets on filter and filter if no more sockets.
 */
export function removeFilter(state, { filter, socket }) {
  const updater = 
    s => cleanFilter(s, filter, socket);

  return state.withMutations(updater);
}
