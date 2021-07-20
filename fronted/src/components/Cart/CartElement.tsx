import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { deleteProduct } from '../../redux/cart/cart_actions';

interface CartElementInterface {
  id: number;
  count: number;
  title: string;
  number: number;
  size: string;
  price: number;
}

const CartElement: React.FC<CartElementInterface> = ({ count, title, number, size, price, id }) => {
  const dispatch = useDispatch();
  const onClick = (selectProduct: number): void => {
    dispatch(deleteProduct(selectProduct));
  };

  return (
    <tr>
      <th scope='row'>{number}</th>
      <td>
        <NavLink to='/products/1'>{title}</NavLink>
      </td>
      <td>{size}</td>
      <td>{count}</td>
      <td>{price} руб.</td>
      <td>{price * count} руб.</td>
      <td>
        <button onClick={() => onClick(id)} type='button' className='btn btn-outline-danger btn-sm'>
          Удалить
        </button>
      </td>
    </tr>
  );
};

export default CartElement;
