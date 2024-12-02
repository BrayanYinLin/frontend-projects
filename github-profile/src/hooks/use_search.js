import { useState } from 'react'
import { getGithub } from '../services/get_github'

export default function useSearch () {
  const [result, setResult] = useState()

  const setResultUser = (username) => {
    if (username === '') {
      setResult(null)
      return
    }
    getGithub(username)
      .then(setResult)
  }
  return { result, setResultUser }
}
