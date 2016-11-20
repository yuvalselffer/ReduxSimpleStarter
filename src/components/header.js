import React, { Component } from 'react';
import { action as toggleMenu } from 'redux-burger-menu';
import store from '../store';

class Header extends Component {
  toggleSidebar() {
    store.dispatch(toggleMenu(true));
  }

  render() {
    return (
      <header className="container-fluid">
        <div className="burger">
          <a onClick={this.toggleSidebar}>
            <span className="fa fa-bars fa-2x" />
          </a>
        </div>
      </header>
    );
  }
}

export default Header;
