import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import './NavigationItems.css';

const navigationItems = () => {
  return (
    <ul className='NavigationItems'>
      <NavigationItem link='/'>Home</NavigationItem>
      <NavigationItem link='/academy'>Academy</NavigationItem>
      <NavigationItem link='/service'>Services</NavigationItem>
      <NavigationItem link='/about-us'>About Us</NavigationItem>
      <NavigationItem link='/contact-us'>
        <button className='contactBtn'>Contact Us</button>
      </NavigationItem>
    </ul>
  );
};

export default navigationItems;
