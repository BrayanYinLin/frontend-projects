import RANDOM_WORD from './api.const'

export default async function getRandomWord(): Promise<string | void> {
  try {
    const response = await fetch(RANDOM_WORD)
    const parsed: string[] = await response.json()
    if (!response.ok) throw new Error('There was an error')

    console.log(parsed[0])
    return parsed[0]
  } catch (err) {
    console.error(err)
  }
}
