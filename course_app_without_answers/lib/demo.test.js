const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const sinonChai = require('sinon-chai');
const sinon = require('sinon');

const expect = chai.expect;
chai.use(chaiAsPromised);
chai.use(sinonChai);
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

  context('test promise', () => {
    it('should add with a promise callback', (done) => {
      demo
        .addPromise(1, 2)
        .then((result) => {
          expect(result).to.equal(3);
          done();
        })
        .catch((error) => {
          done(error);
        });
    });

    it('should test a promise with a return', () => {
      return demo.addPromise(1, 2).then((result) => {
        expect(result).to.equal(3);
      });
    });

    it('test promise with async await', async () => {
      let result = await demo.addPromise(1, 2);
      expect(result).to.equal(3);
    });

    it('should test promises with chai as promised ', async () => {
      await expect(demo.addPromise(2, 2)).to.eventually.equal(4);
    });
  });
  context('test doubles', () => {
    it('should spy on log', () => {
      let spy = sinon.spy(console, 'log');
      demo.foo();
      expect(spy.calledOnce).to.be.true;
      expect(spy).to.have.been.calledOnce;
      spy.restore();
    });

    it('should stub console warn', () => {
      let stub = sinon.stub(console, 'warn').callsFake(() => {
        console.log('message from the stub');
      });
      demo.foo();
      expect(stub).to.have.been.calledOnce;
      expect(stub).to.have.calledWith('console.warn was called');
    });
  });
});
