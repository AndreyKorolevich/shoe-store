import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';
import { InterfaceCategory } from '../../interfaces/interface';
import { getSearch, getSelectedCategory } from '../../redux/catalog/catalog_selectors';
import { fetchCertainShoes } from '../../redux/catalog/catalog_actions';

interface InterfaceCatalogNavbar {
  categories: Array<InterfaceCategory>;
}

const CatalogNavbar: React.FC<InterfaceCatalogNavbar> = ({ categories }) => {
  const selectCategory: number = useSelector(getSelectedCategory);
  const search: string = useSelector(getSearch);
  const dispatch = useDispatch();

  const changeSelectedCategory = (id: number) => {
    if (selectCategory !== id) {
      dispatch(fetchCertainShoes(id, search));
    }
  };

  return (
    <ul className='catalog-categories nav justify-content-center'>
      <li className='nav-item'>
        <button
          type='button'
          className={cn('btn btn-outline-secondary', { active: selectCategory === 0 })}
          onClick={() => changeSelectedCategory(0)}>
          Все
        </button>
      </li>
      {categories.map(e => (
        <li key={e.id} className='nav-item'>
          <button
            type='button'
            className={cn('btn btn-outline-secondary', { active: selectCategory === e.id })}
            onClick={() => changeSelectedCategory(e.id)}>
            {e.title}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default CatalogNavbar;
