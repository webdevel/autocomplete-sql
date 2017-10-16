'use babel'

export default class Factory {
  static create(clazz, ...params) {
    let instance = new clazz(...params)
    return instance
  }
}
