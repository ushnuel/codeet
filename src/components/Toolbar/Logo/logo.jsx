import React from 'react';
import image from '../../assets/images/codeetgreener.png';
import './logo.css';

const logo = () => {
  return (
    <a href='/'>
      <img src={image} alt='logo' className='logo' />
    </a>
  );
};

export default logo;
