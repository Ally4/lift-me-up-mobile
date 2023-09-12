import 'react-native-gesture-handler';
import axios from 'axios';
import React, { useState} from 'react';
// import { StatusBar } from 'expo-status-bar';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native'; 
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { signupStart, signupSuccess, signupFailure } from '../../features/auth/authSignupSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function App() {

  const navigation = useNavigation(); 

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const dispatch = useDispatch();
  const handleSignup = async () => {
    if (!firstName || !lastName || !email || !password || !confirmPassword || !phoneNumber) {
      dispatch(signupFailure('Please enter both email and password.'));
      return;
    }
    dispatch(signupStart());
    try {
      const response = await axios.post("https://acubed-backend-production.up.railway.app/api/v1/auth/register",{ firstName, lastName, email, password, confirmPassword, phoneNumber })
      if ((response.data.status).toString() === '201') {
        await AsyncStorage.setItem('AccessToken', response.data.token)
        await AsyncStorage.setItem('name', response.data.name)
        dispatch(signupSuccess({ user: response.data.user, token: response.data.token }));
        navigation.navigate('Main');
      } else {
        dispatch(signupFailure('Some of you input is not valid'));
      }
    } catch (error) {
      console.log('jjjjjjjjjjj', error)
      dispatch(signupFailure('An error occurred during the signup.'));
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
          placeholder={'First Name'}
          onChangeText={(text) => setFirstName(text)}
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
          placeholder={'Last Name'}
          onChangeText={(text) => setLastName(text)}
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
          placeholder={'Email'}
          onChangeText={(text) => setEmail(text)}
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
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          type='password'
          placeholder={'Password'}
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
          secureTextEntry={true}
          onChangeText={(text) => setConfirmPassword(text)}
          type='password'
          placeholder={'Confirm Password'}
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
          onChangeText={(text) => setPhoneNumber(text)}
          placeholder={'Phone Number'}
          />
          <TouchableOpacity style={styles.button1}
          onPress={() => handleSignup()}
           > 
            <Text style={styles.buttonText1}>Sign Up</Text>
           </TouchableOpacity>
           <Text style={{marginLeft:90}}>Do you have an account?<TouchableOpacity onPress={() => navigation.navigate('Login')} ><Text style={{ color: '#2FCBD8', marginTop:2}}> Login</Text></TouchableOpacity></Text>
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
  marginLeft:40

  
},
buttonText1: {
  color: 'white',
  fontSize: 16,
  fontWeight: 'bold',
  textAlign: 'center',
},
})