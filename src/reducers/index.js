'use strict';
import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import weathermap from './weathermap';
import { fetchWeatherEpic } from '../actions/weathermap';

export const rootReducer = combineReducers({
   weathermap
});

export const rootEpic = combineEpics(
  fetchWeatherEpic
);
