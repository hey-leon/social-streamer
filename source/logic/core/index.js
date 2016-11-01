import { Map } from 'immutable';


/**
 * returns filters initial state.
 */
export function initFilters() {
  return new Map();
}


/**
 * filter state operators.
 */
export * from './removeAllFilters';
export * from './removeFilter';
export * from'./addFilter';









