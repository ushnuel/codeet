import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import AcademyCard from '../Content/Cards/academyCard';
import BackgroundImage from '../UI/Background/backgroundImage';
import Section from '../Content/Section/section';
import image1 from '../assets/images/image1.jpg';
import image2 from '../assets/images/image2.jpg';
import image3 from '../assets/images/image3.jpg';
import image4 from '../assets/images/image4.jpg';
import image5 from '../assets/images/image5.jpg';
import Footer from '../Footer/footer';
import Header from '../About/header/header';
import image from '../assets/images/gradient.png';
import Button from '../UI/Button/button';
import Spinner from '../UI/Spinner/spinner';
import './academy.css';

export default class Academy extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.timer = 100;
    this.forward = true;
    this.index = 0;
    this.text = '{{ Welcome to our Academy Page. Explore our courses below }}';
    this.state = {
      courses: '',
      text: '',
    };
  }
  selectCourseHandler = (id) => {
    this.props.history.push('/course/' + id);
  };
  textHandler = () => {
    const text = this.text.substring(0, this.index);
    if (this.index > this.text.length + 10) this.forward = false;
    if (this.index <= 0) this.forward = true;
    this.forward ? this.index++ : this.index--;

    if (this._isMounted) this.setState({ text });
    setTimeout(this.textHandler, this.timer);
  };
  componentDidMount() {
    this._isMounted = true;
    this.textHandler();

    axios
      .get('https://codeet.herokuapp.com/api/v1/courses')
      .then(({ data }) => {
        this.setState({ courses: data.data });
      })
      .catch((err) => console.log(err.message));
  }
  render() {
    let academy = null;

    if (this.state.courses) {
      let img = null;

      academy = this.state.courses.map((course) => {
        if (course.id === '1') img = image1;
        if (course.id === '2') img = image2;
        if (course.id === '3') img = image3;
        if (course.id === '4') img = image4;
        if (course.id === '5') img = image5;

        return (
          <AcademyCard
            image={img}
            key={course.id}
            days={course.days + ' Days'}
            heading={course.title}
            className='bootcamp-card'
            className1='bootcamp-card-image'
            Onclick={() => this.selectCourseHandler(course.id)}
          >
            <p className='level'>{course.level}</p>
            <p>{course.description}</p>
          </AcademyCard>
        );
      });
    } else {
      academy = <Spinner />;
    }

    return (
      <>
        <Section className='academy-section'>
          <BackgroundImage
            image={image}
            className='image-txt academy-image-txt'
            text={this.state.text}
          />

          <section className='bootcamp-section'>
            <h1>Our coding Bootcamp</h1>
            <div className='bootcamp-container'>{academy}</div>
          </section>
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
            <Button className='btn service-btn'>Lets Talk</Button>
          </Link>
        </Header>
        <Footer />
      </>
    );
  }

  componentWillUnmount() {
    this._isMounted = false;
  }
}
