import React from 'react';
import { Link } from 'react-router-dom';
import Aux from '../../hoc/Auxe/aux';
import {
  Services,
  Slider,
  Academy,
  Expertise,
  Footer,
} from '../Content/';
import Header from '../About/header/header';
import image from '../assets/images/gradient3.png';
import './content.css';

const content = () => {
  return (
    <Aux>
      <Slider />
      <section className='container-main'>
        <Services />
        <Academy />
        <Expertise />
      </section>
      <Header
        image={image}
        page='Hire us for your project'
        className='service-header'
        className1='createev-header service-match-container'
      >
        <p>
          Let us handle your project professionally <br /> We can’t wait to
          start working with you!
        </p>
        <Link to='/contact-us'>
          <button className='btn service-btn'>Request a quote</button>
        </Link>
      </Header>
      <Footer />
    </Aux>
  );
};

export default content;
