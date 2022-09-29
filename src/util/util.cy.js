import {
  randInt,
  loremIpsum,
  randIntDigits,
  getWorstStatus,
  shuffleArray,
} from './util';

describe('Unit test util.js', function () {
  before(() => {
    // check if the import worked correctly
    expect(randInt, 'randInt').to.be.a('function');
    expect(loremIpsum, 'loremIpsum').to.be.a('function');
    expect(getWorstStatus, 'getWorstStatus').to.be.a('function');
  });

  context('randInt', function () {
    it('gives 1 if range is 1', function () {
      expect(randInt(1, 1)).to.eq(1);
    });

    it('gives a random integer', function () {
      expect(Number.isInteger(randInt(0, 10))).to.eq(true);
    });
  });

  context('loremIpsum', function () {
    it('returns a string', function () {
      expect(loremIpsum()).to.be.a('string');
    });
  });

  context('randIntDigits', function () {
    it('returns one digit', function () {
      let length = 1;
      let int = randIntDigits(length);

      expect(int).to.be.a('number');
      expect(int.toString().length).to.eq(length);
    });

    it('returns five digits', function () {
      let length = 2;
      let int = randIntDigits(length);

      expect(int.toString().length).to.eq(length);
    });
  });

  context('getWorstStatus', function () {
    it('returns the most severe status', function () {
      const shuffled = shuffleArray([
        'serious',
        'normal',
        'critical',
        'caution',
      ]);
      expect(getWorstStatus(shuffled)).to.eq('critical');
    });
  });
});
