'use strict'
import React from 'react';
import { shallow, render, mount } from 'enzyme';
import { Provider } from "react-redux";
import { mockStore } from "<mocks>/mockStore";
import Weathermap from '<components>/Weathermap';
import WeatherInfo from '<components>/WeatherInfo';

describe("Weathermap component test", () => {
    test("Weathermap snapshot", () => {
        const getWeatherRequestMock = jest.fn();

        const props = {
            weathermap : {},
            weathermapActions : { 
            	getWeatherRequest: getWeatherRequestMock
            }
        }
        let wrapper = shallow(<Weathermap {...props}/>);
		console.log(wrapper.find('div').length);
		expect(wrapper.find('div').length).toEqual(1);
		const newProps = {
			weathermap : {
				cityName: "London"
			},
			weathermapActions : { 
				getWeatherRequest: getWeatherRequestMock
			}
		}
		// wrapper.setProps({...newProps});
        // expect(wrapper).toMatchSnapshot();
    })

    test("Full rendering",  () => {
    	const initialState = {
    		weathermap: {}
    	}
    	const getWeatherRequestMock = jest.fn();
    	const store = mockStore( initialState );
    	const props = {
    		weathermap: {},
    		weathermapActions : {}
    	};
    	const wrapper = mount(
    		<Provider store={store}>
    			<Weathermap {...props} />
    		</Provider>
    	);

    	const newProps = {
    		weathermap : {
    			cityName: "London"
    		},
    		weathermapActions : { 
    			getWeatherRequest: getWeatherRequestMock
    		}
    	}
    	expect(wrapper.find(WeatherInfo).length).toEqual(1);
    	wrapper.setProps({...newProps});
    	console.log(wrapper.find(WeatherInfo).length)
    })
});