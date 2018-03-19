//This is just so redux can save store here, we dont touch after setuo
import { createStore } from 'redux';
import { reducer } from './reducers';

export const store = createStore(reducer);