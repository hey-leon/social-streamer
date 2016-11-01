import Twitter from 'twitter-stream-api';
import transform from './transform';
import cfg from './keys.json';
import log from '../log';


/**
 * twitter stream instance.
 */
const t = new Twitter(cfg);


/**
 * twitter streams tracking set.
 */
const tracking = [];

let rateLimited = false;

/**
 * syncs the current filters with state
 */
function sync(store) {
  const state = store.getState()
                     .toJS();


  const fresh = Object.keys(state);
  let filterChange = false;
  tracking.forEach((f, k) => {
    const i = fresh.indexOf(f);
    if (i === -1) {
      filterChange = true;
      return tracking.splice(k, 1);
    }
    return fresh.splice(i, 1);
  });


  if (fresh.length > 0) {
    filterChange = true;
    tracking.push(...fresh);
  }

  if (filterChange) {
    update();
  }
}



/**
 * updates the stream filters
 */
function update() {
  if (rateLimited) return;
  log(tracking);

  if (tracking.length === 0) {
    t.close();
  }

  const options = {
    track: tracking,
    language: 'en',
  }
  return t.stream('statuses/filter', options);
}



/**
 * pipes incoming tweets through sentiment
 * worker and then to the user.
 */
function pipe(store, data) {
  transform(data)
  .then(({ tweet }) => {
    const state = store.getState()
                     .toJS();

    const filters =
      Object.keys(state);
  
    tweet =
      link(tweet, filters);
    
    return emit(tweet, state);
  })
  .catch(err => log(err));
}





/**
 * link to current tweet to filter
 */
export function link(t, filters) {
  t.filters = [];
  for (const f of filters) {
    if (t.text.indexOf(f) !== -1) {
      t.filters.push(f)
    }
  }
  return t;
}


/**
 * emmit to filter sockets
 */
export function emit(t, store) {
  for (const f of t.filters) {
    for(const s of store[f]) {
      s.emit(f, t);
    }
  }
}


/**
 * - start the twitter stream
 * - subscribe to store
 */
export function start(io, store) {
  t.on('data', tweet => pipe(store, tweet));


  t.on('connection success', () => {
    console.log('connection success');
    if (rateLimited) {
      rateLimited = false;
      update();
    }
  });

  t.on('connection rate limit', status => {
    console.log('connection rate limit', status);
    rateLimited = true;
  });
  
  t.on('connection error unknown', error => {
    console.log('connection error unknown', error)
    t.close();
  });


  store.subscribe(() => sync(store));
}



/**
 * stops the twitter stream
 */
export function stop() {
  t.close();
}
