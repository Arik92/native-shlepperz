import React from 'react';
import { View,
  ActivityIndicator
 } from 'react-native';

const Spinner = ({ size }) => {
  return (
    <View style={Styles.spinStyle}>
      <ActivityIndicator size={size || 'large'} />
    </View>
  );//return
};

const Styles = {
  spinStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
};//styles

export { Spinner }
