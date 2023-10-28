import 'react-native-gesture-handler';
// import { StatusBar } from 'expo-status-bar';
import axios from 'axios';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { SafeAreaView, StyleSheet, Text, View, Image, Button, TouchableOpacity, TextInput, ScrollView, Alert } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native'; 
import { bookingStart, bookingSuccess, bookingFailure } from '../../features/auth/bookingSlice';

export default function Booking() {

  const navigation = useNavigation(); 

  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [sex, setSex] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [healthFacility, setHealthFacility] = useState('');
  const [department, setDepartment] = useState('');
  const [particularDoctor, setParticularDoctor] = useState('');
  const [rendezVous, setRendezVous] = useState('');



  const showAlert = () => {
    Alert.alert(
      'Booking',
      'Booking submitted, for any further explaination you can call us on: 0941841870',
      [
        { text: 'OK', onPress: () => navigation.navigate('Main') },
        // You can add more buttons with additional onPress handlers.
      ],
      { cancelable: false }
    );
  };




  const dispatch = useDispatch();
  const handleBooking = async () => {
    if (!firstName || !lastName || !phoneNumber || !email || !sex || !age || !address || !healthFacility || !department || !particularDoctor || !rendezVous) {
      dispatch(bookingFailure('You miss something in your booking.'));
      return;
    }
    dispatch(bookingStart());
    try {
      const response = await axios.post("https://acubed-backend-production.up.railway.app/api/v1/book/appointment",{ firstName, lastName, phoneNumber, email, sex, age, address, healthFacility, department, particularDoctor, rendezVous});
      if ((response.data.status).toString() === '201') {
        dispatch(bookingSuccess({ user: response.data.user, token: response.data.token }));
        navigation.navigate('Main');
      } else {
        dispatch(bookingFailure('You miss something in your booking.'));
      }
    } catch (error) {
      dispatch(bookingFailure('An error occurred during the booking.'));
    }
  };






  return (
      <SafeAreaView> 
        <ScrollView>
        <View style={{backgroundColor:'#2FCBD8', borderBottomRightRadius:30, borderBottomLeftRadius:30}}>
        <TouchableOpacity onPress={() => navigation.goBack()} ><Image source={require("../../assets/photos/left-arrow.png")} style={{marginTop:50, marginLeft:10, width:40, height:40}}/><Text style={styles.bookingText}>Booking</Text></TouchableOpacity>
        <View >
         <View style={{marginTop:20, padding:20, width:350}}>
          <View style={{marginBottom:20}}>
            <Text style={{fontWeight:'bold', fontSize:20, color:'white'}}>Welcome to co-lab booking appointment process</Text>
            {/* <Text style={{fontWeight:'bold', marginLeft:180, marginTop:-25, fontSize:20}}>Urine Analysis</Text> */}
           </View>
          {/* <View style={{marginBottom:20}}>
            <Text style={{fontWeight:'bold', fontSize:20, color:'white'}}>Here</Text>
            <Text style={{fontWeight:'bold', marginLeft:270, marginTop:-25, fontSize:20}}>1h</Text>
          </View> */}
        </View>
        </View>
        </View>
        <Text style={{fontSize:25, marginLeft:10, marginTop:20}}>Patient Info</Text>
        {/* <View style={{width:350, marginLeft:10, borderRadius:10,padding:1, backgroundColor:'#2FCBD8', marginTop:10}}>
          <View style={{backgroundColor:'#2FCBD8', width:'50%', padding:15, borderRadius:10}}>
            <TouchableOpacity><Text style={{marginLeft:50, fontWeight:'bold', color:'white'}}>Hospital</Text></TouchableOpacity>
          </View>
          <View style={{backgroundColor:'white', width:'50%', marginLeft:'50%', marginTop:-49.5, padding:15, borderBottomRightRadius:10, borderTopRightRadius:10}}>
            <TouchableOpacity><Text style={{marginLeft:50, fontWeight:'bold', fontSize:15}}>Others</Text></TouchableOpacity>
          </View>
        </View> */}
        <View style={styles.booking}>
        <TextInput
           style={{
             backgroundColor: 'white',
             padding: 10,
             borderRadius: 5,
             borderColor:"#2FCBD8",
             borderWidth:1,
             width:'90%',
             marginTop:20,
            //  marginLeft:10
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
             width:'90%',
             marginTop:20,
            //  marginLeft:10
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
             width:'90%',
             marginTop:20,
            //  marginLeft:10
           }}
           placeholder={'Phone number'}
           onChangeText={(text) => setPhoneNumber(text)}
           />
                   <TextInput
           style={{
             backgroundColor: 'white',
             padding: 10,
             borderRadius: 5,
             borderColor:"#2FCBD8",
             borderWidth:1,
             width:'90%',
             marginTop:20,
            //  marginLeft:10
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
             width:'90%',
             marginTop:20,
            //  marginLeft:10
           }}
           placeholder={'Sex'}
           onChangeText={(text) => setSex(text)}
           />
          <TextInput
           style={{
             backgroundColor: 'white',
             padding: 10,
             borderRadius: 5,
             borderColor:"#2FCBD8",
             borderWidth:1,
             width:'90%',
             marginTop:20,
            //  marginLeft:10
           }}
           placeholder={'Age'}
           onChangeText={(text) => setAge(text)}
           />
                   {/* <TextInput
           style={{
             backgroundColor: 'white',
             padding: 10,
             borderRadius: 5,
             borderColor:"#2FCBD8",
             borderWidth:1,
             width:'90%',
             marginTop:20,
             marginLeft:10
           }}
           placeholder={'Department'}
           /> */}
                   {/* <TextInput
           style={{
             backgroundColor: 'white',
             padding: 10,
             borderRadius: 5,
             borderColor:"#2FCBD8",
             borderWidth:1,
             width:'90%',
             marginTop:20,
             marginLeft:10
           }}
           placeholder={'Room number'}
           /> */}
          <TextInput
           style={{
             backgroundColor: 'white',
             padding: 10,
             borderRadius: 5,
             borderColor:"#2FCBD8",
             borderWidth:1,
             width:'90%',
             marginTop:20,
            //  marginLeft:10
           }}
           placeholder={'Address'}
           onChangeText={(text) => setAddress(text)}
           />
          <TextInput
           style={{
             backgroundColor: 'white',
             padding: 10,
             borderRadius: 5,
             borderColor:"#2FCBD8",
             borderWidth:1,
             width:'90%',
             marginTop:20,
            //  marginLeft:10
           }}
           placeholder={'Health Facility'}
           onChangeText={(text) => setHealthFacility(text)}
           />
          <TextInput
           style={{
             backgroundColor: 'white',
             padding: 10,
             borderRadius: 5,
             borderColor:"#2FCBD8",
             borderWidth:1,
             width:'90%',
             marginTop:20,
            //  marginLeft:10
           }}
           placeholder={'Department'}
           onChangeText={(text) => setDepartment(text)}
           />
          <TextInput
           style={{
             backgroundColor: 'white',
             padding: 10,
             borderRadius: 5,
             borderColor:"#2FCBD8",
             borderWidth:1,
             width:'90%',
             marginTop:20,
            //  marginLeft:10
           }}
           placeholder={'Any doctor in mind'}
           onChangeText={(text) => setParticularDoctor(text)}
           />
          <TextInput
           style={{
             backgroundColor: 'white',
             padding: 10,
             borderRadius: 5,
             borderColor:"#2FCBD8",
             borderWidth:1,
             width:'90%',
             marginTop:20,
            //  marginLeft:10
           }}
           placeholder={'The date of coming'}
           onChangeText={(text) => setRendezVous(text)}
           />
          {/* <Text style={{fontSize:25, marginLeft:10, marginTop:20}}>Payment Method</Text>
            <View>
      <Picker
        selectedValue={selectedOption}
        onValueChange={handleOptionChange}
                  style={{
             backgroundColor: 'white',
             padding: 10,
             borderRadius: 5,
             borderColor:"#2FCBD8",
             borderWidth:1,
             width:'90%',
             marginTop:20,
             marginLeft:10
           }}
      >
        <Picker.Item label="Select your payment mode" style={{color:'#2FCBD8'}}/>
        <Picker.Item label="Cash" value="option1" />
        <Picker.Item label="Mobile Pay" value="option2" />
      </Picker>
    </View> */}


     {/* <View>
      <Button title="Select Image" onPress={handleImageUpload} style={{color:'#2FCBD8', width:'90%'}} />
      {selectedImage && <Image source={selectedImage} style={{ width: 200, height: 200 }} />}
    </View> */}
    <View style={{marginTop:20}}>
    <TouchableOpacity style={styles.confirmBooking} onPress={() => {handleBooking(), showAlert()}}>
       <Text style={styles.confirmBookingText}>Confirm Booking</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.cancelBooking} onPress={() => navigation.navigate('Main')}>
       <Text style={styles.cancelBookingText}>Cancel Booking</Text>
     </TouchableOpacity>
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
  marginLeft:40

  
},
bookingText: {
  color: 'white',
  fontSize: 30,
  fontWeight: 'bold',
  textAlign: 'center',
  marginTop:-35
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
resetParagraphEnter: {
  textAlign: 'center',
  marginRight: 10,
},


confirmBooking: {
  borderWidth:1,
  borderColor:'#2FCBD8',
  backgroundColor: '#2FCBD8',
  padding: 10,
  borderRadius: 10,
  width:'400%',
  // marginLeft:20

  
},
confirmBookingText: {
  color: 'white',
  fontSize: 16,
  fontWeight: 'bold',
  textAlign: 'center',
},
cancelBooking: {
  backgroundColor: 'white',
  padding: 10,
  borderRadius: 10,
  borderColor:'#2FCBD8',
  borderWidth:2,
  width:'400%',
  marginTop:20,
  // marginLeft:20,
  marginBottom:20,
  
},
cancelBookingText: {
  color: '#2FCBD8',
  fontSize: 16,
  fontWeight: 'bold',
  textAlign: 'center',
},
booking : {
  // backgroundColor: '#FFFFff',
  display:'flex',
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
},
})
