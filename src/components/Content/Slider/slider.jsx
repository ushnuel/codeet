import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../assets/images/codeetBanner.png';
import BackgroundImage from '../../UI/Background/backgroundImage';
import Section from '../Section/section';
import Button from '../../UI/Button/button';
import './slider.css';

const slider = () => {
  return (
    <Section className='banner-container'>
      <BackgroundImage image={banner} className='banner'>
        <div className='banner-writeup'>
          <h1>
            Let’s <span>develop</span> digital products <br /> people will love!
          </h1>
          <h2>We provide the best development experience for our clients.</h2>
          <div>
            <Link to='/service'>
              <Button className='btn banner-button show-on-scroll'>Check our services</Button>
            </Link>
          </div>
        </div>
      </BackgroundImage>
    </Section>
  );
};

export default slider;
