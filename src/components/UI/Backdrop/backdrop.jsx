import React from 'react';
import './backdrop.css';

const backDrop = ({ show, close }) => {
  return show ? <div className='Backdrop' onClick={close} /> : null;
};

export default backDrop;
