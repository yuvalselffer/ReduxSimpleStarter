import React, { Component } from 'react';
import Menu from './menu';
import Header from './header';

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        
        <Header />

        <div className="container-fluid">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
