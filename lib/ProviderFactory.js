'use babel'

import Provider from './Provider'
import Factory from './Factory'

export default class ProviderFactory extends Factory {
  static create() {
    const COMPLETIONS = require('./completions.json');
    let instance = Factory.create(Provider, COMPLETIONS)
    return instance
  }
}
