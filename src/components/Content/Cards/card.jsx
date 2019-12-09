import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import './card.css';

const card = ({ image, children, description, className }) => (
  <div className='card'>
    <div className='card-top'>
      <img src={image} alt='our services' style={{ width: '100%' }} />
    </div>
    <h4>{children}</h4>
    <p>{description}</p>
    <div className={className}>
      <p>
        <span>
          <FontAwesomeIcon icon={faChevronCircleRight} className='icon' />
        </span>
        <a href='/about-us'> Learn more</a>
      </p>
    </div>
  </div>
);

export default card;
