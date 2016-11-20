import React, { Component } from 'react';
import ConnectSlider from './connect_slider';
import BurgerMenu from './burger_menu';


class Menu extends Component {
  render() {
    return (
      <BurgerMenu customBurgerIcon={false}>
        <div>
          <a href="#test">Menu Item 1</a>
          <ConnectSlider />
        </div>
      </BurgerMenu>
    );
  }
}

export default Menu;
