export default function InfoUser ({ fieldName, field }) {
  return (
    <div className='flex items-center h-[48px] px-5 rounded-lg bg-midnightNavy'>
      <span className='text-slateBlue'>{fieldName}</span>
      <div className='mx-3 border-l border-slateBlue h-[75%]' />
      <span className='text-mistyLavender'>{field}</span>
    </div>
  )
}
