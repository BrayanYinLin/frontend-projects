import Choice from './Choice'

export default function Choices ({ options }) {
  return (
    <>
      <>
        <section className='grid grid-cols-2 grid-rows-2 gap-6'>
          {
            options.map((item, index) => (
              <Choice key={index} isCorrect={item.isCorrect ?? false}>{item.value}</Choice>
            ))
          }
        </section>
      </>
    </>
  )
}
