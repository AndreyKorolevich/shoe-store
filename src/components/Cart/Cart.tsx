import React from 'react'
import { useSelector } from 'react-redux'
import { getSelectShoes } from '../../redux/selectors/cart_selector'
import CartForm from './CartForm'
import { SelectCardInterface } from '../../redux/interfaces/interface'
import CartElement from './CartElement'

const Cart = () => {
  const selectShoes: Array<SelectCardInterface> = useSelector(getSelectShoes)

  return (
    <>
      <section>
        <h2 className='text-center'>Корзина</h2>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Название</th>
              <th scope='col'>Размер</th>
              <th scope='col'>Кол-во</th>
              <th scope='col'>Стоимость</th>
              <th scope='col'>Итого</th>
              <th scope='col'>Действия</th>
            </tr>
          </thead>
          <tbody>
            {selectShoes.map((e, i) => (
              <CartElement
                key={e.id} id={e.id} number={i + 1}
                title={e.title} price={e.price} count={e.count}
                size={e.selectedSize}
              />
            ))}
            <tr>
              <td colSpan={5} className='text-right'>
                Общая стоимость
              </td>
              <td>{selectShoes.reduce((sum, e) => sum + e.price * e.count, 0)} руб.</td>
            </tr>
          </tbody>
        </table>
      </section>
      <CartForm />
    </>
  )
}

export default Cart
