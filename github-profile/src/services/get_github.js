import { API_USERS } from '../consts/keys'

export const getGithub = async (user) => {
  try {
	  //	This code get a user info from github
    const response = await fetch(`${API_USERS}${user}`)
    const json = await response.json()

    return json
  } catch (error) {
    throw new Error(`There was an error ${error}`)
  }
}

export const getRepos = async (user) => {
  try {
	  //	This code get user's repos from github
    const res = await fetch(`${API_USERS}${user}/repos`) //  `${API_USERS}${user}/repos`
    const json = await res.json()

    return json
  } catch (error) {
    throw new Error(`There was an error ${error}`)
  }
}
