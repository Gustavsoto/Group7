import React from 'react';
import { Text, View } from 'react-native';

const HelloWorldApp = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Text>Hello World from Group 7 Gustavs Oto Cers</Text>
      <text>This is my Gustavs Oto Cers first React Native application</text>
      <Image source={require('./bilde.jpg')} />
    </View>
  )
}
export default HelloWorldApp;
