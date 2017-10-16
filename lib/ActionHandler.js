'use babel'

import Handler from './Handler'
import SuggestionHelper from './SuggestionHelper'

/**
 * knows how to perform the operations associated with carrying out a request.
 */
export default class ActionHandler extends Handler {

  /* TODO limit the scope of suggestions using the current contexts.
   * Determine whether or not to delegate to the successor.
   */
  perform(request) {
    let {
      editor, bufferPosition, scopeDescriptor, prefix,
      activatedManually, completions, suggestions, contexts
    } = request
    SuggestionHelper.append(completions.actions, suggestions)
    this.delegate(request)
  }
}
