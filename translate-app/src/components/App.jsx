import { useEffect, useMemo } from 'react'
import { LANGUAGES } from '../consts/initial_lang'
import ControlSection from './CoSo'
import TranslateButton from './TranslateButton'
import TranslationArea from './TranslationArea'
import useTranslate from '../hooks/use_translate'
import ButtonLang from './ButtonLang'

export default function App () {
  const { fromLang, toLang, text, translate, exchange, setFrom, setTo, setText, setResult } = useTranslate()
  const [ES, EN, FR] = useMemo(() => Object.entries(LANGUAGES), [])

  useEffect(() => {
    if (text === '') return setText('Hello World')
    setResult()
  }, [text, toLang])

  const handleChange = (e) => {
    setTimeout(() => {
      setText(e.target.value)
    }, 1000)
  }
  return (
    <>
      <main className='flex flex-col justify-center px-[20px] xl:px-[72px]'>
        <header className='pt-[70px] pb-[70px]'>
          <img src='/translate-app/logo.svg' alt='Translate IO Icon' className='mx-auto w-[150px]' />
        </header>

        <section id='translation' className='grid grid-cols-1 gap-6 xl:grid-cols-2'>

          <TranslationArea isTranslation>
            <aside className='flex gap-4 flex-wrap font-semibold text-steelBlue'>
              <button>Detect Language</button>
              <ButtonLang lang={EN} handleClick={setFrom} className={`py-1 px-2 rounded-xl ${fromLang === EN[1] ? 'bg-steelBlue text-paleSlateBlue' : 'bg-transparent'}`} />
              <ButtonLang lang={FR} handleClick={setFrom} className={`py-1 px-2 rounded-xl ${fromLang === FR[1] ? 'bg-steelBlue text-paleSlateBlue' : 'bg-transparent'}`} />
              <ButtonLang lang={ES} handleClick={setFrom} className={`py-1 px-2 rounded-xl ${fromLang === ES[1] ? 'bg-steelBlue text-paleSlateBlue' : 'bg-transparent'}`} />
              <hr className='w-[100%] my-1 border-steelBlue' />
            </aside>

            <textarea name='input translation' id='translation' cols='30' rows='8' className='bg-transparent resize-none outline-none text-offWhite w-[100%]' defaultValue='Hello, how are you?' onChange={handleChange} />

            <span className='absolute bottom-[120px] right-[35px] text-steelBlue'>{text.length}/500</span>
            <section className='flex justify-between items-center'>
              <ControlSection text={text} lang={fromLang} />
              <TranslateButton onClick={() => setText(text)} />
            </section>
          </TranslationArea>

          <TranslationArea isTranslation={false}>
            <aside className='flex gap-4 flex-wrap font-semibold text-steelBlue'>
              <ButtonLang lang={EN} handleClick={setTo} className={`py-1 px-2 rounded-xl ${toLang === EN[1] ? 'bg-steelBlue text-paleSlateBlue' : 'bg-transparent'}`} />
              <ButtonLang lang={FR} handleClick={setTo} className={`py-1 px-2 rounded-xl ${toLang === FR[1] ? 'bg-steelBlue text-paleSlateBlue' : 'bg-transparent'}`} />
              <ButtonLang lang={ES} handleClick={setTo} className={`flex items-center py-1 px-2 rounded-xl ${toLang === ES[1] ? 'bg-steelBlue text-paleSlateBlue' : 'bg-transparent'}`}><img src='/translate-app/Expand_down.svg' alt='Expand down icon' /></ButtonLang>
              <button className='ml-auto p-1 rounded-xl border-2 border-steelBlue' onClick={exchange}><img src='/translate-app/Horizontal_top_left_main.svg' alt='Exchange translation' /></button>
            </aside>
            <hr className='w-[100%] mt-1 mb-2 border-steelBlue' />

            <textarea name='input translation' id='translation' cols='30' rows='8' className='bg-transparent resize-none outline-none text-offWhite w-[100%] hover:cursor-default' readOnly value={translate} />
            <section className='flex items-center'>
              <ControlSection text={translate} lang={toLang} />
            </section>
          </TranslationArea>
        </section>
      </main>
    </>
  )
}
