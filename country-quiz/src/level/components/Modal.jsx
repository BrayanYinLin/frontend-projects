export default function Modal ({ children }) {
  return (
    <>
      <section className='w-[90%] lg:w-[60%] bg-[#343964] p-14 rounded-xl'>
        <h1 className='text-light-purple text-center font-semibold'>Country Quiz</h1>
        {children}
      </section>
    </>
  )
}
