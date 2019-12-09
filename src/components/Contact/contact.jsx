import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

import question from '../assets/icons/question.png';
import support from '../assets/icons/support.png';
import classroom from '../assets/icons/classroom.png';
import Aux from '../../hoc/Auxe/aux';
import Header from '../About/header/header';
import Footer from '../Footer/footer';
import Section from '../Content/Section/section';
import image from '../assets/images/gradient.png';
import ProductCard from '../Content/Cards/productCard';
import Button from '../UI/Button/button';
import Modal from '../../components/UI/Modal/modal';
import Form from '../../components/UI/Form/form';
import './contact.css';

class Contact extends Component {
  state = {
    showContactForm: false,
  };
  openContactFormHandler = () => {
    this.setState({ showContactForm: true });
  };
  closeContactFormHandler = () => {
    this.setState({ showContactForm: false });
  };
  render() {
    return (
      <Aux>
        <Modal
          show={this.state.showContactForm}
          onCancel={this.closeContactFormHandler}
        >
          <Form />
        </Modal>
        <Header
          image={image}
          page='Contact us'
          className='contact-header'
          className1='createev-header'
        >
          <p>
            Our customer service is very reliable; we are here to serve you best
          </p>
        </Header>
        <Section className='contact-us-container'>
          <div className='contact-us'>
            <ProductCard
              image={support}
              className='contact-card'
              className2='contact-img-cont'
              className3='contact-img'
            >
              <h3>Request a quote</h3>
              <p>
                You can request for a quote by just hitting the button. We
                typically reply immediately.
              </p>
              <button onClick={this.openContactFormHandler} className='btn'>
                Request a quote
              </button>
            </ProductCard>
            <ProductCard
              image={classroom}
              className='contact-card'
              className2='contact-img-cont'
              className3='contact-img'
            >
              <h3>Academy Inquiry</h3>
              <p>
                Join our team of developers by registering with us. You can
                become a very good developer from the scratch
              </p>
              <Link to='/academy'>
                <Button className='btn'>Academy Inquiry</Button>
              </Link>
            </ProductCard>
            <ProductCard
              image={question}
              className='contact-card'
              className2='contact-img-cont'
              className3='contact-img'
            >
              <h3>Customer support</h3>
              <p>
                Get in touch with us for assistance. We will get back to you as
                soon as possible
              </p>
              <Button className='btn'>
                <a href='mailto: hello@createev.com'>Customer support </a>
              </Button>
            </ProductCard>
          </div>
        </Section>
        <Section className='contact-phone-email'>
          <h1>
            <span>
              <FontAwesomeIcon icon={faPhoneAlt} />
            </span>
            <a href='tel: 08137370891'>+234 81 373 70891</a>
          </h1>
          <h1>
            <span>
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            hello@createev.com
          </h1>
        </Section>
        <Section className='after-contact-container'>
          <h1>What happens after you contact us?</h1>
          <div className='after-contact'>
            <div className='contact-step'>
              <div className='step-number'>1</div>
              <div className='step-description'>
                Once you have contacted us, we will reach out to you and find a
                good opportunity to discuss your challenge and goals in details.
              </div>
            </div>
            <div className='contact-step'>
              <div className='step-number'>2</div>
              <div className='step-description'>
                We provide you with a detailed project estimation (services
                required, price, duration, team composition).
              </div>
            </div>
            <div className='contact-step'>
              <div className='step-number'>3</div>
              <div className='step-description'>
                We are ready to start working with you once we agree on the
                proposal and sign the contract.
              </div>
            </div>
          </div>
        </Section>
        <Footer />
      </Aux>
    );
  }
}

export default Contact;
