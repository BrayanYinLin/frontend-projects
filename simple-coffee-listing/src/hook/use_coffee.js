import { useEffect, useState } from 'react'
import { getCoffee } from '../service/get_coffees'
import { API } from '../const/api'

export const useCoffee = () => {
  const [coffees, setCoffees] = useState([])

  useEffect(() => {
    getCoffee(API)
      .then(setCoffees)
  },[])

  return { coffees }
}