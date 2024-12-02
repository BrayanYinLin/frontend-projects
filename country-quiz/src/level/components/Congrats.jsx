import { useAsserts } from '../../context/questions'

export default function Congrats () {
  const { asserts } = useAsserts(state => state)

  const handleClick = () => window.location.reload()
  return (
    <>
      <section className='w-[50%] lg:w-[28%] bg-[#343964] p-6 rounded-xl flex flex-col items-center justify-center'>
        <img src='/congrats.svg' alt='Congratulation icon' />
        <h2 className='text-center text-2xl text-white my-2'>Congrats! You completed the quiz.</h2>
        <p className='text-white text-center text-sm'>You answer {`${asserts.filter(e => e).length}/${asserts.length}`} correctly</p>
        <button className='mb-8 mt-6 text-white bg-gradient-to-b from-[#E65895] to-[#BC6BE8] px-10 py-3 rounded-xl' onClick={handleClick}>Play again</button>
      </section>
    </>
  )
}
