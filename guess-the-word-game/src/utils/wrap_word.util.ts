export default function wrapWord(word: string): string {
  return word.split('').sort(() => Math.random() - 0.5).join('')
}
