import React from 'react';
import Portal from './Portal';
import { useSelector, useDispatch } from 'react-redux';
import { getError } from '../../redux/selectors/error_selector';

const Error = () => {
  const error = useSelector(getError);
  const dispatch = useDispatch();

  const onCancel = () => {
    dispatch({
      type: 'CLOSE_ERROR',
    });
  };

  return (
    <>
      {error && (
        <Portal>
          <div className='error'>
            <header className='error-header'>
              <button className='btn light error-footer__button' onClick={onCancel}>
                &#10006;
              </button>
            </header>
            <main className='error-body'>
              <p className='error-body__warn'>
                Извините, произошла ошибка! Попробуйте перезагрузить страницу или повторить ваши действия чуть
                позже.
              </p>
            </main>
            <footer className='error-footer'>
              <button onClick={onCancel} className='btn light error-footer__button'>
                Close
              </button>
            </footer>
          </div>
        </Portal>
      )}
    </>
  );
};

export default Error;
