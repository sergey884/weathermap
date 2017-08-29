'use strict';
import * as type from "../constants/weathermap";

export const getWeatherRequest = () => ({
    type : type.FETCH_WEATHER_REQUEST
});

export const failWeatherRequest = (errorObj) => ({
    type : type.FETCH_WEATHER_FAILURE,
    payload : errorObj
});


export const receiveWeatherRequest = (cityWeather) => ({
    type : type.FETCH_WEATHER_SUCCESS,
    payload : cityWeather
});