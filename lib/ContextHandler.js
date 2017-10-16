'use babel'

import Handler from './Handler'

/**
 * knows how to perform the operations associated with carrying out a request.
 */
export default class ContextHandler extends Handler {

  /* TODO Determine and set the contexts based on Current Multi-Line Buffer
   */
  perform(request) {
    let {
      editor, bufferPosition, scopeDescriptor, prefix,
      activatedManually, completions, suggestions, contexts
    } = request
    this.delegate(request)
  }
}
