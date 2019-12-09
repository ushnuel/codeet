import React from 'react';
import BackgroundImage from '../../UI/Background/backgroundImage';

const academyCard = ({
  image,
  className,
  className1,
  heading,
  children,
  days,
  Onclick,
}) => {
  return (
    <section className={className} onClick={Onclick}>
      <BackgroundImage image={image} className={className1}>
        {days}
      </BackgroundImage>
      <div className='academy-lower-section'>
        <h2>{heading}</h2>
        {children}
        <button className='btn academyBtn' onClick={Onclick}>
          Learn More
        </button>
      </div>
    </section>
  );
};

export default academyCard;
