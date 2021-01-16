import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Preloader from './Common/Preloader'
import SalesHit from './SalesHit'
import { FETCH_CATALOG, FETCH_SALES_HIT } from '../redux/actions/actions'
import {
  getCatalog,
  getCategories,
  getLoadingCatalog,
  getLoadingHit,
  getSalesHit,
} from '../redux/selectors/catalog_selectors'
import { InterfaceCard } from '../redux/interfaces/interface'
import Catalog from './Catalog/Catalog'

const Main = () => {
  const isLoadingHit: boolean = useSelector(getLoadingHit)
  const salesHit: Array<InterfaceCard> = useSelector(getSalesHit)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({
      type: FETCH_SALES_HIT,
    })
  }, [dispatch])

  return (
    <>
      <section className='top-sales'>
        <h2 className='text-center'>Хиты продаж!</h2>
        {isLoadingHit ? <Preloader /> : <SalesHit salesHit={salesHit} />}
      </section>
      <Catalog />
    </>
  )
}

export default Main
