'use babel'

import Handler from './Handler'
import Factory from './Factory'
import ActionHandler from './ActionHandler'
import ContextHandler from './ContextHandler'

export default class HandlerFactory extends Factory {
  static create() {
    let handler = new ActionHandler()
    let instance = Factory.create(ContextHandler, handler)
    return instance
  }
}
