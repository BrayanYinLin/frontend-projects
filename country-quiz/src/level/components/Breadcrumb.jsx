export default function Breadcrumb ({ isCompleted, children }) {
  const style = isCompleted ? 'bg-gradient-to-b from-[#E65895] to-[#BC6BE8]' : 'bg-[#393F6E]'

  return (
    <>
      <div className={`h-10 w-10 rounded-full p-3 flex justify-center items-center text-white ${style}`}>{children}</div>
    </>
  )
}
