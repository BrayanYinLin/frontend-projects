import PropTypes from 'prop-types'
import { Star, StarFill } from '../icon/Icons'

export default function Product ({ name, img, price, rating, votes, popular, available }) {
  const SrcStar = () => votes === 0 ? <Star /> : <StarFill />
  const newRating = rating === 'null' ? '' : rating
  const newVotes = votes > 0 ? `(${votes} votes)` : `No ratings`
  const isPopular = popular 
  
  return (
    <article className='relative flex flex-col justify-center'>
      {
        isPopular && (
          <span className='text-graphiteGray text-[10px] font-bold bg-amberOrange rounded-full px-3 py-1 absolute top-2 left-2'>Popular</span>
        )
      }
      <img src={img} alt="Coffee image" className='object-contain rounded-2xl'/>
      <div id="info" className='flex justify-between items-center pt-3'>
        <h3 className='text-lg text-creamyWhite'>{name}</h3>
        <p className='text-sm font-semibold px-2 rounded-md py-1 text-graphiteGray bg-mintGreen'>{price}</p>
      </div>
      <section id="opinion" className='flex justify-between items-center pt-3'>
        <div className='flex items-center gap-1'>
          <p className='flex items-center gap-1'>
            <SrcStar />
            <span className='text-creamyWhite font-semibold text-sm'>{newRating}</span>
          </p>
          <p className='text-slateGray font-semibold text-sm'>{newVotes}</p>
        </div>
        {
          !available && (
            <p className='text-coralRed font-semibold text-sm'>Sold out</p>
          )
        }
      </section>
    </article>
  )
}

Product.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
  price: PropTypes.string,
  rating: PropTypes.string,
  votes: PropTypes.number,
  popular: PropTypes.bool,
  available: PropTypes.bool
}