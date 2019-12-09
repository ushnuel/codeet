import React, { Component } from 'react';
import axios from 'axios';

import Spinner from '../UI/Spinner/spinner';
import BackgroundImage from '../UI/Background/backgroundImage';
import image from '../assets/images/gradient.png';
import Footer from '../Footer/footer';
import Modal from '../../components/UI/Modal/modal';
import Form from '../UI/Form/registerForm';
import CheckCourse from './Courses/checkCourse';

import './courseDetail.css';

class AcademyDetail extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.timer = 100;
    this.forward = true;
    this.index = 0;
    this.text = '';
    this.state = {
      loadedCourse: null,
      text: '',
      showRegisterForm: false,
    };
  }
  openRegisterForm = () => {
    this.setState({ showRegisterForm: true });
  };
  closeRegisterForm = () => {
    this.setState({ showRegisterForm: false });
  };
  textHandler = () => {
    if (this.state.loadedCourse) {
      const { title } = this.state.loadedCourse;
      const text = title.substring(0, this.index);

      if (this.index > title.length + 10) this.forward = false;
      if (this.index <= 0) this.forward = true;

      this.forward ? this.index++ : this.index--;
      this.setState({ text });
    }
    setTimeout(this.textHandler, this.timer);
  };

  componentDidMount() {
    this.textHandler();

    const { id } = this.props.match.params;
    if (id) {
      axios
        .get('https://codeet.herokuapp.com/api/v1/courses/' + id)
        .then(({ data }) => {
          this.setState({ loadedCourse: data.data });
        })
        .catch((error) => console.log(error.message));
    }
    this._isMounted = true;
  }
  render() {
    const { loadedCourse } = this.state;
    let display = null;
    let form = null;

    let text = null;
    if (loadedCourse) {
      text = this.state.text;
      form = <Form course={loadedCourse} />;
    }
    if (loadedCourse) {
      let course;
      course = <CheckCourse loadedCourse={loadedCourse} register={this.openRegisterForm} />;
      display = (
        <section className='courseSection'>
          <BackgroundImage image={image} text={text} className='image-txt academy-image-txt' />
          {course}
        </section>
      );
    } else {
      display = <Spinner />;
    }
    return (
      <>
        <Modal show={this.state.showRegisterForm} onCancel={this.closeRegisterForm}>
          {form}
        </Modal>
        <div>
          <div className='sidebarCourseContainer'>
            <section className='sidebarCourse'>
              <h4>
                <a href='#overview'>Overview</a>
              </h4>
              <h4>
                <a href='#package'>What you will learn</a>
              </h4>
              <h4>
                <a href='#requirement'>Requirements</a>
              </h4>
              <h4>
                <a href='#courseCost'>Training Cost</a>
              </h4>
              <h4>
                <a href='#faqs'>FAQS</a>
              </h4>
            </section>
            {display}
          </div>
        </div>
        <Footer />
      </>
    );
  }

  componentWillUnmount() {
    this._isMounted = false;
  }
}

export default AcademyDetail;
