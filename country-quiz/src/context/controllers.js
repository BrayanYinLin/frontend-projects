const nextQuestion = (state) => {
  if (state.currentIndex + 1 === state.countryQuestions.length) return state

  return ({
    currentIndex: state.currentIndex + 1
  })
}

export { nextQuestion }
