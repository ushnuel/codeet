import React from 'react';
import Backdrop from '../../UI/Backdrop/backdrop';
import Aux from '../../../hoc/Auxi/auxe';
import NavigationItems from '../NavigationItems/NavigationItems';
import './sideDrawer.css';

const sideDrawer = ({ isClose, onCancel }) => {
  let attatchedClasses = 'SideDrawer Close';
  if (isClose) {
    attatchedClasses = 'SideDrawer Open';
  }
  return (
    <Aux>
      <Backdrop close={onCancel} show={isClose} />
      <section className={attatchedClasses}>
        <div className='createev'>
          <h4>Createev</h4>
        </div>
        <hr className='hr' />
        <div className='items'>
          <NavigationItems />
        </div>
      </section>
    </Aux>
  );
};

export default sideDrawer;
