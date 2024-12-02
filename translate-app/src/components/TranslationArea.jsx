export default function TranslationArea ({ isTranslation, children }) {
  const background = isTranslation ? 'bg-charcoalGrayTransparent' : 'bg-steelBlueTransparent'
  const border = isTranslation ? 'border-charcoalGray' : 'border-steelBlue'

  return (
    <article className={`relative flex flex-col justify-between min-h-[300px] ${background} p-8 border-[1px] ${border} rounded-3xl xl:col-span-1`}>
      {children}
    </article>
  )
}
