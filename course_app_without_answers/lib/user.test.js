const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const expect = chai.expect;
chai.use(chaiAsPromised);
chai.use(sinonChai);

const mongoose = require('mongoose');
const users = require('./users');
const User = require('./models/user');

let sandBox = sinon.createSandbox();

describe('users', () => {
  let findStub;
  let sampleUsers;
  let sampleArgs;

  beforeEach(() => {
    sampleUsers = {
      id: 123,
      name: 'foo',
      email: 'foo@bar.com',
    };
    findStub = sandBox.stub(mongoose.Model, 'findById').resolves(sampleUsers);
  });

  afterEach(() => {
    sandBox.restore();
  });

  context('get', () => {
    it('should check for an Id', (done) => {
      users.get(null, (error, result) => {
        expect(error).to.exist;
        expect(error.message).to.equal('Invalid user id');
        done();
      });
    });

    it('should call findById with id and return result', (done) => {
      sandBox.restore();
      let stub = sandBox
        .stub(mongoose.Model, 'findById')
        .yields(null, { name: 'foo' });
      users.get(123, (error, result) => {
        expect(error).to.not.exist;
        expect(stub).to.have.been.calledOnce;
        expect(stub).to.have.been.calledWith(123);
        expect(result).to.be.a('object');
        expect(result).to.have.property('name').to.equal('foo');

        done();
      });
    });
  });
});
