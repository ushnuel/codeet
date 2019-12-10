import React, { Component } from 'react';
import './index.css';

class Animate extends Component {
  show = (rect) => {
    const innerHeight = window.innerHeight || document.documentElement.clientHeight;
    return (
      (rect.top <= 0 && rect.bottom >= 0) ||
      (rect.bottom >= innerHeight && rect.top <= innerHeight) ||
      (rect.top >= 0 && rect.bottom <= innerHeight)
    );
  };
  scroll = (cb) => {
    window.requestAnimationFrame(cb);
  };
  loop = () => {
    const elementsToShow = document.querySelectorAll('.show-on-scroll');
    elementsToShow.forEach((element) => {
      if (this.isElementInViewPort(element)) {
        element.classList.add('is-visible');
      } else {
        element.classList.remove('is-visible');
      }
    });
    this.scroll(this.loop);
  };
  isElementInViewPort = (element) => {
    var rect = element.getBoundingClientRect();
    return this.show(rect);
  };
  componentDidMount() {
    this.loop();
  }
  render() {
    return <></>;
  }
}

export default Animate;
