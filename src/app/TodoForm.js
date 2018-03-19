//This is not a class with a render() aka it is a stateless component, because we only need the view, no methods or state necessary

import React from 'react';
import {
  View, 
  TouchableOpacity, 
  Text, 
  TextInput 
} from 'react-native';
import {styles} from './styles';



export const TodoForm = (props) => ( //This is an IMPLICIT return in es6
  <View style={styles.form}>
  {/* <Reddit /> */}
    <TextInput
      style={styles.input}
      value={props.value}
      onChangeText={props.handleChange}
    />
    <TouchableOpacity style={styles.button} onPress={props.handlePress}>
      <Text style={styles.buttonText}>Create</Text>
    </TouchableOpacity>
  </View>  
)