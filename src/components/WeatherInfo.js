'use strict';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WeatherItem from './WeatherItem';

class WeatherInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { weathermap : { cityName, main = {}, cod, message = ""}} = this.props;
        const {temp, humidity, pressure} = main;
        console.log(cityName, main, cod, message );
        if (cityName) {
            return (
                <div>
                    <WeatherItem description="City is : " property={cityName} />
                    <WeatherItem description="Current Temperature is : " property={temp} />
                    <WeatherItem description="Hamidity : " property={humidity} />
                    <WeatherItem description="Pressure : " property={pressure} />
                </div>
            );
        };
        return (
            <div>
                {message}
            </div>
        );
    }
};

WeatherInfo.propTypes = {
    cityName : PropTypes.string,
    temp     : PropTypes.number,
    humidity : PropTypes.number,
    pressure : PropTypes.number
};

export default WeatherInfo;