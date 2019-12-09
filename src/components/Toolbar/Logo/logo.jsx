import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../assets/images/codeetgreener.png';
import './logo.css';

const logo = () => {
  return (
    <Link to='/'>
      <img src={image} alt='logo' className='logo' />
    </Link>
  );
};

export default logo;
