const assert = require('assert');
describe('file u are testing', () => {
  context('function to be tested', () => {
    before(() => {
      console.log('=============== before');
    });

    after(() => {
      console.log('============== after');
    });

    beforeEach(() => {
      console.log('=============== beforeEach');
    });

    afterEach(() => {
      console.log('============== afterEach');
    });
    it('should do something', () => {
      assert.equal(1, 1);
    });

    it('should do something else', () => {
      assert.deepEqual({ name: 'a' }, { name: 'a' });
    });
    it('this is a pending test');
  });

  context("another function",()=>{
    it("should do something")
  })
});
