import React from 'react';
import ReactDOM from 'react-dom';
import '../assets/styles/sass/components/Modal.scss';

const Modal = (props) => {
  if (!props.isOpen) {
    return null;
  }
  return (
    ReactDOM.createPortal(
      <div className='modal'>
        <div className='modal__container'>
          <button type='button' onClick={props.onClose}>
            <i className='fas fa-times'> </i>
          </button>
          algo de contenido
          {props.children}
        </div>
      </div>,
      document.getElementById('modal'),
    )
  );
};

export default Modal;
