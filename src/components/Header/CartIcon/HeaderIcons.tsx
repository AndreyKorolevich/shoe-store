import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { SelectCardInterface } from '../../../interfaces/interface';
import { getSelectShoes } from '../../../redux/cart/cart_selector';

const HeaderIcons = () => {
  const selectShoes: Array<SelectCardInterface> = useSelector(getSelectShoes);
  return (
    <div className='header-controls-pics'>
      <NavLink to='/cart'>
        <div className='header-controls-pic header-controls-cart'>
          {selectShoes.length > 0 && <div className='header-controls-cart-full'>{selectShoes.length}</div>}
          <div className='header-controls-cart-menu' />
        </div>
      </NavLink>
    </div>
  );
};

export default HeaderIcons;
