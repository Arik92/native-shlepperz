//import libraries for making a component
import React from 'react';
import {
  Text,
  TextInput,
  View
} from 'react-native';
//making a component
const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}> {label} </Text>
      <TextInput
      style={inputStyle}
      autoCorrect={false}
      secureTextEntry={secureTextEntry}
      value={value} onChangeText={onChangeText}
      placeholder={placeholder}
      />
    </View>
  );
};

const styles = {
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'

  },
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
    height: 20,
    width: 100
  }
};
// export component
export { Input };
