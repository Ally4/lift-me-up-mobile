import 'react-native-gesture-handler';
import axios from 'axios';
import React, { useState} from 'react';
// import { StatusBar } from 'expo-status-bar';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native'; 
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { signupStart, signupSuccess, signupFailure } from '../../features/auth/authSignupSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Snackbar from 'react-native-snackbar';


export default function Signup() {

  const navigation = useNavigation(); 

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const dispatch = useDispatch();
  const handleSignup = async () => {
    if (!user || !password || !confirmPassword) {     
      const err = 'Please enter email or phone number and password.';
      Snackbar.show({
        text: err,
        duration: Snackbar.LENGTH_LONG,
      });
      dispatch(signupFailure('Please enter both email and password.'));
      return;
    }
    dispatch(signupStart());
    try {
      const response = await axios.post("https://acubed-backend-production.up.railway.app/api/v1/auth/register",{ user, password, confirmPassword});

      const toStore = await axios.get(`https://acubed-backend-production.up.railway.app/api/v1/auth/${response.data.user}`);

      console.log('the store', toStore.data.user.profilPicture)



      if ((response.data.status).toString() === '201') {
        await AsyncStorage.setItem('token', response.data.token)
        console.log('the store', toStore.data.user)
        await AsyncStorage.setItem('profilPicture', toStore.data?.user?.profilPicture)
        await AsyncStorage.setItem('email', toStore.data?.user?.email)
        await AsyncStorage.setItem('dob', toStore.data?.user?.dateOfBirth)
        await AsyncStorage.setItem('gender', toStore.data?.user?.gender)
        await AsyncStorage.setItem('city', toStore.data?.user?.city)
        await AsyncStorage.setItem('occupation', toStore.data?.user?.occupation)
        // await AsyncStorage.setItem('lastName', toStore.data?.user?.lastName)

        dispatch(signupSuccess({ user: response.data.user, token: response.data.token }));
        navigation.navigate('Main');
      } else {      
        const err = 'Some of you input is not valid';
        Snackbar.show({
          text: err,
          duration: Snackbar.LENGTH_LONG,
        });
        dispatch(signupFailure('Some of you input is not valid'));
      }
    } catch (error) {
      const err = error.response?.data?.message || error.message;
      Snackbar.show({
        text: err,
        duration: Snackbar.LENGTH_LONG,
      });
      dispatch(signupFailure('An error occurred during the signup.'));
    }
  };


  return (
      <SafeAreaView style={styles.container}> 
      {/* <ScrollView > */}
        <View style={{backgroundColor:"black", width:250, height:250, borderRadius:150, opacity:0.2, top: -150, left:-90}}></View>
        <View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require("../../assets/photos/left-chevron.png")} style={{ marginTop: -190, marginLeft: 10, width: 20, height: 20 }} />
          </TouchableOpacity>
        </View>
        <View style={styles.logo}><Image source={require("../../assets/photos/colab.png")}/></View>
        <View style={styles.nameForm}>
        <View style={styles.signup}>
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
          placeholder={'Email or Phone number'}
          onChangeText={(text) => setUser(text)}
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
            // marginLeft:40
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
            // marginLeft:40
          }}
          secureTextEntry={true}
          onChangeText={(text) => setConfirmPassword(text)}
          type='password'
          placeholder={'Confirm Password'}
          />
          <TouchableOpacity style={styles.button1}
          onPress={() => handleSignup()}
           > 
            <Text style={styles.buttonText1}>Sign Up</Text>
           </TouchableOpacity>
           <View style={{ justifyContent:"center", alignItems:"center"}}>
           <Text >Do you have an account?<TouchableOpacity onPress={() => navigation.navigate('Login')} ><Text style={{ color: '#2FCBD8', marginTop:2}}> Login</Text></TouchableOpacity></Text>
           <Image source={require("../../assets/photos/acubed.png")} />
           </View>
        </View>
        </View>
        {/* </ScrollView> */}
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
logo : {
  // display:'flex',
  // flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  marginTop:-60,
  // marginVertical: 20,
},
nameForm : {
  backgroundColor: '#ffffff',
  // display:'flex',
  // flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  borderTopRightRadius: 15,
  borderTopLeftRadius: 15,
  paddingBottom:30,
  // padding: 1,
},
// signup : {
//   // backgroundColor: '#FFFF00',
//   display:'flex',
//   flex: 1,
//   justifyContent: 'center',
//   alignItems: 'center',
// },
})