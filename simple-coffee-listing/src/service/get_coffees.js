export const getCoffee = async (url) => {
  try {
    const res = await fetch(url)
    const data = await res.json()

    const mappedData = await data.map(coffee => ({
      id: coffee.id,
      name: coffee.name,
      img: coffee.image,
      price: coffee.price,
      rating: String(coffee.rating === 'null' ? '' : coffee.rating),
      votes: coffee.votes,
      popular: coffee.popular,
      available: coffee.available
    }))
    return mappedData
  } catch (err) {
    throw new Error(err)
  }
}