import React from 'react'
import cn from 'classnames'
import { useSelector, useDispatch } from 'react-redux'
import { getSelectedSize } from '../../../redux/selectors/card_selector'
import { CHANGE_SIZE } from '../../../redux/actions/actions'

const Sizes = ({ sizes }: any) => {
  const selectedSize: string = useSelector(getSelectedSize)
  const dispatch = useDispatch()
  const changeSize = (size: string): void => {
    dispatch({
      type: CHANGE_SIZE,
      payload: {
        size,
      },
    })
  }

  const sortSizes = sizes
    .filter(e => e.avalible)
    .map(e => (
      <button
        type='button'
        key={e.size}
        onClick={() => changeSize(e.size)}
        className={cn('catalog-item-size', {
          selected: selectedSize === e.size,
        })}>
        {e.size}
      </button>
    ))

  return (
    <p>
      Размеры в наличии: {sortSizes.length === 0 ? 'Извините доступных размеров нет в наличии' : sortSizes}
    </p>
  )
}

export default Sizes
