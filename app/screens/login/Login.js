import 'react-native-gesture-handler';
import axios from 'axios';
import React, { useEffect, useState} from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView, Button } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { useSelector, useDispatch } from 'react-redux'; 
import { useNavigation } from '@react-navigation/native';

import { loginStart, loginSuccess, loginFailure } from '../../features/auth/authLoginSlice'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
// import dotenv from 'dotenv';

// dotenv.config();

WebBrowser.maybeCompleteAuthSession();  

export default function Login() {

  // const [userInfo, setUserInfo] = useState(null);

  // const [request, response, promptAsync] = Google.useAuthRequest({
  //   androidClientId: "940575008691-8q82fgplrpfarutqt2c92uqjfo7lh4nq.apps.googleusercontent.com",
  //   iosClientId: "940575008691-3pgp6j422vp7dcvf4176tki3kt2s7he8.apps.googleusercontent.com",
  //   webClientId: "940575008691-2jsitr933bn1ij3nur456s3kgnv1qsu2.apps.googleusercontent.com",
  //   // androidClientId: process.env.coLabAndroidKey,
  //   // iosClientId: process.env.coLabIosKey,
  //   // webClientId: process.env.coLabWebKey,
  // })

  const navigation = useNavigation(); 
  const [password, setPassword] = useState('');
  const [user, setUser] = useState('');

  const dispatch = useDispatch();
  const handleLogin = async () => {
    if (!user || !password) {
      dispatch(loginFailure('Please enter both user and password.'));
      return;
    }
    dispatch(loginStart());
    try {
      const response = await axios.post("https://acubed-backend-production.up.railway.app/api/v1/auth/login",{ user, password })
      if (response.data.token) {
       await AsyncStorage.setItem('AccessToken', response.data.token)
       await AsyncStorage.setItem('name', response.data.name)
        dispatch(loginSuccess({ user: response.data.user, token: response.data.token }));
        navigation.navigate('Main'); 
        setPassword('');
        setUser('');
      } else {
        dispatch(loginFailure('Invalid username or password.'));
      }
    } catch (error) {
      dispatch(loginFailure('An error occurred during login.'));
    }
  };


  // useEffect(() => {
  //   handleLoginWithGoogle();
  // }, [response])


  // async function handleLoginWithGoogle() {
  //  const user =  await AsyncStorage.getItem("@user");
  //  if (!user) {
  //     if(response?.type === "success") {
  //       await getUserInfo(response.authentication.accessToken);
  //     }
  //  } else {
  //   setUserInfo(JSON.parse());
  //  }
  // }

  // const getUserInfo = async (token) => {
  //   if (!token) return;
  //   try {
  //     const response = await fetch("https://www.googleapis.com/userinfo/v2/me",{
  //       headers: {Authorization: `Bearer ${token}`},
  //     });
  //     const user = await response.json();
  //     await AsyncStorage.setItem("@user", JSON.stringify(user));
  //     setUserInfo(user);
  //   } catch(error) {
  //     console.log("This is the error for the login with google");
  //   }
  // }



  return (
      <SafeAreaView style={styles.container}>
        <ScrollView > 
        <View style={{backgroundColor:"black", width:250, height:250, borderRadius:150, opacity:0.2, top: -90, left:-90}}></View>
        <View style={styles.logo}><Image source={require("../../assets/photos/colab.png")}/></View>
        <View style={styles.nameForm}>
        {/* <View style={styles.nameLogo}> */}
        {/* </View> */}
        <View style={styles.login}>
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
          placeholder={'User'}
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
          placeholder={'Password'}
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          />

          <TouchableOpacity style={styles.button1} 
          onPress={() => handleLogin()}
          > 
            <Text style={styles.buttonText1}>Login</Text>
           </TouchableOpacity>


           <View style={styles.remember}>
           <View style={styles.check}><Text><CheckBox title='Remember Me'></CheckBox> </Text></View>
           <View style={styles.forgot}><TouchableOpacity onPress={() => navigation.navigate('ResetUserScreen')}><Text style={styles.forgot}> Forgot the password</Text></TouchableOpacity></View>
           </View>


           <View style={styles.lines}>
           <View style={styles.horizontalLine} />
           <Text style={styles.lineText}>Or Login with</Text>
           <View style={styles.horizontalLine} />
           </View>
           <TouchableOpacity style={styles.button2} 
          //  onPress={() => promptAsync()} 
           >
            <Text style={styles.buttonText}><Image source={require("../../assets/photos/google.png")} style={{width:20, height:20}}  />  GOOGLE</Text>
            </TouchableOpacity>
           <Text>Do you have an account?<TouchableOpacity onPress={() => navigation.navigate('Signup')}><Text style={{ color: '#2FCBD8', marginTop:2}}> Signup</Text></TouchableOpacity></Text>
           <Image source={require("../../assets/photos/acubed.png")} />
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
  // marginLeft:40,
  // marginTop:20,
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
// lineText: {
//   marginLeft:25,
//   marginTop:15,
// },
nameForm : {
  backgroundColor: '#ffffff',
  display:'flex',
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  borderTopRightRadius: 15,
  borderTopLeftRadius: 15,
  // padding: 1,
},
login : {
  // backgroundColor: '#FFFF00',
  display:'flex',
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
},
remember : {
  // backgroundColor: '#FF0000',
  display:'flex',
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: 20,
},
lines : {
  // backgroundColor: '#FF0000',
  display:'flex',
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginVertical: 20,
  width: '60%',
},
horizontalLine: {
  width: '20%',
  height: 1.5, // Adjust the height as needed
  backgroundColor: 'black', // Change the color as needed
},
logo : {
  display:'flex',
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  marginVertical: 20,
},
forgot : {
  color: '#2FCBD8',
  textDecorationLine: 'underline',
},
check : {
  color:'#2FCBD8',
  backgroundColor: 'transparent'
}
})