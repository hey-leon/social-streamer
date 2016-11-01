/**
 * @module setup for tests
 */
import mongoose from 'mongoose';


/**
 * assign mongoose promises as native promises.
 */
mongoose.Promise = Promise;
