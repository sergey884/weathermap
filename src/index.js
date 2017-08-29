'use strict';
import React, { Component } from "react";
import { render } from "react-dom";
import Weathermap from "./containers/Weathermap";
import configureStore from "./store/configureStore";

const store = configureStore();

render(
    <Weathermap />,
    document.getElementById('root')
);