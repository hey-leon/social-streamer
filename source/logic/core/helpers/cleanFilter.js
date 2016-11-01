/**
 * a filter clean up helper.
 * - removes socket from filter if exists.
 * - removes filter if last socket on
 *   filter.
 */
export function cleanFilter(mutableState, filter, socket) {
  if (!mutableState.has(filter)) {
    return mutableState;
  }

  mutableState.update(
    filter, f => f.delete(f.keyOf(socket))
  )

  return mutableState.get(filter).size < 1 ?
    mutableState.delete(filter) : mutableState;
}


export default cleanFilter;