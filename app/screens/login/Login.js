import 'react-native-gesture-handler';
import axios from 'axios'
import React, { useState} from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView, Button } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { useSelector, useDispatch } from 'react-redux'; //for the redux
// import { useAppDispatch, } from '../../../root'
// import {login} from '../../../LoginSlice';  //slice or reducer
import { useNavigation } from '@react-navigation/native'; // Import the necessary function

import { loginStart, loginSuccess, loginFailure } from '../../features/auth/authLoginSlice'; 
import AsyncStorage from '@react-native-community/async-storage';


export default function Login() {

  const navigation = useNavigation(); // Get the navigation object

  // const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();
  // const isLoading = useSelector((state) => state.auth.isLoading);
  // const error = useSelector((state) => state.auth.error);

  const handleLogin = async () => {
    if (!email || !password) {
      dispatch(loginFailure('Please enter both email and password.'));
      return;
    }

    dispatch(loginStart());

    try {
      const response = await axios.post("https://acubed-backend-production.up.railway.app/api/v1/auth/login",{ email, password })


      if (response.data.token) {

        AsyncStorage.setItem({key:'AccessToken', value: response.data.token})

        // Navigate to the next screen after successful login
        navigation.navigate('Main'); // Replace 'Home' with the name of your target screenif (response.data.token) {
        // Store the token in Redux or AsyncStorage (for persistent storage)
        dispatch(loginSuccess({ user: response.data.user, token: response.data.token }));


        AsyncStorage.setItem({key:'AccessToken', value: response.data.token})

        // Navigate to the next screen after successful login
        navigation.navigate('Main'); // Replace 'Home' with the name of your target screen
      } else {
        // Simulate login failure
        dispatch(loginFailure('Invalid username or password.'));
      }
    } catch (error) {
      // Handle API errors (e.g., network issues, server errors, etc.)
      dispatch(loginFailure('An error occurred during login.'));
    }
  };


  return (
      <SafeAreaView style={styles.container}>
        <ScrollView > 
        <View style={{backgroundColor:"black", width:250, height:250, borderRadius:150, opacity:0.2, top: -90, left:-90}}></View>
        <Image source={require("../../assets/photos/colab.png")} style={{marginBottom:20, marginLeft:70}}/>
        <View style={{backgroundColor:"white", flex:2, borderTopRightRadius:30, borderTopLeftRadius:30}}>
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
          placeholder={'Email'}

          value={setEmail}
          onChangeText={(text) => setEmail(text)}

          // value={email}
          // onChangeText={setEmail}
          />
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
          placeholder={'Password'}
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
          // right={
          //   <TextInput.Icon 
          //   name={ password ? 'eye' : 'eye-off'} 
          //   onPress={() => setPassword(!password)}
          //   />
          // }

          // value={password}
          // onChangeText={setPassword}
          />

          <TouchableOpacity style={styles.button1} 
          onPress={() => handleLogin()}
          > 
            <Text style={styles.buttonText1}>Login</Text>
           </TouchableOpacity>
           <View style={{marginLeft:20}} ><Text><CheckBox title='Remember Me' color='#2FCBD8'></CheckBox> <TouchableOpacity onPress={() => navigation.navigate('ResetEmailScreen')}><Text style={{ color: '#2FCBD8', marginTop:2, marginLeft: 50}}> Forgot the password</Text></TouchableOpacity></Text></View>
           <View style={styles.lineBox}>
           <View style={styles.line} 
          //  onPress={handleSubmit} 
           /> 
           <Text style={styles.lineText}>Or Login</Text>
           <View style={styles.line} /> 
           </View>
           <TouchableOpacity style={styles.button2} >
            <Text style={styles.buttonText}><Image source={require("../../assets/photos/google.png")} style={{width:20, height:20}}  />  GOOGLE</Text>
            </TouchableOpacity>
           <Text style={{marginLeft:90}}>Do you have an account?<TouchableOpacity onPress={() => navigation.navigate('Signup')}><Text style={{ color: '#2FCBD8', marginTop:2}}> Signup</Text></TouchableOpacity></Text>
           <Image source={require("../../assets/photos/acubed.png")} style={{marginBottom:20, marginLeft:150}}/>
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
})