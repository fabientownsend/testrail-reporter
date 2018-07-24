'use strict';

const {promisify} = require('util');
const fs = require('fs');
const readFile = promisify(fs.readFile);
const {TestRail} = require('./sender');
const {extractTestrailId} = require('./extractor');
const {TestRailApi} = require('./testrail-api');

let testRail = new TestRail(TestRailApi);

module.exports = function TestRailReporter(action) {
  let conf;

  action.on('start', test => {
    conf = readFile('./testrailrc.json');
  });

  action.on('pass', test => {
    const testId = extractTestrailId(test.title);
    testRail.addSuccess(testId);
  });

  action.on('fail', test => {
    const testId = extractTestrailId(test.title);
    testRail.addFailure(testId);
  });

  action.once('end', () => {
    conf.then(r => {
      const informations = JSON.parse(r);
      testRail.sendResults(informations)
      testRail.reset()
    });
  });
};
