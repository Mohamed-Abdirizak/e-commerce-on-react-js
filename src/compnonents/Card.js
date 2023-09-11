import React from 'react'
import {AiFillStar} from 'react-icons/ai'
import {BsFillBagHeartFill} from 'react-icons/bs'
import data from '../db/data'
import './Card.css'
 function Card() {
  return (

  //   <div className='card-container'>
  //   {data.map((card) => (
  //     <div key={card.id}>
  //       <section className='card'>
  //         <img className='card-img' src={card.img} alt='shoes' />
  //         <div className='card-details'>
  //           <h3 className='card-tile'>{card.title}</h3>
  //           <section className='card-reviews'>
  //             {card.star}{card.star}{card.star}{card.star}
  //             <span className='tota-reviews'>{card.reviews}</span>
  //           </section>
  //           <section className='card-price'>
  //             <div className='price'>
  //               <del>{card.prevPrice}</del> {card.newPrice}
  //             </div>
  //             <div className='bag'>
  //               <BsFillBagHeartFill className='bag-icon' />
  //             </div>
  //           </section>
  //         </div>
  //       </section> 
  //     </div>
  //   ))}
  // </div>






    <div>
       <section className='card'>
          <img className='card-img' src='https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg' alt='shoes' />
          <div className='card-details'>
            <h3 className='card-tile'>Shoe</h3>
            <section className='card-reviews'>
              <AiFillStar className='rating-star' />
              <AiFillStar  className='rating-star' />
              <AiFillStar className='rating-star' />
              <AiFillStar className='rating-star' />
              <span className='tota-reviews'>67</span>
            </section>
            <section className='card-price'>
              <div className='price'>
                <del>$300</del> 200
              </div>
              <div className='bag'>
                <BsFillBagHeartFill className='bag-icon' />
              </div>
            </section>
          </div>
        </section> 
     
    </div>
  )
}
export default Card
