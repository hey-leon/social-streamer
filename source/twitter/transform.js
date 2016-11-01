import fetch from 'node-fetch';

let endpoint = 'http://localhost:10000';
if (process.env.NODE_ENV === 'production') {
  endpoint = 'http://ss-worker-group-100515665.ap-southeast-2.elb.amazonaws.com:10000';
}

export default function (tweet) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ tweet }),
  };

  return fetch(endpoint, options)
  .then(response => {
    if (!response.ok) {
      throw new Error('failed to process tweet');
    }
    return response.json();
  })
}