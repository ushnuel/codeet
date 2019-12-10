import React from 'react';
import './card.css';

const card = ({ children, image, className, className2, className3 }) => (
  <div className={`${className} show-on-scroll`}>
    <div className={className2}>
      <img src={image} alt='' className={className3} />
    </div>
    <div>{children}</div>
  </div>
);

export default card;
