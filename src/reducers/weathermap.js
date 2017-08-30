'use strict';
import * as type from "../constants/weathermap";

const initialState = {};

const weathermap = (state = initialState, action) => {
      switch(action.type) {
          case type.FETCH_WEATHER_REQUEST :
              return state;
          case type.FETCH_WEATHER_FAILURE :
                console.log(action.payload);
              return action.payload;
          case type.FETCH_WEATHER_SUCCESS :
              let cityName = action.payload.name;
              let main = action.payload.main;
              let weather = action.payload.weather;
              let wind = action.payload.wind;
              let cityWeather = {
                  cityName,
                  main,
                  weather,
                  wind
              };
              return cityWeather;
          default :
              return state;
      }
};

export default weathermap;
