import play from '../hooks/use_play'
import useClipboard from '../hooks/use_clipboard'

export default function ControlSection ({ text, lang }) {
  return (
    <div className='flex gap-2'>
      <button className='p-2 rounded-xl border-2 border-steelBlue' onClick={() => play({ text, lang })}><img src='/translate-app/sound_max_fill.svg' alt='Play song button' /></button>
      <button className='p-2 rounded-xl border-2 border-steelBlue'><img src='/translate-app/Copy.svg' alt='Copy text button' onClick={() => useClipboard({ text })} /></button>
    </div>
  )
}
