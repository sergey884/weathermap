'use strict';
import React from 'react';
import { shallow } from 'enzyme';
import SearchCity from './SearchCity';

describe('participation button component', () => {
    let props, wrapper;

    beforeEach(() => {
        props = {
            onChange : jest.fn()
        };

        wrapper = shallow(<SearchCity {...props} />);
    });

    it('should contain input(type text)', () => {
        expect(wrapper.find('#search').length).toEqual(1);
    });

});
