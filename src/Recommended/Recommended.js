import React from 'react'
import './Recommended.css'
import '../index.css'
import Buttons from '../compnonents/Buttons'

 function Recommended({handleClick}) {
  return (
    <div>
      <h2 className='recommended-title'>Recommended</h2>
     <div className='recommended-flex'>
     <Buttons onClickHandler={handleClick} value="" title="All Products" />

     
      <Buttons onClickHandler={handleClick} value="Nike" title="Nike" />
      <Buttons onClickHandler={handleClick} value="Adidas" title="Adidas" />
      <Buttons onClickHandler={handleClick} value="Puma" title="Puma" />
      <Buttons onClickHandler={handleClick} value="Vans" title="Vans" />


     </div>

      
    </div>
  )
}
export default Recommended