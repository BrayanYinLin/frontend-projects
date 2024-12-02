import { SONGS } from '../consts/songs.mjs'
import { DOM } from '../component/dom.mjs'

export const playStopSong = (song, $audio) => {
  const { isPlay, isLoaded } = song
  if (!isLoaded) return

  if (isPlay) {
    $audio.play()
  } else {
    $audio.pause()
  }

  song.isPlay = !song.isPlay
}

export const setSong = ({ img, src, title, author, $img, $audio }) => {
  document.getElementById('song').innerHTML = title
  document.getElementById('author').innerHTML = author
  $img.setAttribute('src', img)
  $audio.setAttribute('src', src)
}

export const timeToMinutes = time => {
  time = parseInt(time)
  const minutes = parseInt(time / 60) < 10 ? String(parseInt(time / 60)).padStart(2, '0') : String(parseInt(time / 60))
  const second = time % 60 < 10 ? String(time % 60).padStart(2, '0') : String(time % 60)

  return `${minutes}:${second}`
}

export const nextSong = (id, song) => {
  const index = id + 1 === SONGS.length ? 0 : id + 1
  const newIndex = SONGS.findIndex(s => s.id === index)
  Object.assign(song, SONGS[newIndex])
  const { img, src, title, author } = song
  DOM.$audio.pause()
  setSong({
    img,
    src,
    title,
    author,
    $audio: DOM.$audio,
    $img: DOM.$img
  })
}

export const backSong = (id, song) => {
  const index = id - 1 < 0 ? SONGS.length - 1 : id - 1
  const newIndex = SONGS.findIndex(s => s.id === index)
  Object.assign(song, SONGS[newIndex])
  const { img, src, title, author } = song
  setSong({
    img,
    src,
    title,
    author,
    $audio: DOM.$audio,
    $img: DOM.$img
  })
}
