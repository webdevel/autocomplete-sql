'use babel'

export default class SuggestionHelper {

  static append(completions, suggestions) {
    completions.forEach((item) => {
      const {snippet, displayText, type, description, descriptionMoreURL} = item
      suggestions.push({
        snippet: snippet,
        displayText: displayText,
        type: type,
        description: description,
        descriptionMoreURL: descriptionMoreURL
      })
    })
  }
}
