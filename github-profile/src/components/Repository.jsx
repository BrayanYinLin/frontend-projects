import { useEffect, useState } from 'react'

export default function Repository ({ id, name, description, license, forks, stars, lastUpdate, link }) {
  const date = new Date(lastUpdate).getTime()
  const currentDate = new Date().getTime()
  const [updateGithub, setUpdateGithub] = useState('')

  useEffect(() => {
    const diff = (currentDate - date) / (1000 * 3600 * 24)
    setUpdateGithub(Math.round(diff))
  }, [])
  return (
    <a className='w-[100%] flex flex-col justify-between gap-2 col-span-1 p-4 rounded-lg bg-gradient-to-r from-midnightNavy to-deepIndigo' href={link} target='_blank' key={id} rel='noreferrer'>
      <h1 className='text-xl text-mistyLavender'>{name}</h1>
      <p className='text-sm text-stormyGray'>{description}</p>
      <div className='flex gap-4'>
        {license && <p className='flex items-center gap-1 text-stormyGray text-xs'><img src='/github-profile/Chield_alt.svg' alt='License icon' />{license}</p>}
        <p className='flex items-center gap-1 text-stormyGray text-xs'><img src='/github-profile/Nesting.svg' alt='Nesting icon' />{forks}</p>
        <p className='flex items-center gap-1 text-stormyGray text-xs'><img src='/github-profile/Star.svg' alt='Star icon' />{stars}</p>
        <p className='flex items-center text-stormyGray text-xs'>updated {updateGithub} days ago</p>
      </div>
    </a>
  )
}
