import React, { Component } from 'react';
import Aux from '../Auxe/aux';
import './layout.css';
import Toolbar from '../../components/Toolbar/toolbar';
import SideDrawer from '../../components/Toolbar/SideDrawer/sideDrawer';

class Layout extends Component {
  state = {
    showSideDrawer: false,
    showContactForm: false,
  };
  closeSideDrawerHandler = () => {
    this.setState({ showSideDrawer: false });
  };
  openSideDrawerHandler = () => {
    this.setState({ showSideDrawer: true });
  };

  render() {
    return (
      <Aux>
        <Toolbar openSideDrawer={this.openSideDrawerHandler} />
        <SideDrawer
          onCancel={this.closeSideDrawerHandler}
          isClose={this.state.showSideDrawer}
        />
        <main className='contents'>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
