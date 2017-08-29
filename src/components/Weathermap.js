'use strict';
import React, { Component } from "react";
import SearchCity from './SearchCity';

class Weathermap extends Component {
    render() {
      console.log(this.props);
      const { weathermapActions : { getWeatherRequest }} = this.props;
      console.log(getWeatherRequest);
        return (
            <div>
                <SearchCity getWeatherRequest={getWeatherRequest} />
            </div>
        );
    }
}

export default Weathermap;
