export const LANGUAGES = {
  Espanish: 'es',
  English: 'en',
  French: 'fr'
}

export const INITIAL_TRANSLATE = {
  fromLang: LANGUAGES.English,
  toLang: LANGUAGES.French,
  text: 'Hello, how are you?',
  translate: ''
}

//  Bonjour, comment allez-vous?

export const ACTIONS = {
  SET_FROM: 'SET_FROM',
  SET_TO: 'SET_TO',
  SET_TEXT: 'SET_TEXT',
  SET_RESULT: 'SET_RESULT',
  EXCHANGE: 'EXCHANGE'
}
