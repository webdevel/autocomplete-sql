import chai, { assert, expect } from 'chai';
chai.should();
import Provider from '../lib/Provider'
import ProviderFactory from '../lib/ProviderFactory'

describe('ProviderFactory', function() {

  it('Should create Provider', function() {
    let entity = ProviderFactory.create()
    entity.should.be.an.instanceof(Provider)
  })
})
