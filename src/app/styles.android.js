import {StyleSheet, Dimensions} from 'react-native';

const bgColor = '#ddd';
const {width, height} = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: `${bgColor}`,
    padding: 40
  },
  text: {
    color: '#fff',
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
  } 
});