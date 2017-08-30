'use strict';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class WeatherItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { description, property } = this.props;
        return (
            <div>
                {description} {property}
            </div>
        );
    }
};

WeatherItem.propTypes = {
    description : PropTypes.string.isRequired,
    property : PropTypes.oneOfType([
                        PropTypes.string,
                        PropTypes.number
                ]).isRequired
};

export default WeatherItem;