import React from 'react'
import { NavLink } from 'react-router-dom'

const Cart = () => {
  return (
    <>
      <section className='cart'>
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
            <tr>
              <th scope='row'>1</th>
              <td>
                <NavLink to='/products/1.html'>Босоножки MYER</NavLink>
              </td>
              <td>18 US</td>
              <td>1</td>
              <td>34 000 руб.</td>
              <td>34 000 руб.</td>
              <td>
                <button type='button' className='btn btn-outline-danger btn-sm'>
                  Удалить
                </button>
              </td>
            </tr>
            <tr>
              <td colSpan={5} className='text-right'>
                Общая стоимость
              </td>
              <td>34 000 руб.</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section className='order'>
        <h2 className='text-center'>Оформить заказ</h2>
        <div className='card cart'>
          <form className='card-body'>
            <div className='form-group'>
              <label htmlFor='phone'>
                Телефон
                <input className='form-control' id='phone' placeholder='Ваш телефон' type='text' />
              </label>
            </div>
            <div className='form-group'>
              <label htmlFor='phone'>
                Адрес доставки
                <input
                  className='form-control'
                  placeholder='Адрес доставки'
                  id='address'
                  type='text'
                />
              </label>
            </div>
            <div className='form-group form-check'>
              <label className='form-check-label' htmlFor='agreement'>
                <input type='checkbox' className='form-check-input' id='agreement' />
                Согласен с правилами доставки
              </label>
            </div>
            <button type='submit' className='btn btn-outline-secondary'>
              Оформить
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Cart
