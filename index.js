module.exports = function TestRailReporter(action) {
  action.on('start', test => {});

  action.on('pass', test => {});

  action.on('fail', test => {});

  action.on('end', test => {});
};
