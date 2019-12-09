import React from 'react';
import BackgroundImage from '../../UI/Background/backgroundImage';
import './header.css';

const header = ({ image, page, className, children, className1 }) => {
  return (
    <section className={className}>
      <BackgroundImage image={image} className={className1}>
        <h1>{page}</h1>
        {children}
      </BackgroundImage>
    </section>
  );
};

export default header;
