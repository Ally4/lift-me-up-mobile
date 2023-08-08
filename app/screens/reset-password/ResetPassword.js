import 'react-native-gesture-handler';
// import { StatusBar } from 'expo-status-bar';
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
    if (!email || !password) {
      dispatch(resetFailure('Please enter both email and password.'));
      return;
    }

    dispatch(resetStart());

    try {
      const response = await axios.post("https://acubed-backend-production.up.railway.app/api/v1/auth/forgotten-link",{ email })


      if (response.data.token) {

        // AsyncStorage.setItem({key:'Token', value: response.data.token})

        // Navigate to the next screen after successful login
        navigation.navigate('Pin-Screen'); // Replace 'Home' with the name of your target screenif (response.data.token) {
        // Store the token in Redux or AsyncStorage (for persistent storage)
        dispatch(resetSuccess({ user: response.data.user, token: response.data.token }));

        // Navigate to the next screen after successful login
        navigation.navigate('Pin-Screen'); // Replace 'Home' with the name of your target screen
      } else {
        // Simulate login failure
        dispatch(resetFailure('Invalid username or password.'));
      }
    } catch (error) {
      // Handle API errors (e.g., network issues, server errors, etc.)
      dispatch(resetFailure('An error occurred during login.'));
    }
  };




  return (
      <SafeAreaView style={styles.container}>
        <View style={{backgroundColor:"black", width:250, height:250, borderRadius:150, opacity:0.2, top: -90, left:-90}}></View>
        <Image source={require("../../assets/photos/colab.png")} style={{marginBottom:20, marginLeft:70}}/>
        <View style={{backgroundColor:"white", flex:2, borderTopRightRadius:30, borderTopLeftRadius:30}}>
          <Text style={styles.resetText}>Forgotten Password</Text>
          <Text style={styles.resetParagraph}>Enter the email address associated with your account so that we can send a code to reset your password</Text>
        <TextInput
          style={{
            backgroundColor: 'white',
            padding: 10,
            borderRadius: 5,
            borderColor:"#2FCBD8",
            borderWidth:1,
            width:300,
            marginTop:20,
            marginLeft:40
          }}
          value={setEmail}
          onChangeText={(text) => setEmail(text)}
          placeholder={'Email or Phone Number'}
          />
          <TouchableOpacity style={styles.button1} onPress={() => handleReset()}> 
            <Text style={styles.buttonText1}>Verify</Text>
           </TouchableOpacity>
           <View style={{width:350, marginLeft:10, borderRadius:10,padding:1, backgroundColor:'#2FCBD8', marginTop:10}}>
          <View style={{backgroundColor:'#2FCBD8', width:'50%', padding:15, borderRadius:10}}>
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}><Text style={{marginLeft:50, fontWeight:'bold', color:'white'}}>Signup</Text></TouchableOpacity>
          </View>
          <View style={{backgroundColor:'white', width:'50%', marginLeft:'50%', marginTop:-49.5, padding:15, borderBottomRightRadius:10, borderTopRightRadius:10}}>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}><Text style={{marginLeft:50, fontWeight:'bold', fontSize:15, color:'#2FCBD8'}}>Login</Text></TouchableOpacity>
          </View>
        </View>
        </View>
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

  // justifyContent:"center"    its not working in js engine: hermes
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

  // justifyContent:"center"    its not working in js engine: hermes
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
  marginLeft:40

  // justifyContent:"center"    its not working in js engine: hermes
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
})