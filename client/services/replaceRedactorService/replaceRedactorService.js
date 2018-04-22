import angular from "angular";
import _ from "underscore";

// The accepted convention previous to using ES6 syntax was that all services were factories
// This is no longer practical with ES6 as classes map to angularjs services so use them! (sorry factories)


// NOTE to keep these redactor services idempotent
export default class replaceRedactorService {
  static get $inject() {
    // angulars inject
    return ['$q'];
  }
  constructor($q) {
    this.$q = $q;
  }

  /// Redact some text
  /// expected params properties
  /// inputText : string : the text to have redaction performed on it.
  /// phrase : string : the text string to match and replace
  /// replacementChar : character : optional : the replacement character
  // TODO: Convert to a promise so it doesn't block.
  redact(params) {
    let replacementChar = params.replacementChar || 'X';
    if (params.phrase === undefined || params.phrase.length === 0){
        return params.inputText;
    }
    let replacement = this.buildReplacement(replacementChar, params.phrase.length);
    let redactedText = params.inputText.replace(params.phrase, replacement);
    return redactedText;
  }
  /// Create the replacement string
  /// For loop is simple but quick for small strings
    buildReplacement(character, length) {
        let replacement = '';
        for(let i = 0; i< length; i ++){
          replacement += character;
        }
        return replacement;
    }
}


