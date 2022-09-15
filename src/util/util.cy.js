import { randInt, loremIpsum } from './util';

describe('Unit test util.js', function () {
  before(() => {
    // check if the import worked correctly
    expect(randInt, 'randInt').to.be.a('function');
    expect(loremIpsum, 'loremIpsum').to.be.a('function');
  });

  context('randInt', function () {
    it('gives 1 if range is 1', function () {
      expect(randInt(1, 1)).to.eq(1);
    });

    it('gives a random integer', function () {
      expect(Number.isInteger(randInt(10))).to.eq(true);
    });
  });

  context('loremIpsum', function () {
    it('returns a string', function () {
      expect(loremIpsum()).to.be.a('string');
    });
  });
});
