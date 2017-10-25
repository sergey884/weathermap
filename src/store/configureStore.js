'use strict';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootEpic, rootReducer } from '../reducers/index';
import { createEpicMiddleware } from 'redux-observable';

const epicMiddleware = createEpicMiddleware(rootEpic);

const middleware = [ thunk, epicMiddleware ];

if (process.env.NODE_ENV === 'development') {
/*    const logger = createLogger();
    middleware.push(logger);
*/}

const configureStore = () => {
    const store = createStore(
        rootReducer,
        composeWithDevTools(
            applyMiddleware(...middleware)
        )
    );
    return store;
};

export default configureStore;
