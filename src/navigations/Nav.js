import {FiHeart} from 'react-icons/fi'
import {AiOutlineAccountBook, AiOutlineShoppingCart, AiOutlineUserAdd} from 'react-icons/ai'

import './Nav.css'
import React from 'react'

 function Navigation() {
  return (
    <nav>
      <div className='nav-container'>
        <input type='text' className='search-input' placeholder='Enter your search shoes.' />
  
      </div>

      <div className='profile-container'>
        <a href='#' >
          <FiHeart className='nav-icons' />
        </a>

        <a href='#' >
          <AiOutlineShoppingCart className='nav-icons' />
        </a>
        <a href='#' >
          <AiOutlineShoppingCart className='nav-icons' />
        </a>

      </div>
        
      
    </nav>
  )
}

export default Navigation
