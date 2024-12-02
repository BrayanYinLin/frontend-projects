import { create } from 'zustand'
import { nextQuestion } from './controllers'

const countryQuestions = [
  {
    id: crypto.randomUUID(),
    level: 1,
    title: 'Which country is the largest by land area?',
    options: [
      { value: 'Canada' },
      { value: 'China' },
      { value: 'United States' },
      { value: 'Russia', isCorrect: true }
    ]
  },
  {
    id: crypto.randomUUID(),
    level: 2,
    title: 'Which country has the highest population?',
    options: [
      { value: 'China', isCorrect: true },
      { value: 'India' },
      { value: 'United States' },
      { value: 'Indonesia' }
    ]
  },
  {
    id: crypto.randomUUID(),
    level: 3,
    title: 'Which country has the largest economy by GDP?',
    options: [
      { value: 'United States', isCorrect: true },
      { value: 'China' },
      { value: 'Japan' },
      { value: 'Germany' }
    ]
  },
  {
    id: crypto.randomUUID(),
    level: 4,
    title: 'Which country is known as the Land of the Rising Sun?',
    options: [
      { value: 'Japan', isCorrect: true },
      { value: 'China' },
      { value: 'South Korea' },
      { value: 'Thailand' }
    ]
  },
  {
    id: crypto.randomUUID(),
    level: 5,
    title: 'Which country has the most UNESCO World Heritage Sites?',
    options: [
      { value: 'Italy', isCorrect: true },
      { value: 'China' },
      { value: 'Spain' },
      { value: 'Germany' }
    ]
  },
  {
    id: crypto.randomUUID(),
    level: 6,
    title: 'Which country is the smallest by land area?',
    options: [
      { value: 'Vatican City', isCorrect: true },
      { value: 'Monaco' },
      { value: 'San Marino' },
      { value: 'Liechtenstein' }
    ]
  },
  {
    id: crypto.randomUUID(),
    level: 7,
    title: 'Which country has the longest coastline?',
    options: [
      { value: 'Indonesia' },
      { value: 'Canada', isCorrect: true },
      { value: 'Russia' },
      { value: 'Australia' }
    ]
  },
  {
    id: crypto.randomUUID(),
    level: 8,
    title: 'Which country is the largest producer of coffee?',
    options: [
      { value: 'Vietnam' },
      { value: 'Brazil', isCorrect: true },
      { value: 'Colombia' },
      { value: 'Ethiopia' }
    ]
  },
  {
    id: crypto.randomUUID(),
    level: 9,
    title: 'Which country has the most time zones?',
    options: [
      { value: 'Russia' },
      { value: 'United States' },
      { value: 'France', isCorrect: true },
      { value: 'Australia' }
    ]
  },
  {
    id: crypto.randomUUID(),
    level: 10,
    title: 'Which country has the highest number of islands?',
    options: [
      { value: 'Finland' },
      { value: 'Sweden', isCorrect: true },
      { value: 'Indonesia' },
      { value: 'Philippines' }
    ]
  }
]

const useQuestion = create((set) => ({
  countryQuestions,
  currentIndex: 0,
  nextQuestion: () => set(nextQuestion)
}))

const useAsserts = create((set) => ({
  level: Array(countryQuestions.length).fill(false),
  asserts: Array(countryQuestions.length).fill(false),
  setAssert: (index) => set((state) => {
    const newAsserts = state.asserts
    newAsserts[index] = true

    return ({
      asserts: newAsserts
    })
  })
}))

export { useQuestion, useAsserts }
