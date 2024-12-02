export default function ButtonLang ({ lang, handleClick, children, ...props }) {
  const [key, value] = lang
  return (
    <button onClick={() => handleClick(value)} {...props}>{key}{children}</button>
  )
}
