import chai, { assert, expect } from 'chai';
chai.should();
import Handler from '../lib/Handler'

describe('Handler', function() {

  let entity = new Handler()

  it('Should have method constructor', function() {
    entity.should.respondTo('constructor')
  })
  it('Should have method perform', function() {
    entity.should.respondTo('perform')
    expect(entity.perform({})).to.be.undefined
  })
  it('Should have method delegate', function() {
    entity.should.respondTo('delegate')
    expect(entity.delegate({})).to.be.undefined
    let successor = new Handler()
    entity = new Handler(successor)
    expect(entity.delegate({})).to.be.undefined
  })
})
