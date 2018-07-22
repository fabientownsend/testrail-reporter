'use strict';

const {TEST_RESULT} = require('./test-result');

class TestRail {
  constructor(testRailApi) {
    this.testRailApi = testRailApi;
    this.results = [];
  }

  addSuccess(testId) {
    if (testId) {
      this.results.push({id: testId, result: TEST_RESULT.PASSED});
    }
  }

  addFailure(testId) {
    if (testId) {
      this.results.push({id: testId, result: TEST_RESULT.FAIL});
    }
  }

  sendResults() {
    this.testRailApi.sendResults(this.results);
  }
}

module.exports.TestRail = TestRail;
