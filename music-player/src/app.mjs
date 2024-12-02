import { SONGS } from './consts/songs.mjs'
import { updateBar, DOM, CONTROLS, STATE_TIME } from './component/dom.mjs'
import { timeToMinutes, setSong, nextSong, backSong, playStopSong } from './logic/logic.mjs'

const $d = document

// AQUI VA LA INFO DE LA ACTUAL CANCION
const currentSong = {
  isPlay: true,
  isLoaded: false
}

//  CARGA LA PRIMERA MUSICA
$d.addEventListener('DOMContentLoaded', () => {
  Object.assign(currentSong, SONGS[0])
  const { img, src, title, author } = currentSong
  setSong({
    img,
    src,
    title,
    author,
    $audio: DOM.$audio,
    $img: DOM.$img
  })
})

// CUANTO SE CARGA EL AUDIO
DOM.$audio.addEventListener('loadedmetadata', () => {
  currentSong.isLoaded = true
  STATE_TIME.$durationTime.innerHTML = timeToMinutes(DOM.$audio.duration)
  CONTROLS.$progress.setAttribute('min', 0)
  CONTROLS.$progress.setAttribute('max', parseInt(DOM.$audio.duration))
})

//  CUANDO SE ACTUALIZA EL TIEMPO
DOM.$audio.addEventListener('timeupdate', () => {
  STATE_TIME.$currentTime.innerHTML = timeToMinutes(DOM.$audio.currentTime)
  window.dispatchEvent(updateBar)
  if (parseInt(DOM.$audio.currentTime) === parseInt(DOM.$audio.duration)) {
    setTimeout(nextSong, 1000)
  }
})

//  PARA ACTUALIZAR LA BARRA AL TIEMPO
window.addEventListener('update-bar', () => {
  CONTROLS.$progress.value = parseInt(DOM.$audio.currentTime)
})

//  SI EL USUARIO CAMBIA LA BARRA DE PROGRESO
CONTROLS.$progress.addEventListener('click', (e) => {
  const clickPosition = e.clientX - CONTROLS.$progress.getBoundingClientRect().left
  const widthBar = CONTROLS.$progress.clientWidth
  const percentage = (clickPosition / widthBar) * 100

  // Calcula el tiempo de reproducción correspondiente al porcentaje de progreso
  const videoDuration = DOM.$audio.duration
  const newTime = (percentage / 100) * videoDuration
  // Establece el tiempo de reproducción del video en la nueva posición
  DOM.$audio.currentTime = newTime
})

$d.addEventListener('click', (click) => {
  const { id } = currentSong
  if (click.target === CONTROLS.$backButton || click.target === CONTROLS.$backButton.querySelector('img')) {
    backSong(id, currentSong)
  } else if (click.target === CONTROLS.$nextButton || click.target === CONTROLS.$nextButton.querySelector('img')) {
    nextSong(id, currentSong)
  } else if (click.target === CONTROLS.$playButton || click.target === CONTROLS.$playButton.querySelector('img')) {
    playStopSong(currentSong, DOM.$audio)
  }
})
