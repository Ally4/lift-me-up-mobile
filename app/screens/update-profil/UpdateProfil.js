import 'react-native-gesture-handler';
import axios from 'axios';
import React, { useEffect, useState} from 'react';
// import { StatusBar } from 'expo-status-bar';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native'; 
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { updateProfileStart, updateProfileSucess, updateProfileFailure } from '../../features/auth/updateProfileSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { Button } from 'react-native-elements';


export default function UpdateProfil() {

  const navigation = useNavigation(); 

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [image, setImage] = useState('');
  const [secret, setSecret] = useState('');

// This to fetch the image
// const [image, setImage] = useState();


const requestPermission = async () => {
  // const result = await Permissions.askAsync(Permissions.MEDIA_LIBRARY, Permissions.LOCATION_BACKGROUND);
  // result.grant
  const {granted} = await ImagePicker.requestMediaLibraryPermissionsAsync();
  if (!granted) alert("You need to unable permission to access the library")
}

const getToken = async ()=>{
  try {
    const theToken = await AsyncStorage.getItem('token');
    console.log("kkkkkkkkkkkkkkkkkkkkkk", theToken)
    // await AsyncStorage.setItem('token', theToken)
    setSecret(theToken);
  } catch (error) {
    
  }
}

useEffect(() => {
  requestPermission();
  getToken();
}, [])


const selectImage =async () => {
try {
  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    quality: 0.5,
  });
  if(!result.canceled)
  setImage(result.uri)
} catch (error) {
  console.log("This is the error on reading an image", error)
}
} 


  const dispatch = useDispatch();
  const handleUpdateProfile = async () => {
    if (!firstName || !lastName || !email || !dateOfBirth || !gender || !phoneNumber) {
      dispatch(updateProfileFailure('Please enter the required field.'));
      return;
    }
    dispatch(updateProfileStart());
    try {
      console.log("ttttttttttttttttttttttttttttttt", secret)
      // const response = await axios.patch("https://acubed-backend-production.up.railway.app/api/v1/auth/update-profile",{ firstName, lastName, email, dateOfBirth, gender, phoneNumber, image },{
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'Authorization': `${secret}`,
      //   }})
        const response = await axios.patch("http://172.16.19.200:1234/api/v1/auth/update-profile",{ firstName, lastName, email, dateOfBirth, gender, phoneNumber, image },{
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `${secret}`,
          }})

        console.log('mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm', response)
      if ((response.data.status).toString() === '200') {
        console.log("===========================================", response.data)
        await AsyncStorage.setItem('AccessToken', response.data.token)
        await AsyncStorage.setItem('name', response.data.user)
        dispatch(updateProfileSucess({ user: response.data.user, token: response.data.token }));
        navigation.navigate('Main');
      } else {
        dispatch(updateProfileFailure('Something might be wrong'));
      }
    } catch (error) {
      console.log('jjjjjjjjjjj', error)
      dispatch(updateProfileFailure('This error is from the server'));
    }
  };






  return (
      <SafeAreaView style={styles.container}> 
      <ScrollView >
        <View style={{backgroundColor:"black", width:250, height:250, borderRadius:150, opacity:0.2, top: -90, left:-90}}></View>
        <Image source={require("../../assets/photos/colab.png")} style={{marginBottom:20, marginLeft:70}}/>
        <View style={{backgroundColor:"white", flex:2, borderTopRightRadius:30, borderTopLeftRadius:30}}>
          <View>
          <Button title="Select Image" onPress={selectImage}></Button>
          <Image source={{ uri: image}} style={{width:200, height: 200 }}/>
        </View>
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
          onChangeText={(text) => setDob(text)}
          placeholder={'Date of Birth'}
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
          onChangeText={(text) => setPhoneNumber(text)}
          placeholder={'Phone Number'}
          />
          <TouchableOpacity style={styles.button1}
          onPress={() => handleUpdateProfile()}
           > 
            <Text style={styles.buttonText1}>Update your Profil</Text>
           </TouchableOpacity>
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