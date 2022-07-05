const chai = require('chai');
const expect = chai.expect;

describe('chai test',()=>{
  it('should compare some values',()=>{
    expect(1).to.equal(1)
  });

  it("should do something else",()=>{
    expect({ name: 'q' }).to.deep.equal({ name: 'q' });
    expect({name:'dave'}).to.have.property('name').to.equal('dave');
    expect(5>8).to.be.false;
    expect({}).to.be.a('object');
    expect('foo').to.be.a('string');
    expect(2).to.be.a('number');
    expect('chai').to.be.a('string').with.lengthOf(4);
    expect([2,23,23,23].length).to.equal(4);
    expect(null).to.be.null;
    expect(undefined).to.not.exist;
    expect(1).to.exist;
  })
})