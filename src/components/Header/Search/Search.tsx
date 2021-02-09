import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import cn from 'classnames';
import { getSelectedCategory } from '../../../redux/selectors/catalog_selectors';
import {changeCatalogShoes, searchShoes} from '../../../redux/actions/actions';

const Search = () => {
  const [isShowForm, setIsShowForm] = useState(false);
  const [value, setValue] = useState('');
  const selectCategory: number = useSelector(getSelectedCategory);
  const history = useHistory();
  const dispatch = useDispatch();

  const search = () => {
    dispatch(changeCatalogShoes(value));
    dispatch(searchShoes(selectCategory, value));
  };

  const openForm = () => {
    if (value.trim() === '') {
      setIsShowForm(!isShowForm);
    } else {
      search();
      history.push('catalog.html');
    }
    return 1;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    search();
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  return (
    <>
      <button
        onClick={openForm}
        aria-label='Save'
        className={cn('header-controls-pic header-controls-search', {
          theme: isShowForm,
        })}
        type='button'
      />
      {isShowForm && (
        <form
          data-id='search-form'
          className='header-controls-search-form form-inline'
          onSubmit={handleSubmit}>
          <input className='form-control' placeholder='Поиск' onChange={onChange}
                 value={value} />
        </form>
      )}
    </>
  );
};

export default Search;
