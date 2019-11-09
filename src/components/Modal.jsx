import React from 'react';
import ReactDOM from 'react-dom';
import '../assets/styles/sass/components/Modal.scss';

const Modal = (props) => {
  const {modalOpen, onClose} = props;
  if (!modalOpen) {
    return null;
  }
  return (
    ReactDOM.createPortal(
      <div className='modal'>
        <div className='modal__container'>
          <button type='button' onClick={onClose} className='modal__close'>
            <i className='fas fa-times'> </i>
          </button>
          {props.children}
        </div>
      </div>,
      document.getElementById('modal'),
    )
  );
};

export default Modal;
