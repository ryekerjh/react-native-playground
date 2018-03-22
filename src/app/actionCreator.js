import { apiCall } from './helpers';
export const getTodos = () => (
  //Thisis a THUNK, so it returns another function
  dispatch => (   //method, url, data, optHeaders
    apiCall('GET', 'http://localhost:3000/todos')
    .then(todos => dispatch({ //This is function that is returned from getTodos, which takes dispatch as its arg
      type: 'GET_TODOS',
      payload: todos
    }))
  )
);

export const createTodo = (todo) => (
  dispatch => ( 
    apiCall('POST', 'http://localhost:3000/todos', JSON.stringify(todo))
    .then(todo => dispatch({ //This is function that is returned from getTodos, which takes dispatch as its arg
      type: 'CREATE_TODO',
      payload: todo
    }))
  )
);