import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { InterfaceCard, InterfaceCategory } from '../../interfaces/interface';
import Preloader from '../Common/Preloader';
import CatalogNavbar from './CatalogNavbar';
import Card from './Card/Card';
import CatalogSearch from './CatalogSearch';
import { fetchCatalog, fetchCertainShoes, loadAdditionalShoes } from '../../redux/catalog/catalog_actions';
import {
  getCatalog,
  getCategories,
  getLoadingAdditionalShoes,
  getLoadingCatalog,
  getOffset,
  getSelectedCategory,
  getShowLoadElse,
} from '../../redux/catalog/catalog_selectors';

interface CatalogInterface {
  showSearchForm: boolean;
}

const Catalog: React.FC<CatalogInterface> = ({ showSearchForm = true }) => {
  const isLoadingCatalog: boolean = useSelector(getLoadingCatalog);
  const isLoadingAdditionalShoes: boolean = useSelector(getLoadingAdditionalShoes);
  const catalog: Array<InterfaceCard> = useSelector(getCatalog);
  const categories: Array<InterfaceCategory> = useSelector(getCategories);
  const selectCategory: number = useSelector(getSelectedCategory);
  const showLoadElse: boolean = useSelector(getShowLoadElse);
  const offset: number = useSelector(getOffset);
  const dispatch = useDispatch();

  useEffect((): void => {
    dispatch(fetchCatalog(selectCategory));
  }, [dispatch, selectCategory]);

  useEffect((): void => {
    dispatch(fetchCertainShoes(0, ''));
  }, [dispatch]);

  const loadElse = (): void => {
    dispatch(loadAdditionalShoes(selectCategory, offset));
  };

  return (
    <section className='catalog'>
      <h2 className='text-center'>Каталог</h2>
      {showSearchForm && <CatalogSearch selectCategory={selectCategory} />}
      {isLoadingCatalog ? (
        <Preloader />
      ) : (
        <>
          <CatalogNavbar categories={categories} />
          <div className='row'>
            {catalog.map(e => (
              <Card key={e.id} id={e.id} price={e.price}
src={e.images[0]} title={e.title} />
            ))}
          </div>
          <div className='text-center additional'>
            {showLoadElse && (
              <button
                type='button'
                className='btn btn-outline-primary'
                onClick={loadElse}
                disabled={isLoadingAdditionalShoes}>
                Загрузить ещё
              </button>
            )}
            {isLoadingAdditionalShoes && <Preloader />}
          </div>
        </>
      )}
    </section>
  );
};

export default Catalog;
