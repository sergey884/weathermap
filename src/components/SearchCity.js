'use strict';
import React, { Component } from "react";

class SearchCity extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const { getWeatherRequest } = this.props;
      //  const url = `http://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&units=imperial&appid=ca3f6d6ca3973a518834983d0b318f73`;
      //  console.log(e.target.value);
      //  console.log(getWeatherRequest);
        getWeatherRequest(e.target.value);
    }

    render() {
        return (
            <div>
            <input type="text" onChange={this.handleChange} />
            </div>
        );
    }
};

export default SearchCity;
