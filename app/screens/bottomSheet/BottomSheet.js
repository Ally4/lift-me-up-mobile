import React from 'react';
import { View, Text, StyleSheet, Button, Image, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function BottomSheet() {
  <View style={styles.container}>
    <Text style={styles.title}>App store</Text>
    <View style={styles.appInfo}>
        <Image style={styles.image} source={PerformanceResourceTiming()} />
        <View style={{marginLeft:15}}>
            <Text style={styles.text}>  Rocket </Text>
            <Text style={[styles.text, {color:'gray',}]}>Ally bomayee</Text>
            <Text style={[styles.text, {color:'gray',}]}>The offer</Text>
        </View>
    </View>
    <View style={styles.separator}></View>
    <Text style={[styles.text,{color:'gray', marginLeft:15, marginVertical:5} ]}>Account</Text>
    <View style={styles.separator}></View>
    <TouchableOpacity onPress={() => Alert.alert('this is it')}>
        <View style={styles.confirmButton}><Text style={{color:'#fff', fontSize:15}}></Text></View>
    </TouchableOpacity>
  </View>
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

