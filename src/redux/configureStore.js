import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
// Add reducer/s here

const reducer = combineReducers({ reducerName, reducerName });

const store = createStore(reducer,
  compose(applyMiddleware(thunk, logger)));

export default store;
