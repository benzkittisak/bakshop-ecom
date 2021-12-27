import {createStore , applyMiddleware} from 'redux'
import logger from 'redux-logger';

import createSagaMiddleware from '@redux-saga/core';

//Reducer
import rootReducer from './root.reducer';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

if(process.env.NODE_ENV === 'development'){
    middleware.push(logger);
}

export const store = createStore(rootReducer , applyMiddleware(...middleware));

export default store;
