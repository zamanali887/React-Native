import React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
import logo from '../../assets/images/Navy.png';

export default function FlashScreen() {
  return (
    <View style={style.flexContainer}>
      <Text>Zaman Ali</Text>
      <Image style={style.image} source={logo} />
    </View>
  );
}

const style = StyleSheet.create({
  flexContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  box: {
    backgroundColor: '#1D3557',
    borderRadius: 10,
    width: 200,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 48,
  },
});
