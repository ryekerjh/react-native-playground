import {StyleSheet, Dimensions} from 'react-native';

const bgColor = '#e40007';
const {width, height} = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `${bgColor}`,
    padding: 40
  },
  text: {
    color: '#000',
    fontWeight: '100',
    fontSize: 34,
  },
  box: {
    backgroundColor: 'yellow',
    width: width/2,
    height: height/3,
    position: 'absolute',
    top: 20,
    left: 30,
    borderRadius: 15
  },
  form: {
    flexDirection: 'row'
  },
  input: {
    flex: .7,
    borderBottomColor: 'black',
    borderWidth: 1,
    fontSize: 24
  },
  button: {
    flex:.3,
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  todoBox: {
    marginTop: 60,
  },
  todo: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey'
  },
  list: {
    flexWrap: 'wrap', 
    color: '#fff',
  }
});