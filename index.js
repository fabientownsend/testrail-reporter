'use strict';

const {promisify} = require('util');
const fs = require('fs');
const readFile = promisify(fs.readFile);

module.exports = function TestRailReporter(action) {
  let conf;

  action.on('start', test => {
    conf = readFile('./testrailrc.json');
  });

  action.on('pass', test => {});

  action.on('fail', test => {});

  action.on('end', test => {
    conf.then(r => console.log(JSON.parse(r)));
  });
};
