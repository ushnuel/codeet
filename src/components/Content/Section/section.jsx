import React from 'react';
import './section.css';

const section = ({ children, className }) => (
  <section className={className}>{children}</section>
);

export default section;
