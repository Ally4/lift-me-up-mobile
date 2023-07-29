import 'react-native-gesture-handler';
import axios from 'axios';
import React, { useState} from 'react';
// import { StatusBar } from 'expo-status-bar';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native'; // Import the necessary function
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { signupStart, signupSuccess, signupFailure } from '../../features/auth/authSignupSlice';

// import { registerUser } from '../../../authActions';


export default function App() {

  const navigation = useNavigation(); // Get the navigation object

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const dispatch = useDispatch();
  // const isLoading = useSelector((state) => state.auth.isLoading);
  // const error = useSelector((state) => state.auth.error);


  const handleSignup = async () => {
    if (!firstName || !lastName || !email || !dateOfBirth || !password || !confirmPassword || !gender || !address || !phoneNumber) {
      dispatch(signupFailure('Please enter both email and password.'));
      return;
    }

    dispatch(signupStart());

    try {
      const response = await axios.post("https://acubed-backend-production.up.railway.app/api/v1/auth/register",{ firstName, lastName, email, dateOfBirth, password, confirmPassword, gender, address, phoneNumber })

      if ((response.data.status).toString() === '201') {

        // Navigate to the next screen after successful login
        navigation.navigate('Main'); // Replace 'Home' with the name of your target screenif (response.data.token) {
        // Store the token in Redux or AsyncStorage (for persistent storage)
        dispatch(signupSuccess({ user: response.data.user, token: response.data.token }));


        // Navigate to the next screen after successful login
        navigation.navigate('Main'); // Replace 'Home' with the name of your target screen
      } else {
        // Simulate login failure
        dispatch(signupFailure('Invalid username or password.'));
      }
    } catch (error) {
      // Handle API errors (e.g., network issues, server errors, etc.)
      dispatch(signupFailure('An error occurred during login.'));
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
          placeholder={'Date of Birth'}
          onChangeText={(text) => setDateOfBirth(text)}
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
          onChangeText={(text) => setGender(text)}
          placeholder={'Gender'}
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
          onChangeText={(text) => setAddress(text)}
          placeholder={'Address'}
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

  // justifyContent:"center"    its not working in js engine: hermes
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

  // justifyContent:"center"    its not working in js engine: hermes
},
buttonText1: {
  color: 'white',
  fontSize: 16,
  fontWeight: 'bold',
  textAlign: 'center',
},
})