import { useQuestion } from '../../context/questions.js'
import Choices from './Choices.jsx'
import Title from './Title.jsx'
import Breadcrumb from '../../level/components/Breadcrumb.jsx'

export default function Form () {
  const { countryQuestions, currentIndex } = useQuestion((state) => state)
  const { title, options } = countryQuestions[currentIndex]

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <>
      <div className='flex justify-center gap-4 mb-7 mt-3'>
        {countryQuestions.map((item, index) => (<Breadcrumb key={index} isCompleted={item.level <= currentIndex + 1}>{index + 1}</Breadcrumb>))}
      </div>
      <form className='w-[80%] mx-auto flex flex-col justify-center gap-6' onSubmit={handleSubmit}>
        <Title title={title} />
        <Choices options={options} />
      </form>
    </>
  )
}
