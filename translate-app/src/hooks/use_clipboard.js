export default function useClipboard ({ text }) {
  navigator.clipboard.writeText(text)
}
