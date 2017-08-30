'use strict';
import * as type from "../constants/weathermap";
import { Observable } from 'rxjs/Observable';
import { ajax } from 'rxjs/observable/dom/ajax';
import 'rxjs';

export const getWeatherRequest = (searchText) => ({
    type : type.FETCH_WEATHER_REQUEST,
    payload : searchText
});

export const failWeatherRequest = (errorObj) => ({
    type : type.FETCH_WEATHER_FAILURE,
    payload : errorObj
});


export const receiveWeatherRequest = (cityWeather) => ({
    type : type.FETCH_WEATHER_SUCCESS,
    payload : cityWeather
});

export const fetchWeatherEpic = action$ => 
  action$.ofType(type.FETCH_WEATHER_REQUEST)
    .mergeMap((action) => ajax({
          url : `http://api.openweathermap.org/data/2.5/weather?q=${action.payload}&units=imperial&appid=ca3f6d6ca3973a518834983d0b318f73`,
          crossDomain: true,
          method: 'GET',
          responseType: 'json',
        })
        .map(response => {
              if (response.status == 200) {
                  return receiveWeatherRequest(response.response);
              }
        })
        .takeUntil(action$.ofType(type.FETCH_WEATHER_REQUEST))
        .catch(error => Observable.of(
            failWeatherRequest(error.xhr.response)
        ))
    );
