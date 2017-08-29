'use strict';
import React, { Component } from "react";
import { Provider } from "react-redux";
import { render } from "react-dom";
import Weathermap from "./containers/Weathermap";
import configureStore from "./store/configureStore";

const store = configureStore();

render(
    <Provider store={store}>
        <Weathermap />
    </Provider>,
    document.getElementById('root')
);