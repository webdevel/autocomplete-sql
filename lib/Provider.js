'use babel'

import HandlerFactory from './HandlerFactory'

export default class Provider {

  constructor(completions) {
    this.selector = '.source.sql'
    this.disableForSelector = '.source.sql .comment'
    this.filterSuggestions = true
    this.completions = completions
    this.contexts = []
  }

  /**
   * A request options object will be passed to your getSuggestions function,
   * with the following properties: editor, bufferPosition, scopeDescriptor
   * prefix, activatedManually
   */
  getSuggestions(request) {
    const {editor, bufferPosition, scopeDescriptor, prefix, activatedManually} = request
    let suggestions = []
    return new Promise((resolve) => {
      HandlerFactory.create().perform({
        editor: editor, bufferPosition: bufferPosition,
        scopeDescriptor: scopeDescriptor, prefix: prefix,
        activatedManually: activatedManually, completions: this.completions,
        suggestions: suggestions, contexts: this.contexts
      })
      resolve(suggestions)
    })
  }
}
