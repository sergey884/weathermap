'use strict';
import React from 'react';
import { shallow } from 'enzyme';
import SearchCity from '<components>/SearchCity';

describe('Testing SearchCity component', () => {
    let props, wrapper;

    beforeEach(() => {
        props = {
            onChange : jest.fn()
        };

        wrapper = shallow(<SearchCity {...props} />);
    });

    it('should contain input(type text)', () => {
        expect(wrapper.find('input').length).toEqual(1);
    });

});
