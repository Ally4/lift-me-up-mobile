import * as React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function LandingPage({navigation}) {
  return (
  <SafeAreaView style={styles.container}>
    <ScrollView >
      <View style={{backgroundColor:"black", width:250, height:250, borderRadius:150, opacity:0.2, top: -170, left:-90}}></View>
      <View style={styles.landing}>
      <Image source={require("../../assets/photos/logo.png")} />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.buttonText1}>Sign Up</Text>
      </TouchableOpacity>
      </View>
    </ScrollView>
  </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    // height:"auto",
    backgroundColor:"#2FCBD8",
},
//The right thing for flex box
landing: {
  // backgroundColor: '#ff0000',
  display:'flex',
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  padding: 1,
},
button: {
  backgroundColor: 'white',
  padding: 10,
  borderRadius: 5,
  width:300,
  // marginLeft:40
  
},
buttonText: {
  color: '#2FCBD8',
  fontSize: 16,
  fontWeight: 'bold',
  textAlign: 'center',
},
button1: {
  backgroundColor: '#2FCBD8',
  padding: 10,
  borderRadius: 5,
  borderColor:"white",
  borderWidth:2,
  width:300,
  marginTop:20,
  // marginLeft:40
  
},
buttonText1: {
  color: 'white',
  fontSize: 16,
  fontWeight: 'bold',
  textAlign: 'center',
},
})
