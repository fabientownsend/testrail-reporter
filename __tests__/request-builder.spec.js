'use strict';

import test from 'ava';

function buildRequest(results) {
  const reformatedResults = results.map(r => {
    return {case_id: r.id, status_id: r.result};
  });

  return JSON.stringify({results: reformatedResults});
}

function request() {
  const address = ''
  const path = ''
  const username = ''
  const password = ''
  const results = []

  const request = {
    url: address,
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    auth: {username, password},
    data: results
  }
}

test('add one successful test result', t => {
  const json = JSON.stringify({
    results: [
      {
        case_id: 1234,
        status_id: 1,
      },
    ],
  });

  t.deepEqual(buildRequest([{id: 1234, result: 1}]), json);
});
