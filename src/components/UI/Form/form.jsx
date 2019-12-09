import React, { Component } from 'react';
import axios from 'axios';

import checkInput from './checkInput';
import Aux from '../../../hoc/Auxe/aux';
import Spinner from '../Spinner/submitSpinner';

import './form.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.state = {
      name: '',
      email: '',
      company: '',
      selectedOption: '',
      message: '',
      response: '',
      error: '',
      spin: false,
    };
  }
  InputFieldHandler = () => {
    const input = document.getElementById('name');
    const email = document.getElementById('email');
    const platform = document.getElementById('platform');
    const message = document.getElementById('message');
    const smallTags = document.getElementsByTagName('small');
    const submitButton = document.getElementById('button');
    const elementType = [input, email, platform, message];

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
  companyChangeHandler = (event) => {
    this.setState({
      company: event.target.value,
    });
  };
  selectChangeHandler = (event) => {
    this.setState({
      selectedOption: event.target.value,
    });
  };
  messageChangeHandler = (event) => {
    this.setState({
      message: event.target.value,
    });
  };
  onSubmitHandler = (event) => {
    event.preventDefault();
    const { name, email, selectedOption, company, message } = this.state;
    const quote = {
      name,
      email,
      selectedOption,
      company,
      message,
    };

    axios
      .post('https://codeet.herokuapp.com/api/v1/message/send', quote)
      .then((data) => {
        this.setState({ response: data, spin: false });
      })
      .catch((error) => {
        this.setState({ error: error.response, spin: false });
      });

    this.setState({
      name: '',
      email: '',
      company: '',
      message: '',
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
  }
  render() {
    const { response, error, spin } = this.state;
    let output = null;
    let result = null;

    if (error) {
      result = <div className='error result'>{error.data.error}</div>;
    }
    if (response.length !== 0) {
      result = <div className='success result'>{response.data.message}</div>;
    }
    !spin ? (output = 'Submit') : (output = <Spinner />);

    return (
      <Aux>
        {result}

        <form className='Form' onSubmit={this.onSubmitHandler}>
          <label htmlFor='name'>
            Your Name <span>*</span>
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

          <label htmlFor='company'>Company name or website (if any)</label>
          <input
            type='text'
            id='company'
            onChange={this.companyChangeHandler}
            value={this.state.company}
          />

          <label htmlFor='platform'>Where did you hear about Codeet?</label>
          <select
            name='platform'
            id='platform'
            required
            onBlur={this.InputFieldHandler}
            onChange={this.selectChangeHandler}
          >
            <option value='selectOption'>Select an option</option>
            <option value='socialMedia'>Social media</option>
            <option value='googleSearch'>Google search</option>
            <option value='other'>Other</option>
          </select>
          <small>Please select an option</small>

          <label htmlFor='message'>
            Message <span>*</span>
          </label>
          <textarea
            name='message'
            id='message'
            cols='30'
            rows='10'
            required
            placeholder='what can we do for you?'
            onBlur={this.InputFieldHandler}
            onChange={this.messageChangeHandler}
            value={this.state.message}
          />
          <small>Write to us about your project, we will get back to you</small>

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
