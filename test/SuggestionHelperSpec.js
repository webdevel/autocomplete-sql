import chai, { assert, expect } from 'chai';
chai.should();
import SuggestionHelper from '../lib/SuggestionHelper';

describe('SuggestionHelper', function() {

  let entities = []
  SuggestionHelper.append([{}], entities)
  let entity = entities.pop()

  it('Should have property snippet', function() {
    entity.should.have.property('snippet')
  })
  it('Should have property displayText', function() {
    entity.should.have.property('displayText')
  })
  it('Should have property type', function() {
    entity.should.have.property('type')
  })
  it('Should have property description', function() {
    entity.should.have.property('description')
  })
  it('Should have property descriptionMoreURL', function() {
    entity.should.have.property('descriptionMoreURL')
  })
})
