export default function play ({ lang, text }) {
  const { speechSynthesis } = window
  const version = {
    en: 'US',
    es: 'ES',
    fr: 'FR'
  }
  const voices = speechSynthesis.getVoices().filter(voice => voice.name === 'Microsoft Helena - Spanish (Spain)' || voice.name === 'Microsoft Emma Online (Natural) - English (United States)' || voice.name === 'Microsoft Denise Online (Natural) - French (France)')
  const [currentVoice] = voices.filter(voice => voice.lang === `${lang}-${version[lang]}`)
  const speech = new SpeechSynthesisUtterance(text)
  console.log(currentVoice)
  speech.voice = currentVoice
  speechSynthesis.speak(speech)
}
