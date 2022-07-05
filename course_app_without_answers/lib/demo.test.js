const chai = require('chai');

const expect = chai.expect;

let demo = require('./demo');

describe('demo', () => {
  context('add', () => {
    it('should add two numbers', () => {
      expect(demo.add(2, 3)).to.equal(5);
    });
  });
  context('callback add', () => {
    it('test the callback add', (done) => {
      demo.addCallback(1, 2, (error, result) => {
        expect(error).to.not.exist;
        expect(result).to.equal(3);
        done();
      });
    });
  });
});
