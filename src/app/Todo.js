import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Switch
} from 'react-native';
import {styles} from './styles';
import { Reddit } from './Reddit';
import { TodoForm } from './TodoForm';
import { connect } from 'react-redux'; //We impor this to connect our component to redux
//Using connect because when state is updated in teh reducer, we want to update this view, so connect allows us to attach our two reducers (user & todos) to props


export class _Todo extends Component {
  static defaultProps = { //This just brings in the initial todos as an empty array
    todos: []
  }

  constructor() {
    super();
    this.state = {
      newTodo: '' //nly time to keep state in your components is with forms so that the reducers dont fire at every keystroke
    }
  }

  componentWillMount() {
    fetch('http://localhost:3000/todos',
  {
    headers: {
      'Accept': 'application/json'
    }
  })
    .then(data => data.json())
    .then(todos => this.setState({todos}))
    .catch(err => console.warn(err))
  }

  handleChange(text) {
    this.setState({newTodo: text});
  }

  handlePress() {
    fetch('http://localhost:3000/todos',{
      method: 'post',
      body: JSON.stringify({name: this.state.newTodo}),
      headers: {
        'Content-Type': 'application/json'      
      }
    })
    .then(res => res.json())
    .then(data => {
      this.props.createTodo(this.state.newTodo);
      this.setState({newTodo: ''})
    })
    .catch(err => console.warn(err))
  }
  render() {
    return (
      <View style={styles.container}>
        <TodoForm 
          handlePress = {this.handlePress.bind(this)}
          handleChange = {this.handleChange.bind(this)}
          value = {this.state.newTodo}
        />
        <View style={styles.todoBox}>
          {this.props.todos.map((todo, i) => 
          <View style={styles.todo} key={i}>
            <Text style={styles.list}>{todo}</Text>
          </View>
          )}
        </View>
      </View>    
    )
  }
}

const mapActionsToProps = (dispatch) => ({
  createTodo(todo) {
    dispatch({ //This object is the action being dispatched, look in reducers, action.type and ction.payload correspond to this
      type: 'CREATE_TODO',
      payload: todo })
  }
});

const mapStateToProps = (state) => ({
  todos: state.todos
})

export const Todo = connect(mapStateToProps, mapActionsToProps)(_Todo);
//Feed connect state, and action (null and mapatoprop, and then it returns a fn that consumes your component)