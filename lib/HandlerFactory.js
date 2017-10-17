'use babel'

import Handler from './Handler'
import Factory from './Factory'
import SimpleHandler from './SimpleHandler'
import ContextHandler from './ContextHandler'

export default class HandlerFactory extends Factory {
  static create() {
    let handler = new SimpleHandler()
    let instance = Factory.create(ContextHandler, handler)
    return instance
  }
}
