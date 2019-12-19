import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faWhatsapp,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import './footer.css';
import { faMapMarkerAlt, faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const footer = () => (
  <section className='footer'>
    <div className='location-phone'>
      <p>
        <span>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
        </span>
        No 18 Lambe Street, Ago Palace Way, Okota Lagos
      </p>
      <p>
        <span>
          <FontAwesomeIcon icon={faEnvelope} />
        </span>
        <a href='mailto:info@createev.com'>info@codeet.com</a>
      </p>
      <p>
        <span>
          <FontAwesomeIcon icon={faPhoneAlt} />
        </span>
        +234 813 737 0891
      </p>
    </div>
    <hr className='hr' />
    <div className='social'>
      <FontAwesomeIcon icon={faFacebook} />
      <FontAwesomeIcon icon={faWhatsapp} />
      <FontAwesomeIcon icon={faLinkedin} />
      <FontAwesomeIcon icon={faInstagram} />
    </div>
    <p>&copy; 2019 - 2020 Codeet software solutions. All rights reserved</p>
  </section>
);

export default footer;
