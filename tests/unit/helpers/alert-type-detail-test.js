/* jshint expr:true */
import { expect } from 'chai';
import {
  describe,
  it
} from 'mocha';
import {
  alertTypeDetail
} from 'smartclime/helpers/alert-type-detail';

describe('AlertTypeDetailHelper', function() {
  // Replace this with your real tests.
  it('works', function() {
    let result = alertTypeDetail(42);
    expect(result).to.be.ok;
  });
});
