import cleanFilter from './helpers/cleanFilter';


/**
 * calls cleanFilter on all filters with socket
 */
function cleanAllFilters(state, filters, socket) {
  for (const filter of filters) {
    cleanFilter(state, filter, socket);
  }

  return state;
}


/**
 * removes socket from all filters and all empty filters
 */
export function removeAllFilters(state, { socket }) {
  const keys = state.keys();

  const updater =
    s => cleanAllFilters(s, keys, socket);

  return state.withMutations(updater);
}
