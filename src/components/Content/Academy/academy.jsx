import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import image from '../../assets/images/image5.jpg';
import Aux from '../../../hoc/Auxi/auxe';
import BackgroundImage from '../../UI/Background/backgroundImage';
import './academy.css';

class Academy extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.timer = 150;
    this.text = '{{ Join our Academy and learn how to code }}';
    this.index = 0;
    this.forward = true;
    this.state = {
      text: '',
    };
  }
  textHandler = () => {
    const text = this.text.substring(0, this.index);
    if (this.index > this.text.length + 15) {
      this.forward = false;
    }

    if (this.index <= 0) {
      this.forward = true;
    }
    this.forward ? this.index++ : this.index--;
    if (this._isMounted) this.setState({ text });

    setTimeout(this.textHandler, this.timer);
  };

  componentDidMount() {
    this._isMounted = true;
    document.title = 'Codeet | Our academy page';
    this.textHandler();
  }
  render() {
    return (
      <Aux>
        <section className='academy-container show-on-scroll'>
          <h1>Join our Academy</h1>
          <BackgroundImage image={image} text={this.state.text} className='image-txt' />
          <div className='txt-container'>
            <h3>Join our Academy</h3>
            <p>
              We train and develop young people who are passionate about software development.{' '}
              <br />
              <br />
              Our team are very experience and can make you a world class developer when you join
              our academy.
            </p>
            <br />
            <p>
              <Link to='/academy'>
                <button className='service-btn'>Learn More</button>
              </Link>
            </p>
          </div>
        </section>
      </Aux>
    );
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
}

export default Academy;
