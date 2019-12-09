import React from 'react';
import Aux from '../../../hoc/Auxi/auxe';
import Backdrop from '../Backdrop/backdrop';
import './modal.css';

const modal = ({ children, show, onCancel }) => {
  const style = {
    transform: show ? 'translateY(0)' : 'translateY(-100vh)',
    opacity: show ? '1' : '0',
  };
  return (
    <Aux>
      <Backdrop show={show} close={onCancel} />
      <div className='Modal' style={style}>
        {children}
      </div>
    </Aux>
  );
};

export default modal;
