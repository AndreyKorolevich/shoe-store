import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCount } from '../../../redux/selectors/card_selector'
import { CHANGE_COUNT } from '../../../redux/actions/actions'

const Count = () => {
  const count: number = useSelector(getCount)
  const dispatch = useDispatch()
  const changeCount = (param: string): void => {
    if (param === 'decrease' && count > 1) {
      dispatch({
        type: CHANGE_COUNT,
        payload: {
          count: count - 1,
        },
      })
    } else if (param === 'increase' && count < 10) {
      dispatch({
        type: CHANGE_COUNT,
        payload: {
          count: count + 1,
        },
      })
    }
  }
  return (
    <p>
      Количество:{' '}
      <span className='btn-group btn-group-sm pl-2'>
        <button onClick={() => changeCount('decrease')} type='button' className='btn btn-secondary'>
          -
        </button>
        <span className='btn btn-outline-primary'>{count}</span>
        <button onClick={() => changeCount('increase')} type='button' className='btn btn-secondary'>
          +
        </button>
      </span>
    </p>
  )
}

export default Count
