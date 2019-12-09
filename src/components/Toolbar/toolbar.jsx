import React from 'react';
import NavigationItems from './NavigationItems/NavigationItems';
import Logo from './Logo/logo';
import Hamburger from './Hamburger/hamburger';
import './Toolbar.css';

const toolbar = ({ openSideDrawer }) => {
  return ( 
    <header className="Toolbar">
      <Hamburger clicked={openSideDrawer} />
      <Logo />
      <nav className="DesktopView">
        <NavigationItems />
      </nav>
    </header>
  );
};
 
export default toolbar;