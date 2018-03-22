/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { Todo } from './src/app/Todo';
import {Fancy} from './src/app/Fancy';
import {Reddit} from './src/app/Reddit';
import { store } from './src/app/store';
import { Provider } from 'react-redux'; //Gives us access to 
import { Main as Root} from './src/app/Main';
export default class App extends Component {
  render() {
    return (
    <Provider store={store}>
      <Root />
    </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    marginTop: 200
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
