import { API } from '/src/consts/API.js'
import getQuote from '/src/services/get_quote.js'
import setElements from '/src/dom/set_dom.js'

document.addEventListener('DOMContentLoaded', () => {
  getQuote({ api: API })
    .then(setElements)
})

document.getElementById('generate').addEventListener('click', () => {
  getQuote({ api: API })
    .then(setElements)
})

document.getElementById('copy').addEventListener('click', () => {
  const $quote = document.getElementById('quote')
  navigator.clipboard.writeText($quote.innerHTML)
})