import React, { Component } from 'react';
import Slider from 'react-slider';

class ConnectSlider extends Component {
    render() {
      return (
      <div className="connect-slider">
        <div className="slider-background">
          Slide to Connect
        </div>
        <div className="slider-container">
          <Slider
            min={0}
            max={100}
            step={1}
            className="horizontal-slider"
          >
            <div className="connect-slider-handle">
              <span className="fa fa-facebook" />
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}

export default ConnectSlider;
