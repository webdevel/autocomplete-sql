'use babel'

/**
 * knows how to perform the operations associated with carrying out a request.
 */
export default class Handler {

  constructor(successor) {
    this.successor = successor
  }
  perform(request) {
  }
  delegate(request) {
    if (this.successor instanceof Handler) {
      this.successor.perform(request)
    }
  }
}
