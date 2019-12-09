import React, { Component } from 'react';
import axios from 'axios';

import checkInput from './checkInput';
import Aux from '../../../hoc/Auxi/auxe';
import Spinner from '../Spinner/submitSpinner';

import './form.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.state = {
      name: '',
      email: '',
      phone: '',
      error: '',
      spin: false,
      course: '',
      response: '',
    };
  }
  InputFieldHandler = () => {
    const input = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const smallTags = document.getElementsByTagName('small');
    const submitButton = document.getElementById('button');
    const elementType = [input, email, phone];

    checkInput(elementType, submitButton, smallTags);
  };
  nameChangeHandler = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  emailChangeHandler = (event) => {
    this.setState({
      email: event.target.value,
    });
  };
  phoneChangeHandler = (event) => {
    this.setState({
      phone: event.target.value,
    });
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
    const { name, email, phone, course } = this.state;
    const course_id = course.id;
    const quote = {
      name,
      email,
      phone,
      course_id,
    };

    axios
      .post('https://codeet.herokuapp.com/api/v1/courses/register', quote)
      .then((data) => {
        this.setState({ response: data, spin: false });
      })
      .catch((error) => {
        this.setState({ error: error.response, spin: false });
      });

    this.setState({
      name: '',
      email: '',
      phone: '',
    });
    this.setState({ spin: true });
  };
  timeOutHandler = () => {
    const input = document.getElementsByClassName('result')[0];
    if (input) {
      input.style.transition = 'opacity 2s ease-out';
      input.style.opacity = '1';
      input.style.opacity = '0';
    }
    setTimeout(this.timeOutHandler, 12000);
  };
  componentDidMount() {
    this._isMounted = true;
    this.timeOutHandler();
    this.setState({ course: this.props.course });
  }
  render() {
    const { response, error, spin, course } = this.state;
    let output = '';
    let result = null;
    let course_title = '';

    if (error) {
      result = <div className='error result'>{error.data.error}</div>;
    }
    if (response.length !== 0) {
      result = <div className='success result'>{response.data.message}</div>;
    }
    !spin ? (output = 'Register') : (output = <Spinner />);

    if (course) {
      course_title = course.title;
    }

    return (
      <Aux>
        {result}

        <form className='Form' onSubmit={this.onSubmitHandler}>
          <label htmlFor='name'>
            Full Name <span>*</span>
          </label>
          <input
            type='text'
            id='name'
            required
            onBlur={this.InputFieldHandler}
            onChange={this.nameChangeHandler}
            value={this.state.name}
          />
          <small>Please fill out this field</small>

          <label htmlFor='email'>
            Email Address <span>*</span>
          </label>
          <input
            type='email'
            id='email'
            required
            onBlur={this.InputFieldHandler}
            onChange={this.emailChangeHandler}
            value={this.state.email}
          />
          <small>Email address is required</small>

          <label htmlFor='course'>
            Course <span>*</span>
          </label>
          <input type='text' id='course' value={course_title} disabled={true} />

          <label htmlFor='phone'>
            Phone Number <span>*</span>
          </label>
          <input
            type='number'
            id='phone'
            size='11'
            required
            onBlur={this.InputFieldHandler}
            onChange={this.phoneChangeHandler}
            value={this.state.phone}
          />
          <small>Your phone number is required</small>

          <button className='submitBtn' id='button' disabled={true} type='submit'>
            {output}
          </button>
        </form>
      </Aux>
    );
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
}

export default Form;
