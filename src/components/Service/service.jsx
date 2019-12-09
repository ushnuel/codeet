import React from 'react';
import { Link } from 'react-router-dom';
import image from '../assets/images/gradient1.jpg';
import webDesign from '../assets/icons/webDesign.png';
import webDev from '../assets/icons/webDev.png';
import seo from '../assets/icons/seo.png';
import mobileApp from '../assets/icons/mobileApp.png';
import Header from '../About/header/header';
import Aux from '../../hoc/Auxi/auxe';
import Section from '../Content/Section/section';
import ProductCard from '../Content/Cards/productCard';
import Footer from '../Footer/footer';
import BackgroundImage from '../UI/Background/backgroundImage';
import './services.css';

const service = () => {
  return (
    <Aux>
      <Header
        image={image}
        page='Createev Services'
        className='service-header'
        className1='createev-header'
      ></Header>
      <Section className='service-container'>
        <BackgroundImage image={image} className='service-background-image' />
        <div className='service'>
          <h2>Get your project ready with our world class developers</h2>
          <ul>
            <li>
              <p>Unique and customized website design</p>
            </li>
            <li>
              <p>Cost effective solution for mobile app development</p>
            </li>
            <li>
              <p>Latest, state-of-the-art web development solutions</p>
            </li>
          </ul>
          <Link to='/contact-us'>
            <button className='btn service-btn service-btn1'>Contact us</button>
          </Link>
        </div>
      </Section>
      <Section className='service-products'>
        <ProductCard
          image={webDesign}
          className='service-card'
          className2='contact-img-cont'
          className3='contact-img'
        >
          <h1>UI/UX Designs</h1>
          <p>
            Website design is where our art meets technology. Speaking of creative, customized,
            unique and innovative web design solutions, we are your best choice. <br /> Our team of
            experienced graphics designers are ready to craft the best eye-catching,
            eazy-to-navigate, top quality website designs that will meet your business requirements.
            We utilize the latest trends in website UI/UX design to turn your idea into a standard
            product.
          </p>
          <h3>Our work finds space in these industries and more</h3>
          <ul>
            <li>
              <p>Medical/Health/Fitness</p>
            </li>
            <li>
              <p>Banking and Finance</p>
            </li>
            <li>
              <p>Retail and Ecommerce</p>
            </li>
            <li>
              <p>Travel and Tourism</p>
            </li>
            <li>
              <p>Agriculture</p>
            </li>
            <li>
              <p>Sports and Entertainment</p>
            </li>
          </ul>
        </ProductCard>
        <ProductCard
          image={mobileApp}
          className='service-card'
          className2='contact-img-cont'
          className3='contact-img'
        >
          <h1>Mobile App Development</h1>
          <p>
            Tell us about your fascinating business idea, we will effectively turn it into a
            full-fledged software product, in the form of a mobile application software. We assure
            you of a cost effective solution for your mobile app development needs. <br /> We
            seriously value long term relationships with our clients, and always provide them
            quality services on a given timeline. We make provision for sufficient testing and
            prototyping until everything is perfect and up to mark.
          </p>
          <h3>We provide unique and innovative designs like</h3>
          <ul>
            <li>
              <p>Business Directory App Development</p>
            </li>
            <li>
              <p>Fantasy Sports App Development</p>
            </li>
            <li>
              <p>Retail and Ecommerce App Development</p>
            </li>
            <li>
              <p>City Navigation App Development</p>
            </li>
            <li>
              <p>Language Learning Mobile App</p>
            </li>
            <li>
              <p>Ticket Booking and Car Sharing App </p>
            </li>
          </ul>
        </ProductCard>
        <ProductCard
          image={webDev}
          className='service-card'
          className2='contact-img-cont'
          className3='contact-img'
        >
          <h1>Web Development</h1>
          <p>
            Createev is envisioned to providing the latest, state-of-the-art web development
            solutions to businesses at a competitive price. We heartly value the worth of your
            investments, which is why our professional web development team is here to provide you
            with a host of top notch services. <br /> Our passion is blended in aesthetics, stylish
            and robust website designs that will efficiently elevate your business to unprecedented
            heights of success.
          </p>
          <h3>We design and create scalable softwares and much more</h3>
          <ul>
            <li>
              <p>Corporate Websites</p>
            </li>
            <li>
              <p>Blog Development</p>
            </li>
            <li>
              <p>Community Based Websites</p>
            </li>
            <li>
              <p>Multi-functional Website</p>
            </li>
            <li>
              <p>Catalog Websites</p>
            </li>
            <li>
              <p>Social networking Websites</p>
            </li>
          </ul>
        </ProductCard>
        <ProductCard
          image={seo}
          className='service-card'
          className2='contact-img-cont'
          className3='contact-img'
        >
          <h1>Digital Marketing and SEO</h1>
          <p>
            Lets rally a pool of clientele to your door steps. A strong customer base and continous
            revenue streams is the beating heart of every business. We provide you with the best
            digital marketing services needed to take your business to the next level. <br /> Our
            wealth of experience in digital marketing speaks volume. Give us a buzz, and we take
            care of all the digital solutions for your brand, be it designs, content or social media
            strategy
          </p>
          <h3>We are prepared to meet your needs in these key areas of Digital Marketing</h3>
          <ul>
            <li>
              <p>Facebook Advertising</p>
            </li>
            <li>
              <p>Twitter Email Marketing</p>
            </li>
            <li>
              <p>Google Adwords</p>
            </li>
            <li>
              <p>Instagram content management</p>
            </li>
            <li>
              <p>Youtube Page management</p>
            </li>
            <li>
              <p>Search Engine Optimization (SEO)</p>
            </li>
          </ul>
        </ProductCard>
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
          <button className='btn service-btn'>Lets Talk</button>
        </Link>
      </Header>
      <Section className='after-contact-container'>
        <h1>What happens after you contact us?</h1>
        <div className='after-contact'>
          <div className='contact-step'>
            <div className='step-number'>1</div>
            <div className='step-description'>
              Once you have contacted us, we will reach out to you and find a good opportunity to
              discuss your challenge and goals in details.
            </div>
          </div>
          <div className='contact-step'>
            <div className='step-number'>2</div>
            <div className='step-description'>
              We provide you with a detailed project estimation (services required, price, duration,
              team composition).
            </div>
          </div>
          <div className='contact-step'>
            <div className='step-number'>3</div>
            <div className='step-description'>
              We are ready to start working with you once we agree on the proposal and sign the
              contract.
            </div>
          </div>
        </div>
      </Section>
      <Footer />
    </Aux>
  );
};

export default service;
