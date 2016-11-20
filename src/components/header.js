import React, { Component } from 'react';
import { action as toggleMenu } from 'redux-burger-menu';
import store from '../store';

class Header extends Component {
  toggleSidebar() {
    store.dispatch(toggleMenu(true));
  }

  render() {
    return (
      <div>
        <button
          className="btn btn-default"
          onClick={this.toggleSidebar}
        >
          Menu
        </button>
      </div>
    );
  }
}

export default Header;
