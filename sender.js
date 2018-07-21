'use strict'

const {TEST_RESULT} = require('./test-result')

class TestRail {
  constructor(testRailApi) {
    this.testRailApi = testRailApi
    this.results = []
  }

  addSuccess(testId) {
    this.results.push({id: testId, result: TEST_RESULT.PASSED})
  }

  addFailure(testId) {
    this.results.push({id: testId, result: TEST_RESULT.FAIL})
  }

  sendResults() {
    this.testRailApi.sendResults(this.results)
  }
}

class TestRailApi {
  constructor(testSuite, destination, login, password) {}
  sendResults(results) {}
}

module.exports.TestRail = TestRail
