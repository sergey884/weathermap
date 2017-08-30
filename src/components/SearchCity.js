'use strict';
import React, { Component } from "react";

class SearchCity extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const { getWeatherRequest } = this.props;
        getWeatherRequest(e.target.value);
    }

    render() {
        return (
            <div>
                <div>Observable weather</div>
                <input type="text" id="search" onChange={this.handleChange} />
            </div>
        );
    }
};

export default SearchCity;
