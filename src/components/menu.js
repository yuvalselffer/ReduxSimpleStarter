import React, { Component } from 'react';
import ConnectSlider from './connect_slider';
import BurgerMenu from './burger_menu';

class Menu extends Component {
  responseFacebook(response) {
    console.log(response);
  }

  render() {
    return (
      <BurgerMenu customBurgerIcon={false}>
        <div>
          <a href="#test">Menu Item 1</a>
          <ConnectSlider
            socialId="1657832644469954"
            language="en_US"
            scope="public_profile,email"
            responseHandler={this.responseFacebook}
            xfbml
            version="v2.8"
          />
        </div>
      </BurgerMenu>
    );
  }
}

export default Menu;
