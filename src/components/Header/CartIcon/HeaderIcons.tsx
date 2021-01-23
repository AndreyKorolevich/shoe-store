import React from 'react'
import { NavLink } from 'react-router-dom'

const HeaderIcons = () => {
  return (
    <div className='header-controls-pics'>
      <NavLink to='/cart.html'>
        <div className='header-controls-pic header-controls-cart'>
          <div className='header-controls-cart-full'>1</div>
          <div className='header-controls-cart-menu' />
        </div>
      </NavLink>
    </div>
  )
}

export default HeaderIcons
