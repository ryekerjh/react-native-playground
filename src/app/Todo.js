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
import { createTodo, getTodos } from './actionCreator';

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

  componentDidMount() {
    this.props.getTodos();
  }

  componentWillMount() {
    getTodos()
    .then(todos => this.setState({todos}))
    .catch(err => console.warn(err))
  }

  handleChange(text) {
    this.setState({newTodo: text});
  }

  handlePress() {
      createTodo(this.state.newTodo);
      this.setState({newTodo: ''})
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
  //   dispatch(createTodo({name: todo})) //This object is the action being dispatched, look in reducers, action.type and ction.payload correspond to this
  },
  getTodos() {
    // dispatch(getTodos());
  }
});

const mapStateToProps = (state) => ({
  todos: state.todos
})

export const Todo = connect(mapStateToProps, mapActionsToProps)(_Todo);
//Feed connect state, and action (null and mapatoprop, and then it returns a fn that consumes your component)