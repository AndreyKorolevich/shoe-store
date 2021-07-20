import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Preloader from './Common/Preloader';
import SalesHit from './SalesHit';
import { getLoadingHit, getSalesHit } from '../redux/catalog/catalog_selectors';
import { InterfaceCard } from '../interfaces/interface';
import Catalog from './Catalog/Catalog';
import { fetchSalesHit } from '../redux/catalog/catalog_actions';

const Main: React.FC = () => {
  const isLoadingHit: boolean = useSelector(getLoadingHit);
  const salesHit: Array<InterfaceCard> = useSelector(getSalesHit);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSalesHit());
  }, [dispatch]);

  return (
    <>
      <section className='top-sales'>
        <h2 className='text-center'>Хиты продаж!</h2>
        {isLoadingHit ? <Preloader /> : <SalesHit salesHit={salesHit} />}
      </section>
      <Catalog showSearchForm={false} />
    </>
  );
};

export default Main;
