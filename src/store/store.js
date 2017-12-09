import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import reducer from '../reducers/counter.reducer';

const initialValues = {
    'First': 10,
    'Second': 20,
    'Third': 30
}

const store = createStore(reducer, initialValues, applyMiddleware(logger));

export default store;