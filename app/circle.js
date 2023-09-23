import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function Circle(){
  return (<View style={styles.circle}></View>);
};

const styles = StyleSheet.create({
  circle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'red',
  },
});