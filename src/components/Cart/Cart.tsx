import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSelectShoes } from '../../redux/selectors/cart_selector';
import CartForm from './CartForm';
import CartElement from './CartElement';
import { SelectCardInterface } from '../../interfaces/interface';
import {SET_CART_FROM_LOCALSTORAGE, setCartFromLocalstorage} from '../../redux/actions/actions';
import SuccessOrder from "./SuccessOrder";

const Cart: React.FC = () => {
  const selectShoes: Array<SelectCardInterface> = useSelector(getSelectShoes);
  const dispatch = useDispatch();

  useEffect(() => {
    const cart = localStorage.getItem('cart');
    if (cart) {
      dispatch(setCartFromLocalstorage(cart));
    }
  }, [dispatch]);

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
                key={e.id}
                id={e.id}
                number={i + 1}
                title={e.title}
                price={e.price}
                count={e.count}
                size={e.selectedSize}
              />
            ))}
            <tr>
              <td colSpan={5} className='text-right'>
                Общая стоимость
              </td>
              <td>
                {selectShoes.reduce(
                  (sum: number, e: SelectCardInterface): number => sum + e.price * e.count,
                  0
                )}{' '}
                руб.
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <CartForm />
      <SuccessOrder/>
    </>
  );
};

export default Cart;
