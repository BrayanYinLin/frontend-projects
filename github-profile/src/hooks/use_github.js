import { useEffect, useState } from 'react'
import { getGithub, getRepos } from '../services/get_github'

export default function useGithub ({ username }) {
  const [user, setUser] = useState({})
  const [repositories, setRepositories] = useState([])

  useEffect(() => {
    getGithub(username)
      .then(data => {
        setUser(data)
        getRepos(username)
          .then(setRepositories)
      })
  }, [])

  const setGithub = (username) => {
    getGithub(username)
      .then(data => {
        setUser(data)
        getRepos(username)
          .then(setRepositories)
      })
  }
  const mappedRepos = repositories.map(({ id, name, description, updated_at, stargazers_count, forks_count, license, html_url }) => ({
    id,
    name,
    description,
    update: updated_at,
    stars: stargazers_count,
    forks: forks_count,
    license: license ? license.key.toUpperCase() : null,
    url: html_url
  }))

  return { user, repos: mappedRepos, setGithub }
}
