//import libraries for making a component
import React from 'react';
import { Text,
TouchableOpacity } from 'react-native';
//making a component
const Button = (props) => {
  const { onPress, text } = props;
  const { btnStyle, textStyle } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={btnStyle}>
    <Text style={textStyle}>
     {text}
    </Text>
    </TouchableOpacity>
  );
};

const styles = {
  btnStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  },
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10

  }
};
// export component
export { Button };
