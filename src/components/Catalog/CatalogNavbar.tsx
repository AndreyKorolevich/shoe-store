import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import cn from 'classnames'
import { InterfaceCategory } from '../../redux/interfaces/interface'
import { FETCH_CERTAIN_SHOES } from '../../redux/actions/actions'
import { getSelectedCategory } from '../../redux/selectors/catalog_selectors'

interface InterfaceCatalogNavbar {
  categories: Array<InterfaceCategory>
}

const CatalogNavbar = ({ categories }: InterfaceCatalogNavbar) => {
  const selectCategory = useSelector(getSelectedCategory)
  const dispatch = useDispatch()

  const changeSelectedCategory = (id: number) => {
    if (selectCategory !== id) {
      dispatch({
        type: FETCH_CERTAIN_SHOES,
        payload: {
          id,
        },
      })
    }
  }

  return (
    <ul className='catalog-categories nav justify-content-center'>
      <li className='nav-item'>
        <button
          type='button'
          className={cn('btn btn-outline-secondary', {
            active: selectCategory === 0,
          })}
          onClick={() => changeSelectedCategory(0)}>
          Все
        </button>
      </li>
      {categories.map(e => (
        <li key={e.id} className='nav-item'>
          <button
            type='button'
            className={cn('btn btn-outline-secondary', {
              active: selectCategory === e.id,
            })}
            onClick={() => changeSelectedCategory(e.id)}>
            {e.title}
          </button>
        </li>
      ))}
    </ul>
  )
}

export default CatalogNavbar
