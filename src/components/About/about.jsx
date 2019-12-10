import React from 'react';
import {
  faShieldAlt,
  faArchway,
  faExternalLinkAlt,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Footer from '../Footer/footer';
import Header from './header/header';
import Section from '../Content/Section/section';
import image from '../assets/images/gradient.png';
import ExpertiseCard from '../Content/Cards/expertiseCard';
import Button from '../UI/Button/button';
import './about.css';
import Aux from '../../hoc/Auxi/auxe';

const about = () => {
  return (
    <Aux>
      <Header image={image} page='About us' className='about-header' className1='createev-header'>
        <p>
          Createev is committed to providing the best development <br />
          experience for our clients
        </p>
      </Header>
      <Section className='about-us-container'>
        <section className='card-about'>
          <h1>We are creative</h1>
          <p>
            A top-of-the-line Lagos based tech company passionate about building great software
            products and offering digital marketing services for SMEs and Corporetions.
          </p>
          <p>
            Ingenuity has its base at CODEET. Our team of experienced developers, designers and
            digital strategists are always ready to offer you exceptional strategy, eye-catching
            designs, full stack engineering, mobile/web app develpment, and digital marketing
            consulting.
          </p>
          <p>
            We love our work, and the love we have for our customers knows not bounds! We are your
            partners, so be rest assured that we will work with you ever step of the way to design,
            deliver and support high-performing digital solutions that avail you a significant
            business advantage. Take a leap with us, we will make it your best decision.
          </p>
        </section>

        <div className='about-us'>
          <h1>How we approach work</h1>

          <ExpertiseCard tech={faArchway} className1='card-about' className2='tech codeet-tech'>
            <h3>Inclusive</h3>
            <p>
              In our product design process, we carefully our customers' business needs; cultural
              and social aspect of their businesses into consideration. We leave no stone unturned.
            </p>
          </ExpertiseCard>
          <ExpertiseCard tech={faUsers} className1='card-about' className2='tech codeet-tech'>
            <h3>Collaborative</h3>
            <p>
              In our product design process, we carefully our customers' business needs; cultural
              and social aspect of their businesses into consideration. We leave no stone unturned.
            </p>
          </ExpertiseCard>
          <ExpertiseCard tech={faShieldAlt} className1='card-about' className2='tech codeet-tech'>
            <h3>Even</h3>
            <p>
              In our product design process, we carefully our customers' business needs; cultural
              and social aspect of their businesses into consideration. We leave no stone unturned.
            </p>
          </ExpertiseCard>
          <ExpertiseCard
            tech={faExternalLinkAlt}
            className1='card-about'
            className2='tech codeet-tech'
          >
            <h3>Explorative</h3>
            <p>
              In our product design process, we carefully our customers' business needs; cultural
              and social aspect of their businesses into consideration. We leave no stone unturned.
            </p>
          </ExpertiseCard>
        </div>
      </Section>
      <Header
        image={image}
        page='Sounds like a match?'
        className='service-header'
        className1='createev-header service-match-container'
      >
        <p>
          If you think that we’d be a good fit to solve your challenge, just contact us! <br /> We
          can’t wait to start working with you!
        </p>
        <Link to='/contact-us'>
          <Button className='btn service-btn show-on-scroll'>Lets Talk</Button>
        </Link>
      </Header>
      <Section className='about-us-container'>
        <div className='card-about'>
          <h2>Our vision</h2>
          <p>To become the biggest tech company in Africa</p>
        </div>
        <div className='card-about'>
          <h2>Mission</h2>
          <p>
            To consistently build the best software products and services that will meet our
            customers' needs.
          </p>
        </div>
        <div className='card-about'>
          <h2>Values</h2>
          <p>
            Our values have brought us this far, and will always keep us on the right path. <br />
            We are passionate, ethical and humble. Ready to solve problems smartly.
          </p>
        </div>
      </Section>
      <Footer />
    </Aux>
  );
};

export default about;
