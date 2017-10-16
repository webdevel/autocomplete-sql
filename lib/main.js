'use babel'

import Provider from './Provider'
import ProviderFactory from './ProviderFactory'

module.exports = {
  provider: null,
  activate() {},
  // Required: Return a promise, an array of suggestions, or null
  getProvider() {
    this.provider = this.provider instanceof Provider ? this.provider : ProviderFactory.create()
    return this.provider
  },
  setProvider(provider = ProviderFactory.create()) {
    this.provider = provider
    return this
  }
}
