import { useReducer } from 'react'
import { INITIAL_TRANSLATE, ACTIONS } from '../consts/initial_lang'
import { getTranslation } from '../services/get_translation'

const reducer = (state = INITIAL_TRANSLATE, action) => {
  const { type, payload } = action

  if (type === ACTIONS.EXCHANGE) {
    return ({
      ...state,
      fromLang: state.toLang,
      toLang: state.fromLang
    })
  }

  if (type === ACTIONS.SET_FROM) {
    return ({
      ...state,
      fromLang: payload
    })
  }

  if (type === ACTIONS.SET_TO) {
    return ({
      ...state,
      toLang: payload
    })
  }

  if (type === ACTIONS.SET_TEXT) {
    return ({
      ...state,
      text: payload
    })
  }

  if (type === ACTIONS.SET_RESULT) {
    return ({
      ...state,
      translate: payload
    })
  }
}

export default function useTranslate () {
  const [{
    fromLang,
    toLang,
    text,
    translate
  }, dispatch] = useReducer(reducer, INITIAL_TRANSLATE)

  //  To exchange "fromLang" and "toLang"
  const exchange = () => dispatch({ type: ACTIONS.EXCHANGE })

  //  To set "fromLang"
  const setFrom = (lang) => dispatch({ type: ACTIONS.SET_FROM, payload: lang })

  //  To set "toLang"
  const setTo = (lang) => dispatch({ type: ACTIONS.SET_TO, payload: lang })

  //  To set the input user
  const setText = (input) => dispatch({ type: ACTIONS.SET_TEXT, payload: input })

  // To set the output user
  const setResult = () => {
    getTranslation({ text, fromLang, toLang })
      .then(output => dispatch({ type: ACTIONS.SET_RESULT, payload: output }))
  }

  return { fromLang, toLang, text, translate, exchange, setFrom, setTo, setText, setResult }
}
