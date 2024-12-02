export const getTranslation = async ({ text, fromLang, toLang }) => {
  try {
    const jsonData = await fetch(`https://api.mymemory.translated.net/get?q=${text}&langpair=${fromLang}|${toLang}`)
    const response = await jsonData.json()

    return response.responseData.translatedText
  } catch (error) {
    throw new Error('Error fetching data')
  }
}
