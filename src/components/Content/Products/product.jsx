import React from 'react';
import { Link } from 'react-router-dom';
import BackgroundImage from '../../UI/Background/backgroundImage';
import image1 from '../../assets/images/image1.jpg';
import Section from '../Section/section';
import './product.css';

const product = () => {
  return (
    <Section className='section-container'>
      <h2>Featured Works</h2>
      <div className='product-container'>
        <div className='products'>
          <BackgroundImage
            image={image1}
            className='image-card'
          ></BackgroundImage>
          <BackgroundImage
            image={image1}
            className='image-card'
          ></BackgroundImage>
          <BackgroundImage
            image={image1}
            className='image-card'
          ></BackgroundImage>
          <BackgroundImage
            image={image1}
            className='image-card'
          ></BackgroundImage>
        </div>
      </div>
      <p>
        <Link to='/about-us'>
          <button className='btn'>View More</button>
        </Link>
      </p>
    </Section>
  );
};

export default product;
