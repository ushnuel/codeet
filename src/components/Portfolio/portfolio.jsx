import React from 'react';
import { Link } from 'react-router-dom';
import Aux from '../../hoc/Auxi/auxe';
import image from '../assets/images/gradient1.jpg';
import Header from '../About/header/header';
import Footer from '../Footer/footer';

const portfolio = () => {
  return (
    <Aux>
      <Header
        image={image}
        page='Our Portfolio'
        className='about-header'
        className1='createev-header'
      >
        <p>Various projects we have done</p>
      </Header>
      <Header
        image={image}
        page='Need our services?'
        className='service-header'
        className1='createev-header service-match-container'
      >
        <p>We promise to give you the best experience</p>
        <Link to='/contact-us'>
          <button className='btn service-btn'>Let us know</button>
        </Link>
      </Header>
      <Footer />
    </Aux>
  );
};

export default portfolio;
