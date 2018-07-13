'use strict'

class TestRail {
  constructor(testRailApi) {
    this.testRailApi = testRailApi
    this.results = []
  }

  addSuccess(testId) {
    this.results.push(testId)
  }

  addFailure(testId) {}

  sendResults() {
    this.testRailApi.sendResults(this.results)
  }
}

class TestRailApi {
  constructor(testSuite, destination, login, password) {}
  sendResults(results) {}
}

module.exports.TestRail = TestRail
