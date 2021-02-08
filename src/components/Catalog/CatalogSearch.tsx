import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CHANGE_CATALOG_SEARCH, SEARCH_SHOES } from '../../redux/actions/actions';
import { getSearch } from '../../redux/selectors/catalog_selectors';

interface CatalogSearchInterface {
  selectCategory: number;
}

const CatalogSearch: React.FC<CatalogSearchInterface> = props => {
  const value: string = useSelector(getSearch);
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    dispatch({
      type: SEARCH_SHOES,
      payload: {
        search: value,
        selectCategory: props.selectCategory,
      },
    });
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch({
      type: CHANGE_CATALOG_SEARCH,
      payload: {
        search: e.target.value,
      },
    });
    dispatch({
      type: SEARCH_SHOES,
      payload: {
        search: e.target.value,
        selectCategory: props.selectCategory,
      },
    });
  };

  return (
    <form className='catalog-search-form form-inline' onSubmit={handleSubmit}>
      <input name='search' className='form-control' value={value}
placeholder='Поиск' onChange={onChange} />
    </form>
  );
};

export default CatalogSearch;
