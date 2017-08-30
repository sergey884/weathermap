'use strict'
import React from 'react';
import { shallow } from 'enzyme';
import Weathermap from './Weathermap';

describe("Weathermap component test", () => {
    it("Weathermap snapshot", () => {
        const weathermapActions = {
            getWeatherRequest :   jest.fn()
        }
        let wrapper = shallow(<Weathermap weathermapActions={weathermapActions}/>);
        expect(wrapper).toMatchSnapshot();
    })
});