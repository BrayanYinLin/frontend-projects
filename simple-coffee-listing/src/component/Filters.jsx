import Product from "./Product"
import PropTypes from 'prop-types'

export default function Filters ({ coffees }) {
  return (
    <>
      {
        coffees.map(({ id, name, img, available, popular, price, rating, votes}) => (
          <Product key={id} name={name} img={img} available={available} popular={popular} price={price} rating={rating} votes={votes} />
        ))
      }
    </>
  )
}

Filters.propTypes = {
  coffees: PropTypes.array
}
