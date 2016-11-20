import React, { Component } from 'react';
import Menu from './menu';
import Header from './header';

class App extends Component {
  render() {
    return (
      <div>
        <Menu customBurgerIcon={false}>
          <div>
            <a href="#test">Menu Item 1</a>
          </div>
        </Menu>

        <div className="container-fluid">
          <Header />
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
