import chai, { assert, expect } from 'chai';
chai.should();
import Provider from '../lib/Provider'
import ProviderFactory from '../lib/ProviderFactory'

describe('Provider', function() {

  let entity = ProviderFactory.create()

  it('Should have method constructor', function() {
    entity.should.respondTo('constructor')
  })
  it('Should have method getSuggestions', function() {
    entity.should.respondTo('getSuggestions')
    entity.getSuggestions({}).should.be.a('promise')
  })
})
