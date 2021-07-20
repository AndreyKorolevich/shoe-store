import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Modal from '../Common/Modal';
import { getShowSuccessOrder } from '../../redux/cart/cart_selector';
import { showSuccessOrder } from '../../redux/cart/cart_actions';

const SuccessOrder: React.FC = () => {
  const isShowSuccessOrderShoes = useSelector(getShowSuccessOrder);
  const dispatch = useDispatch();

  const onCancel = () => {
    dispatch(showSuccessOrder());
  };

  return (
    <>
      {isShowSuccessOrderShoes && (
        <Modal onClose={onCancel}>
          <p className='success'>Спасибо за заказ, наш менеджер скоро свяжется с вами!</p>
        </Modal>
      )}
    </>
  );
};

export default SuccessOrder;
