import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import mainReducer from '../reducers/mainReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(mainReducer, composeEnhancers(applyMiddleware(thunk)))