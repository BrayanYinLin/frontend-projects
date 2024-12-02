export default async function getQuote ({ api }) {
  try {
    const unformat = await fetch(api)
    const res = await unformat.json()

    return res
  } catch (err) {
    throw new Error(`There was an error ${err}`)
  }
}