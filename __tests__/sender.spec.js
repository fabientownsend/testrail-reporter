'use strict';

import test from 'ava';
import {TestRail} from '../sender';
import {TEST_RESULT} from '../test-result';

class FakeTestRailApi {
  sendResults(result) {
    this.result = result;
  }

  getResults() {
    return this.result;
  }
}

test('add one successful test result', t => {
  const testId = 1324;
  const ftr = new FakeTestRailApi();
  const tr = new TestRail(ftr);

  tr.addSuccess(1234);
  tr.sendResults();

  t.deepEqual(ftr.getResults(), [{id: 1234, result: TEST_RESULT.PASSED}]);
});

test('does not add test if no id founds', t => {
  const ftr = new FakeTestRailApi();
  const tr = new TestRail(ftr);

  tr.addSuccess(null);
  tr.addSuccess(undefined);
  tr.addFailure(null);
  tr.addFailure(undefined);
  tr.sendResults();

  t.deepEqual(ftr.getResults(), []);
});

test('adds two successful tests result', t => {
  const testId = 1324;
  const ftr = new FakeTestRailApi();
  const tr = new TestRail(ftr);

  tr.addSuccess(1234);
  tr.addSuccess(5678);
  tr.sendResults();

  t.deepEqual(ftr.getResults(), [
    {id: 1234, result: TEST_RESULT.PASSED},
    {id: 5678, result: TEST_RESULT.PASSED},
  ]);
});

test('adds failing tests result', t => {
  const testId = 1324;
  const ftr = new FakeTestRailApi();
  const tr = new TestRail(ftr);

  tr.addFailure(1234);
  tr.sendResults();

  t.deepEqual(ftr.getResults(), [{id: 1234, result: TEST_RESULT.FAIL}]);
});

test('reccords failing and successful test', t => {
  const testId = 1324;
  const ftr = new FakeTestRailApi();
  const tr = new TestRail(ftr);

  tr.addFailure(1234);
  tr.addSuccess(1234);
  tr.sendResults();

  t.deepEqual(ftr.getResults(), [
    {id: 1234, result: TEST_RESULT.FAIL},
    {id: 1234, result: TEST_RESULT.PASSED},
  ]);
});
