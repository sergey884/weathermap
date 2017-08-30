'use strict';
import React, { Component } from "react";
import SearchCity from './SearchCity';
import WeatherInfo from './WeatherInfo';
import PropTypes from 'prop-types';

class Weathermap extends Component {
    render() {
      const {
          weathermap ,
          weathermapActions : { getWeatherRequest }
      } = this.props;
      return (
            <div>
                <SearchCity getWeatherRequest={getWeatherRequest} />
                <WeatherInfo weathermap={weathermap} />
            </div>
        );
    }
}

Weathermap.propTypes = {
    getWeatherRequest : PropTypes.func,
    weathermap : PropTypes.object
};

export default Weathermap;
