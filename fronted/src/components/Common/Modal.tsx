import React from 'react';
import Portal from './Portal';

interface ModalInterface {
  children: React.ReactNode;
  onClose: () => void;
}

const Modal: React.FC<ModalInterface> = ({ onClose, children }) => {
  return (
    // @ts-ignore
    <Portal>
      <div className='mod'>
        <header className='mod-header'>
          <button className='btn light mod-footer__button' onClick={onClose}>
            &#10006;
          </button>
        </header>
        <main className='mod-body'>{children}</main>
        <footer className='mod-footer'>
          <button onClick={onClose} className='btn light mod-footer__button'>
            Close
          </button>
        </footer>
      </div>
    </Portal>
  );
};

export default Modal;
