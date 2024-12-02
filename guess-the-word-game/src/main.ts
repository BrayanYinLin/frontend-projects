import getRandomWord from './utils/random_word.util'
import wrapWord from './utils/wrap_word.util'
import createInput from './utils/create_input.util'

const random = document.getElementById('random') as HTMLButtonElement

document.addEventListener('DOMContentLoaded', () => {
  getRandomWord()
    .then((word) => setGame(String(word)))
    .catch(err => console.error(err))
})

random.addEventListener('click', () => {
  getRandomWord()
    .then((word) => setGame(String(word)))
    .catch(err => console.error(err))
})

const setGame = (wraped: string): void => {
  const wrapSection = document.getElementById('wrap-word') as HTMLParagraphElement
  const inputsSection = document.getElementById('inputs-area') as HTMLDivElement
  wrapSection.innerHTML = ''
  inputsSection.innerHTML = ''

  wraped.split('').forEach(l => {
    inputsSection.insertAdjacentElement('beforeend', createInput(l))
  })

  wrapWord(wraped).split('').forEach((l) => {
    const letter: HTMLSpanElement = document.createElement('span')
    letter.innerHTML = l
    letter.classList.add('text-vapor', 'text-3xl')
    wrapSection.insertAdjacentElement('beforeend', letter)
  })
}
