import { useQuestion } from './context/questions'
import Modal from './level/components/Modal'
import Form from './questions/components/Form'
import Congrats from './level/components/Congrats'

export default function App () {
  const { currentIndex } = useQuestion(state => state)

  return (
    <>
      <main className='bg-background h-screen flex justify-center items-center font-bevietnam'>
        {
          currentIndex !== 9
            ? <Modal><Form /></Modal>
            : <Congrats />
        }
      </main>
    </>
  )
}
