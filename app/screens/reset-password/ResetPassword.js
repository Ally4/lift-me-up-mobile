import 'react-native-gesture-handler';
// import { StatusBar } from 'expo-status-bar';
import axios from 'axios';
import React, { useState} from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import the necessary function
import { useSelector, useDispatch } from 'react-redux';

import { resetStart, resetSuccess, resetFailure } from '../../features/auth/authResetSlice'; 
// import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ResetPasswordEmail() {

  const navigation = useNavigation(); // Get the navigation object
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();

  const handleReset = async () => {

    if (!email ) {
      dispatch(resetFailure('Please enter your email.'));
      return;
    }

    dispatch(resetStart());

    try {
      const response = await axios.post("https://acubed-backend-production.up.railway.app/api/v1/auth/forgotten-link",{ email })


      if (response.data.status === 201) {

        // AsyncStorage.setItem({key:'Token', value: response.data.token})

        // Navigate to the next screen after successful login
        navigation.navigate('Pin-Screen'); // Replace 'Home' with the name of your target screenif (response.data.token) {
        // Store the token in Redux or AsyncStorage (for persistent storage)
        dispatch(resetSuccess({ user: response.data.user, token: response.data.token }));

        // Navigate to the next screen after successful login
        navigation.navigate('Pin-Screen'); // Replace 'Home' with the name of your target screen
      } else {
        // Simulate login failure
        dispatch(resetFailure('Invalid email'));
      }
    } catch (error) {
      // Handle API errors (e.g., network issues, server errors, etc.)
      dispatch(resetFailure('An error occurred when sending the coden.'));
    }
  };




  return (
      <SafeAreaView style={styles.container}>
        <ScrollView >
        <View style={{backgroundColor:"black", width:250, height:250, borderRadius:150, opacity:0.2, top: -90, left:-90}}></View>
        <View style={styles.logo}><Image source={require("../../assets/photos/colab.png")}/></View>
        <View style={{backgroundColor:"white", flex:2, borderTopRightRadius:30, borderTopLeftRadius:30}}>
          <Text style={styles.resetText}>Forgotten Password</Text>
          <Text style={styles.resetParagraph}>Enter the email address associated with your account so that we can send a code to reset your password</Text>
          <View style={styles.reset}>
        <TextInput
          style={{
            backgroundColor: 'white',
            padding: 10,
            borderRadius: 5,
            borderColor:"#2FCBD8",
            borderWidth:1,
            width:300,
            marginTop:20,
            // marginLeft:40
          }}
          value={setEmail}
          onChangeText={(text) => setEmail(text)}
          placeholder={'Email'}
          />
          <TouchableOpacity style={styles.button1} onPress={() => handleReset()}> 
            <Text style={styles.buttonText1}>Verify</Text>
           </TouchableOpacity>
           <View style={styles.resetButton}>
          <View style={styles.resetButton1}>
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}><Text style={{color:'white'}}>Signup</Text></TouchableOpacity>
          </View>
          <View style={styles.resetButton2}>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}><Text style={{color:'#2FCBD8'}}>Login</Text></TouchableOpacity>
          </View>
        </View>
        </View>
        </View>
        </ScrollView>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#2FCBD8",
},
button: {
  backgroundColor: 'white',
  padding: 10,
  borderRadius: 5,
  width:300,
  marginLeft:40

  
},
button2: {
  backgroundColor: 'white',
  padding: 10,
  borderRadius: 5,
  width:300,
  marginLeft:40,
  marginTop:20,
  borderWidth: 2,
  borderColor: "#2FCBD8",

  
},
buttonText: {
  color: '#000',
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
line: {
  height: 1,
  width: '40%',
  backgroundColor: '#2FCBD8',
  marginTop:20,
},
lineBox: {
  marginLeft:150,
},
lineText: {
  marginLeft:25,
  marginTop:15,
},
resetText: {
  marginTop: 20,
  fontWeight: 'bold',
  textAlign: 'center',
},
resetParagraph: {
  textAlign: 'center',
  marginRight: 10,
},
logo : {
  display:'flex',
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  marginVertical: 20,
},
reset : {
  // backgroundColor: '#FFFF00',
  display:'flex',
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
},
resetButton : {
  display:'flex',
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop:30,
  marginBottom: 20,
  width:'80%'
},
resetButton1 : {
  borderRadius:10,
  backgroundColor:'#2FCBD8', 
  color:'white',
  padding:15,
},
resetButton2 : {
  borderRadius:10,
  backgroundColor:'white', 
  color:'#2FCBD8', 
  padding:15,
  borderWidth: 1,
  borderColor: '#2FCBD8',
},
})