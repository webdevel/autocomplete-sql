import chai, { assert, expect } from 'chai';
chai.should();
import main from '../lib/main';
import Provider from '../lib/Provider'

describe('Main', function() {

  it('Should have property provider', function() {
    main.should.have.property('provider')
  })
  it('Should have method activate', function() {
    main.should.respondTo('activate')
    expect(main.activate()).to.be.undefined
  })
  it('Should have method getProvider', function() {
    main.should.respondTo('getProvider')
    main.getProvider().should.be.an.instanceof(Provider)
    main.getProvider().should.be.an.instanceof(Provider)
  })
  it('Should have method setProvider', function() {
    main.should.respondTo('setProvider')
    main.setProvider().should.be.an('object')
  })
})
