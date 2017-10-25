'use strict';
import configureMockStore from 'redux-mock-store'
import * as actions from '<actions>/weathermap'
import * as types from '<constants>/weathermap'
import nock from 'nock'
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic } from '<reducers>/index';

const epicMiddleware = createEpicMiddleware(rootEpic);

const middlewares = [ epicMiddleware ];
const mockStore = configureMockStore(middlewares);

describe('Testing weathermap actions', () => {
    afterEach(() => {
        nock.cleanAll()
    });

    it('Testing fetchWeatherEpic', () => {
        const city = "london";
        const store = mockStore({});

        nock('http://api.openweathermap.org')
            .get('/data/2.5/weather')
            .query({
                q : city,
                units : 'imperial',
                appid : 'ca3f6d6ca3973a518834983d0b318f73'
            })
            .reply(200, store.dispatch(actions.receiveWeatherRequest({})));

        const expectedActions = [
            { type: types.FETCH_WEATHER_SUCCESS, payload : {} },
            { type: types.FETCH_WEATHER_REQUEST, payload : city }
        ];

        store.dispatch(actions.getWeatherRequest(city));

        expect(store.getActions()).toEqual(expectedActions);

    })
});

