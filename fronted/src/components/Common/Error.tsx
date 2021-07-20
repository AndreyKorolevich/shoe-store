import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getError } from '../../redux/error/error_selector';
import Modal from './Modal';
import { closeError } from '../../redux/error/error_actions';

const Error: React.FC = () => {
  const error = useSelector(getError);
  const dispatch = useDispatch();

  const onCancel = () => {
    dispatch(closeError());
  };

  return (
    <>
      {error && (
        <Modal onClose={onCancel}>
          <p className='error'>
            Извините, произошла ошибка! Попробуйте перезагрузить страницу или повторить ваши действия чуть
            позже.
          </p>
        </Modal>
      )}
    </>
  );
};

export default Error;
