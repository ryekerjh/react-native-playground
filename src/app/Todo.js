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

export class Todo extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      newTodo: ''
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
      const todos = [data, ...this.state.todos];
      this.setState({todos, newTodo: ''})
    })
    .catch(err => console.warn(err))
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            value={this.state.newTodo}
            onChangeText={this.handleChange.bind(this)}
          />
          <TouchableOpacity style={styles.button} onPress={this.handlePress.bind(this)}>
            <Text style={styles.buttonText}>Create</Text>
          </TouchableOpacity>
        </View>  
        <View style={styles.todoBox}>
          {this.state.todos.map((todo, i) => 
          <View style={styles.todo} key={i}>
            <Text style={styles.list}>{todo.name}</Text>
          </View>
          )}
        </View>
      </View>    
    )
  }
}