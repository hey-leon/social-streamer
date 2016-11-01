import * as core from './core';


/**
 * initialise state.
 */
const init = core.initFilters();


/**
 * operate on state as per action (reduce).
 */
export function reducer(state = init, { type, data }) {
  if (typeof core[type] !== 'function') {
    return state;
  }

  return core[type](state, data);
}


/**
 * 
 */
export function loggingReducer(state, action) {
  const newState = reducer(state, action);
  console.log(newState.toJS());
  return newState;
}


export default reducer;