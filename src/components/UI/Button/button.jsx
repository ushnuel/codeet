import React from 'react';
import './button.css';

const button = ({ className, children }) => {
  return <button className={className}>{children}</button>;
};

export default button;
