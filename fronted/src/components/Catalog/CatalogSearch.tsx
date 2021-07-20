import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSearch } from '../../redux/catalog/catalog_selectors';
import { changeCatalogShoes, searchShoes } from '../../redux/catalog/catalog_actions';

interface CatalogSearchInterface {
  selectCategory: number;
}

const CatalogSearch: React.FC<CatalogSearchInterface> = ({ selectCategory }) => {
  const value: string = useSelector(getSearch);
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    dispatch(searchShoes(selectCategory, value));
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(changeCatalogShoes(e.target.value));
    dispatch(searchShoes(selectCategory, e.target.value));
  };

  return (
    <form className='catalog-search-form form-inline' onSubmit={handleSubmit}>
      <input name='search' className='form-control' value={value}
placeholder='Поиск' onChange={onChange} />
    </form>
  );
};

export default CatalogSearch;
