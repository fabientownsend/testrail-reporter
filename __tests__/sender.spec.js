'use strict';

import test from 'ava';
import {TestRail} from '../sender';

class FakeTestRailApi {
  sendResults(result) {
    this.result = result
  }

  getResults() {
    return this.result
  }
}

test('add one successful test result', t => {
  const testId = 1324
  const ftr = new FakeTestRailApi()
  const tr = new TestRail(ftr)

  tr.addSuccess(1234)
  tr.sendResults()

  t.deepEqual(ftr.getResults(), [1234])
});

test('adds two successful tests result', t => {
  const testId = 1324
  const ftr = new FakeTestRailApi()
  const tr = new TestRail(ftr)

  tr.addSuccess(1234)
  tr.addSuccess(5678)
  tr.sendResults()

  t.deepEqual(ftr.getResults(), [1234, 5678])
});
