import React from 'react';
import './NavigationItem.css';

const navigationItem = ({ children, link }) => {
  return (
    <li className='NavigationItem'>
      <a href={link}>{children}</a>
    </li>
  );
};

export default navigationItem;
