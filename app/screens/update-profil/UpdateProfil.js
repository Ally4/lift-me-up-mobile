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
import Snackbar from 'react-native-snackbar';


export default function UpdateProfil() {

  const navigation = useNavigation(); 

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [city, setCity] = useState('');
  const [occupation, setOccupation] = useState('');
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [image, setImage] = useState('');
  const [secret, setSecret] = useState('');

// This to fetch the image
// const [image, setImage] = useState();


const requestPermission = async () => {
  const {granted} = await ImagePicker.requestMediaLibraryPermissionsAsync();
  if (!granted) alert("You need to unable permission to access the library")
}

const getToken = async ()=>{
  try {
    const theToken = await AsyncStorage.getItem('token');
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
    if (!firstName || !lastName || !city || !occupation ||!email || !dateOfBirth || !gender || !phoneNumber) {    
      const err = 'Please enter the required field.';
      Snackbar.show({
        text: err,
        duration: Snackbar.LENGTH_LONG,
      });
      dispatch(updateProfileFailure('Please enter the required field.'));
      return;
    }
    dispatch(updateProfileStart());
    try {
      const formData = new FormData();
      formData.append('firstName', firstName);
      formData.append('lastName', lastName);
      formData.append('city', city);
      formData.append('occupation', occupation);
      formData.append('email', email);
      formData.append('dateOfBirth', dateOfBirth);
      formData.append('gender', gender);
      formData.append('phoneNumber', phoneNumber);
      formData.append('image', {
        uri: image,
        type: 'image/jpg',
        name: 'image.jpg',
      });

      const response = await axios.patch("https://acubed-backend-production.up.railway.app/api/v1/auth/update-profile", formData ,{
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `${secret}`,
      }})

      const resultData = response.data;
      if ((resultData.status).toString() === '200') {
        // await AsyncStorage.setItem('profilPicture', resultData.data.profilPicture)
        await AsyncStorage.setItem('name', resultData.data.firstname)

        
        dispatch(updateProfileSucess({ user: resultData.data.firstname, token: secret }));
        navigation.navigate('Main');
      } else {   
        const err = 'check well the input you are entering';
        Snackbar.show({
          text: err,
          duration: Snackbar.LENGTH_LONG,
        });
        dispatch(updateProfileFailure('check well the input you are entering'));
      }
    } catch (error) { 
      const err = error.response?.data?.message || error.message;;
      Snackbar.show({
        text: err,
        duration: Snackbar.LENGTH_LONG,
      });
      dispatch(updateProfileFailure('This error is from the server'));
    }
  };






  return (
      <SafeAreaView style={styles.container}> 
      <ScrollView >
        <View style={{backgroundColor:"black", width:250, height:250, borderRadius:150, opacity:0.2, top: -90, left:-90}}></View>
        <TouchableOpacity onPress={() => navigation.goBack()} ><Image source={require("../../assets/photos/left-chevron.png")} style={{marginTop:-200, marginLeft:10, width:20, height:20}}/></TouchableOpacity>
        <View style={styles.logo}><Image source={require("../../assets/photos/colab.png")} /></View>
        <View style={styles.update}>
          <View>
          <Button title="Select Image" onPress={selectImage}></Button>
          <Image source={{ uri: image}} style={{width:100, height: 200 }}/>
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
            // marginLeft:40
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
            // marginLeft:40
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
            // marginLeft:40
          }}
          placeholder={'City'}
          onChangeText={(text) => setCity(text)}
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
          placeholder={'Occupation'}
          onChangeText={(text) => setOccupation(text)}
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
            // marginLeft:40
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
            // marginLeft:40
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
            // marginLeft:40
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
  display:'flex',
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  marginVertical: 10,
},
update : {
  backgroundColor: '#FFFFff',
  display:'flex',
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  paddingBottom: 10,
},
})