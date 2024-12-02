const $d = document
const $player = $d.getElementById('player')
export const updateBar = new Event('update-bar')

export const DOM = {
  $audio: $player.querySelector('audio'),
  $img: $player.querySelector('img')
}

export const CONTROLS = {
  $backButton: $d.querySelector('.controls #back-song'),
  $playButton: $d.querySelector('.controls #play-song'),
  $nextButton: $d.querySelector('.controls #next-song'),
  $progress: $d.getElementById('progressbar')
}

export const STATE_TIME = {
  $currentTime: $d.querySelector('#range-time > #current-time'),
  $durationTime: $d.querySelector('#range-time > #duration-time')
}
