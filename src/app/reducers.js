import { combineReducers } from 'redux';

//all reducers are functions, 1st arg always current state, second always action
//Reducer just uses array.reduce in a more complicated way on our state
const CREATE_TODO = 'CREATE_TODO';

const user = (state = {}, action) => {
  return state;
};


const todos = (state = [], action) => {
  switch(action.type) {
    case CREATE_TODO:
      return [  //You cannot mutate state in a reducer, it returns an err, so we spread state and create a new array
        action.payload, //.payload is just a standard that class agreed to, action.payload is whatever you're adding to state
        ...state
      ];
      default: 
        return state;
  }
};

export const reducer = combineReducers({todos, user});