import 'react-native-gesture-handler';
// import { StatusBar } from 'expo-status-bar';
import axios from 'axios';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { SafeAreaView, StyleSheet, Text, View, Image, Button, TouchableOpacity, TextInput, ScrollView, Alert } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native'; 
import { orderStart, orderSuccess, orderFailure } from '../../features/auth/orderSlice';
import Snackbar from 'react-native-snackbar';

export default function OrderKibruLipase() {

  const navigation = useNavigation(); 

  const [name, setName] = useState('');
  const [sex, setSex] = useState('');
  const [age, setAge] = useState('');
  const [hospitalName, setHospitalName] = useState('');
  const [department, setDepartment] = useState('');
  const [roomNumber, setRoomNumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');



  // const showAlert = () => {
  //   Alert.alert(
  //     'Order',
  //     'Order submitted, if wrote mobile, pay on: 0941841870',
  //     [
  //       { text: 'OK', onPress: () => navigation.navigate('Main') },
  //       // You can add more buttons with additional onPress handlers.
  //     ],
  //     { cancelable: false }
  //   );
  // };




  const dispatch = useDispatch();
  const handleOrder = async () => {
    if (!name || !hospitalName || !department || !sex || !age || !roomNumber || !phoneNumber) {   
      const err = 'You miss something in your order.';
      Snackbar.show({
        text: err,
        duration: Snackbar.LENGTH_LONG,
      });
      dispatch(orderFailure('You miss something in your order.'));
      return;
    }
    dispatch(orderStart());
    try {
      const response = await axios.post("https://acubed-backend-production.up.railway.app/api/v1/tests/order-hospital",{ name, hospitalName, department, sex, age, roomNumber, phoneNumber});
      if ((response.data.status).toString() === '201') {
        dispatch(orderSuccess({ user: response.data.user, token: response.data.token }));
        navigation.navigate('Main');
      } else {
        const err = 'You miss something in your order.';
        Snackbar.show({
          text: err,
          duration: Snackbar.LENGTH_LONG,
        });
        dispatch(orderFailure('You miss something in your order.'));
      }
    } catch (error) {      
      const err = error.response?.data?.message || error.message;
      Snackbar.show({
        text: err,
        duration: Snackbar.LENGTH_LONG,
      });
      dispatch(orderFailure('An error occurred during the order.'));
    }
  };






  return (
      <SafeAreaView> 
        <ScrollView>
        <View style={{backgroundColor:'#2FCBD8', borderBottomRightRadius:30, borderBottomLeftRadius:30}}>
        <TouchableOpacity onPress={() => navigation.goBack()} ><Image source={require("../../assets/photos/left-chevron.png")} style={{marginTop:50, marginLeft:10, width:20, height:20}}/><Text style={styles.orderText}>Order</Text></TouchableOpacity>
        <View >
         <View style={{padding:20}}>
          <View style={{flex:1, flexDirection: 'row', justifyContent: 'space-between',marginBottom:20}}>
            <View><Text style={{fontWeight:'bold', fontSize:20, color:'white'}}>Test Type </Text></View>
            <View><Text style={{fontWeight:'bold', fontSize:20, color:'black'}}>Lipase</Text></View>
          </View>
          <View style={{flex:1, flexDirection: 'row', justifyContent: 'space-between',marginBottom:20}}>
            <View><Text style={{fontWeight:'bold', fontSize:20, color:'white'}}>Facility Name</Text></View>
            <View><Text style={{fontWeight:'bold', fontSize:20, color:'black'}}>Kibru Hospital</Text></View>
          </View>
          <View style={{flex:1, flexDirection: 'row', justifyContent: 'space-between',marginBottom:20}}>
            <View><Text style={{fontWeight:'bold', fontSize:20, color:'white'}}>Price </Text></View>
            <View><Text style={{fontWeight:'bold', fontSize:20, color:'black'}}>$50</Text></View>
          </View>
          <View style={{flex:1, flexDirection: 'row', justifyContent: 'space-between',marginBottom:20}}>
            <View><Text style={{fontWeight:'bold', fontSize:20, color:'white'}}>Turnaround time</Text></View>
            <View><Text style={{fontWeight:'bold', fontSize:20, color:'black'}}>1hour</Text></View>
          </View>

        </View>
        </View>
        </View>
        <Text style={{fontSize:25, marginLeft:10, marginTop:20}}>Sample Collection Point</Text>


        <View style={{display:'flex', flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row',padding: 1, width:'100%'}}>
    <TouchableOpacity style={styles.fromHospital} onPress={() => navigation.navigate('Order')}>
       <Text style={styles.confirmOrderText1}>Hospital</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.fromOther} onPress={() => navigation.navigate('OrderOtherLipase')}>
       <Text style={styles.cancelOrderText1}>Others</Text>
     </TouchableOpacity>
    </View>


        {/* <View style={{width:350, marginLeft:10, borderRadius:10,padding:1, backgroundColor:'#2FCBD8', marginTop:10}}>
          <View style={{backgroundColor:'#2FCBD8', width:'50%', padding:15, borderRadius:10}}>
            <TouchableOpacity><Text style={{marginLeft:50, fontWeight:'bold', color:'white'}}>Hospital</Text></TouchableOpacity>
          </View>
          <View style={{backgroundColor:'white', width:'50%', marginLeft:'50%', marginTop:-49.5, padding:15, borderBottomRightRadius:10, borderTopRightRadius:10}}>
            <TouchableOpacity><Text style={{marginLeft:50, fontWeight:'bold', fontSize:15}}>Others</Text></TouchableOpacity>
          </View>
        </View> */}
        <View style={styles.order}>
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
           placeholder={'Name'}
           onChangeText={(text) => setName(text)}
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
           placeholder={'Hospital Name'}
           onChangeText={(text) => setHospitalName(text)}
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
           placeholder={'Room Number'}
           onChangeText={(text) => setRoomNumber(text)}
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
           placeholder={'Phone Number'}
           onChangeText={(text) => setPhoneNumber(text)}
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
    <View style={{marginTop:20,   display:'flex', flex: 1, justifyContent: 'center', alignItems: 'center', padding: 1, width:'100%'}}>
    <TouchableOpacity style={styles.confirmOrder} onPress={() => handleOrder()}>
       <Text style={styles.confirmOrderText}>Confirm</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.cancelOrder} onPress={() => navigation.navigate('Main')}>
       <Text style={styles.cancelOrderText}>Cancel Order</Text>
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
orderText: {
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


confirmOrder: {
  borderWidth:1,
  borderColor:'#2FCBD8',
  backgroundColor: '#2FCBD8',
  padding: 10,
  borderRadius: 10,
  width:'90%',
  // marginLeft:20  
},
fromHospital: {
  zIndex:1000,
  borderWidth:1,
  borderColor:'#2FCBD8',
  backgroundColor: '#2FCBD8',
  padding: 10,
  borderRadius: 10,
  width:'47%',
  marginRight:-10,
  // marginLeft:20  
},
confirmOrderText1: {
  color: 'white',
  fontSize: 16,
  fontWeight: 'bold',
  textAlign: 'center',
},
confirmOrderText: {
  color: 'white',
  fontSize: 16,
  fontWeight: 'bold',
  textAlign: 'center',
},
cancelOrder: {
  backgroundColor: 'white',
  padding: 10,
  borderRadius: 10,
  borderColor:'#2FCBD8',
  borderWidth:2,
  width:'90%',
  marginTop:20,
  // marginLeft:20,
  marginBottom:20,  
},
fromOther: {
  backgroundColor: 'white',
  padding: 9,
  borderColor:'#2FCBD8',
  borderWidth:2,
  width:'45%',
  borderBottomRightRadius:10,
  borderTopRightRadius:10, 
},
cancelOrderText1: {
  color: 'black',
  fontSize: 16,
  fontWeight: 'bold',
  textAlign: 'center',
},
cancelOrderText: {
  color: '#2FCBD8',
  fontSize: 16,
  fontWeight: 'bold',
  textAlign: 'center',
},
order : {
  // backgroundColor: '#FFFFff',
  display:'flex',
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
},
})
