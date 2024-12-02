import { useState } from 'react'
import { useAsserts, useQuestion } from '../../context/questions.js'
import { toast } from 'sonner'

export default function Choice ({ children, isCorrect }) {
  const { nextQuestion, currentIndex } = useQuestion((state) => state)
  const { setAssert } = useAsserts((state) => state)
  const [src, setSrc] = useState(null)

  const handleClick = () => {
    if (isCorrect) {
      setAssert(currentIndex)
      setSrc('/Check_round_fill.svg')
      toast('Correct')
    }

    if (!isCorrect) {
      setSrc('/Close_round_fill.svg')
      console.log(src)
      toast('Wrong')
    }

    setTimeout(() => {
      setSrc(null)
      nextQuestion()
    }, 1000)
  }
  return (
    <>
      <button className='bg-[#393F6E] hover:bg-gradient-to-b from-[#E65895] to-[#BC6BE8] py-5 px-10 rounded-xl text-white flex justify-center items-center gap-2' onClick={handleClick}>
        {children}
        {
          src && <img src={src} alt='Icon' />
        }
      </button>
    </>
  )
}
