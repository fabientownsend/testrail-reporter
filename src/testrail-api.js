'use strict';
const axios = require('axios');

class TestRailApi {
  static sendResults(destination, results) {
    const testRailPath = `${destination.address}index.php?/api/v2/add_results_for_cases/${destination.runId}`;

    axios({
      url: testRailPath,
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      auth: {
        username: destination.login,
        password: destination.password,
      },
      data: JSON.stringify(results),
    })
      .then(e => console.log('Hourray'))
      .catch(error => console.log(`Oh noes ${error}`));
  }
}

module.exports.TestRailApi = TestRailApi;
