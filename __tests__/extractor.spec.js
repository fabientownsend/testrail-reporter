'use strict';

import test from 'ava';
import {extractTestrailId} from '../src/extractor';

test('extracts testrail id from testrail tag', t => {
  t.is(extractTestrailId('asdf [TestRailId: 1234] fdas'), 1234);
});

test('extracts nothing when testrail tag do not have id', t => {
  t.is(extractTestrailId('[TestRailId:] asdf'), null);
});

test('extracts nothing when testrail tag is missing', t => {
  t.is(extractTestrailId('test desription without testrail id'), null);
});
