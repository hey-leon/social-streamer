/**
 * @module client store
 */
import { createStore } from 'redux';
import reducer from './reducer';


/**
 * @type {Function} represents the api for reading and writing to the
 * application state.
 */
export default createStore(reducer);
