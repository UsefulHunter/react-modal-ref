import React, { useState, useImperativeHandle, forwardRef } from 'react';
import ReactDOM, { createPortal } from 'react-dom';

const Modal = forwardRef((props, ref) => {
  const [display, setDisplay] = useState(true);

  useImperativeHandle(ref, () => {
    return {
      openModal: () => open(),
      close: () => close(),
    };
  });

  const open = () => {
    setDisplay(true);
  };

  const close = () => {
    setDisplay(false);
  };

  if (display) {
    return createPortal(
      <div className={'modal-wrapper'}>
        <div onClick={close} className={'modal-backdrop'} />
        <div className={'modal-box'}>{props.children}</div>
      </div>,
      document.getElementById('modal-root')
    );
  }

  return null;
});

export default Modal;
