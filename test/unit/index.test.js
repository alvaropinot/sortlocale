'use strict';
import { expect } from 'chai';
import { sortLocale } from '../../src/index';

describe('sortLocale', function () {
  it('should order special chars', function () {
    const arr = ['b', 'á', 'é', 'c'];
    expect(sortLocale(arr)).to.deep.equal(['á', 'b', 'c', 'é']);
  });

  it('should order words with special chars', function () {
    const arr = ['boó', 'baá', 'ceé', 'bee'];
    expect(sortLocale(arr)).to.deep.equal(['baá', 'bee', 'boó', 'ceé']);
  });

  it('should order numbers', function () {
    const arr = [1, 3, 2];
    expect(sortLocale(arr)).to.deep.equal([1, 2, 3]);
  });

  it('should order numbers mixed with letters', function () {
    const arr = ['b', 1, 'a'];
    expect(sortLocale(arr)).to.deep.equal([1, 'a', 'b']);
  });

  it('should allow only one element', function () {
    expect(sortLocale('a')).to.deep.equal(['a']);
  });

  it('should allow no elements', function () {
    expect(sortLocale()).to.be.an('array').and.to.be.empty;
  });
});
