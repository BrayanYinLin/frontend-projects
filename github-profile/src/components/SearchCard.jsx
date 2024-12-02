export default function SearchCard ({ img, name, description, ...props }) {
  return (
    <button className='z-30 relative top-5 w-[100%] flex items-center gap-3 rounded-lg bg-midnightNavy px-2 py-2' {...props}>
      <img src={img} alt='Image icon' className='w-[60px] h-[60px] rounded-lg' />
      <div>
        <h1 className='text-mistyLavender text-left'>{name}</h1>
        <p className='text-mistyLavender'>{description}</p>
      </div>
    </button>
  )
}
