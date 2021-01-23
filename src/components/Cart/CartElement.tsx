import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { DELETE_PRODUCT } from '../../redux/actions/actions'

interface CartElementInterface {
  id: number
  count: number
  title: string
  number: number
  size: string
  price: number
}

const CartElement = ({ count, title, number, size, price, id }: CartElementInterface) => {
  const dispatch = useDispatch()
  const deleteProduct = (selectProduct: number): void => {
    dispatch({
      type: DELETE_PRODUCT,
      payload: {
        id: selectProduct,
      },
    })
  }

  return (
    <tr>
      <th scope='row'>{number}</th>
      <td>
        <NavLink to='/products/1.html'>{title}</NavLink>
      </td>
      <td>{size}</td>
      <td>{count}</td>
      <td>{price} руб.</td>
      <td>{price * count} руб.</td>
      <td>
        <button onClick={() => deleteProduct(id)} type='button' className='btn btn-outline-danger btn-sm'>
          Удалить
        </button>
      </td>
    </tr>
  )
}

export default CartElement
