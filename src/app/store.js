//This is just so redux can save store here, we dont touch after setuo
import { createStore, applyMiddleware } from 'redux';
import { reducer } from './reducers';
import thunk from 'redux-thunk'; //Allows for async fn that calls an action on result of async action


export const store = createStore(reducer, applyMiddleware(thunk));