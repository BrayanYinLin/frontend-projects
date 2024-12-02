import useGithub from '../hooks/use_github'
import useSearch from '../hooks/use_search'
import InfoUser from './InfoUser'
import Repository from './Repository'
import SearchCard from './SearchCard'

export default function App () {
  const { user, repos, setGithub } = useGithub({ username: 'github' })
  const { result, setResultUser } = useSearch()

  const handleChange = (e) => {
    setTimeout(() => {
      setResultUser(e.target.value)
    }, 900)
  }

  const handleClick = (e) => {
    e.preventDefault()
    setGithub(result.login)
    setResultUser('')
  }
  return (
    <>
      <main className='bg-steelGray min-h-screen font-github'>
        <header className='bg-universe bg-cover bg-center bg-no-repeat min-h-[200px] flex justify-center'>
          <form className='relative inline-block w-[75%] md:w-[35%] mx-auto mt-8'>
            <label className='absolute h-[20px] top-[12px] left-2' htmlFor='searchUser'>
              <img src='/github-profile/Search.svg' alt='Search icon' />
            </label>
            <input type='text' name='searchUser' className='w-[100%] outline-none pl-[38px] rounded-lg py-3 bg-steelGray text-stormyGray focus:outline-electricBlue outline-offset-0' id='searchUser' placeholder='username' onChange={handleChange} />
            {result && <SearchCard description={result.bio} name={result.name} img={result.avatar_url} onClick={handleClick} />}
          </form>
        </header>

        <section className='w-[75%] mx-auto flex items-start gap-6'>
          <img src={user.avatar_url} alt='User icon' className='relative bottom-[40px] w-[120px] h-[120px] border-8 rounded-xl border-steelGray' />
          <article className='flex flex-wrap gap-4 mt-4'>
            <InfoUser fieldName='Followers' field={user.followers} />
            <InfoUser fieldName='Following' field={user.following} />
            {user.location && <InfoUser fieldName='Location' field={user.location} />}
          </article>
        </section>

        <section className='w-[75%] mx-auto pt-6'>
          <h1 className='pb-2 text-3xl text-mistyLavender'>{user.name}</h1>
          {user.bio && <p className='text-lg text-stormyGray'>{user.bio}</p>}
        </section>

        <section className='w-[75%] pt-10 pb-20 mx-auto gap-6 grid grid-cols-1 xl:grid-cols-2'>
          {
            repos.map(({ id, name, description, license, forks, stars, update, url }) => (
              <Repository key={id} name={name} description={description} license={license} forks={forks} stars={stars} lastUpdate={update} link={url} />
            ))
          }
        </section>
      </main>
    </>
  )
}
