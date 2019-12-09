import React from 'react';
import image from '../../assets/images/icon1.png';
import Card from '../Cards/card';
import Section from '../Section/section';

const services = () => (
  <Section className='section-container'>
    <h2>Createev's Services</h2>
    <div className='card-container'>
      <Card
        image={image}
        className='read-more'
        description='Creeteev is envisioned to providing the best web development experience.'
      >
        Web Development
      </Card>
      <Card
        image={image}
        className='read-more'
        description='We build and maintain robust and scalable mobile apps for our clients.'
      >
        Mobile App Development
      </Card>
      <Card
        image={image}
        className='read-more'
        description='We utilize the latest trends in technology for our unique and innovative designs.'
      >
        UX/UI Designs
      </Card>
      <Card
        image={image}
        className='read-more'
        description='We provide our clients with the best digital marketing service experience.'
      >
        Digital Marketing and SEO
      </Card>
    </div>
  </Section>
);

export default services;
