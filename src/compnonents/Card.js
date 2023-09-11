
import {AiFillStar} from 'react-icons/ai'
import {BsFillBagHeartFill} from 'react-icons/bs'

 function Card({img, title,star,reviews, newPrice, prevPrice}) {
  return (
       <section className='card'>
          <img src={img} className='card-img'  alt={title} />
          <div className='card-details'>
            <h3 className='card-tile'>{title}</h3>
            <section className='card-reviews'>
              {star}{star}{star}{star}
              {/* <AiFillStar className='rating-star' />
              <AiFillStar  className='rating-star' />
              <AiFillStar className='rating-star' />
              <AiFillStar className='rating-star' /> */}
              <span className='tota-reviews'>{reviews}</span>
            </section>
            <section className='card-price'>
              <div className='price'>
                <del>{prevPrice}</del> {newPrice}
              </div>
              <div className='bag'>
                <BsFillBagHeartFill className='bag-icon' />
              </div>
            </section>
          </div>
        </section> 
  )
}
export default Card

