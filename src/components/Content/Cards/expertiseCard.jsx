import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './card.css';

const card = ({ children, tech, className1, className2 }) => (
  <div className={`${className1} show-on-scroll`}>
    <div className={className2}>
      <FontAwesomeIcon icon={tech} />
    </div>
    <div>{children}</div>
  </div>
);

export default card;
