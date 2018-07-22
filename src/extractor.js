'use strict';

function extractTestrailId(testDescription) {
  const testRailRegex = /(?!\[TestRailId:\s)(\d+)(?=\])/;
  const testrailId = testRailRegex.exec(testDescription);

  if (testrailId) {
    return parseInt(testrailId[0]);
  } else {
    return null;
  }
}

module.exports.extractTestrailId = extractTestrailId;
