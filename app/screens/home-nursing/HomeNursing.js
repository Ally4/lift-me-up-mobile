// import 'react-native-gesture-handler';
// // import { StatusBar } from 'expo-status-bar';
// import axios from 'axios';
// import React, { useState } from 'react';
// import { Picker } from '@react-native-picker/picker';
// import { SafeAreaView, StyleSheet, Text, View, Image, Button, TouchableOpacity, TextInput, ScrollView, Alert } from 'react-native';
// import ImagePicker from 'react-native-image-picker';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigation } from '@react-navigation/native'; 
// import { orderStart, orderSuccess, orderFailure } from '../../features/auth/orderSlice';

// export default function HomeNursing(){

//   const navigation = useNavigation(); 

//   const [nameOfTest, setNameOfTest] = useState('');
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [sex, setSex] = useState('');
//   const [age, setAge] = useState('');
//   const [accessPoint, setAccessPoint] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [payment, setPayment] = useState('');



//   const showAlert = () => {
//     Alert.alert(
//       'Order',
//       'Order submitted, if wrote mobile, pay on: 0941841870',
//       [
//         { text: 'OK', onPress: () => navigation.navigate('Main') },
//         // You can add more buttons with additional onPress handlers.
//       ],
//       { cancelable: false }
//     );
//   };




//   const dispatch = useDispatch();
//   const handleOrder = async () => {
//     if (!nameOfTest || !firstName || !lastName || !sex || !age || !accessPoint || !phoneNumber || !payment) {
//       dispatch(orderFailure('You miss something in your order.'));
//       return;
//     }
//     dispatch(orderStart());
//     try {
//       const response = await axios.post("https://acubed-backend-production.up.railway.app/api/v1/tests/order-hospital",{ nameOfTest, firstName, lastName, sex, age, accessPoint, phoneNumber, payment});
//       if ((response.data.status).toString() === '201') {
//         dispatch(orderSuccess({ user: response.data.user, token: response.data.token }));
//         navigation.navigate('Main');
//       } else {
//         dispatch(orderFailure('You miss something in your order.'));
//       }
//     } catch (error) {
//       dispatch(orderFailure('An error occurred during the order.'));
//     }
//   };






//   return (
//       <SafeAreaView> 
//         <ScrollView>
//         <View style={{backgroundColor:'#2FCBD8', borderBottomRightRadius:30, borderBottomLeftRadius:30}}>
//         <TouchableOpacity onPress={() => navigation.goBack()} ><Image source={require("../../assets/photos/left-arrow.png")} style={{marginTop:50, marginLeft:10, width:40, height:40}}/><Text style={styles.orderText}>Order</Text></TouchableOpacity>
//         <View >
//          <View style={{marginTop:20, padding:20, width:350}}>
//           <View style={{marginBottom:20}}>
//             <Text style={{fontWeight:'bold', fontSize:20, color:'white'}}>Welcome to co-lab order process</Text>
//             {/* <Text style={{fontWeight:'bold', marginLeft:180, marginTop:-25, fontSize:20}}>Urine Analysis</Text> */}
//            </View>
//           <View style={{marginBottom:20}}>
//             <Text style={{fontWeight:'bold', fontSize:20, color:'white'}}>Here we process your lab test in the turn around of 1 hour</Text>
//             {/* <Text style={{fontWeight:'bold', marginLeft:160, marginTop:-25, fontSize:20}}>Alation Hospital</Text> */}
//           </View>
//           <View style={{marginBottom:20}}>
//             <Text style={{fontWeight:'bold', fontSize:20, color:'white'}}>Just proceed by filling the required field accordingly</Text>
//             {/* <Text style={{fontWeight:'bold', marginLeft:270, marginTop:-25, fontSize:20}}>50$</Text> */}
//           </View>
//           {/* <View style={{marginBottom:20}}>
//             <Text style={{fontWeight:'bold', fontSize:20, color:'white'}}>Here</Text>
//             <Text style={{fontWeight:'bold', marginLeft:270, marginTop:-25, fontSize:20}}>1h</Text>
//           </View> */}
//         </View>
//         </View>
//         </View>
//         <Text style={{fontSize:25, marginLeft:10, marginTop:20}}>Sample Collection Point</Text>
//         {/* <View style={{width:350, marginLeft:10, borderRadius:10,padding:1, backgroundColor:'#2FCBD8', marginTop:10}}>
//           <View style={{backgroundColor:'#2FCBD8', width:'50%', padding:15, borderRadius:10}}>
//             <TouchableOpacity><Text style={{marginLeft:50, fontWeight:'bold', color:'white'}}>Hospital</Text></TouchableOpacity>
//           </View>
//           <View style={{backgroundColor:'white', width:'50%', marginLeft:'50%', marginTop:-49.5, padding:15, borderBottomRightRadius:10, borderTopRightRadius:10}}>
//             <TouchableOpacity><Text style={{marginLeft:50, fontWeight:'bold', fontSize:15}}>Others</Text></TouchableOpacity>
//           </View>
//         </View> */}
//         <View style={styles.order}>
//         <TextInput
//            style={{
//              backgroundColor: 'white',
//              padding: 10,
//              borderRadius: 5,
//              borderColor:"#2FCBD8",
//              borderWidth:1,
//              width:'90%',
//              marginTop:20,
//             //  marginLeft:10
//            }}
//            placeholder={'Name of the test'}
//            onChangeText={(text) => setNameOfTest(text)}
//            />
//         <TextInput
//            style={{
//              backgroundColor: 'white',
//              padding: 10,
//              borderRadius: 5,
//              borderColor:"#2FCBD8",
//              borderWidth:1,
//              width:'90%',
//              marginTop:20,
//             //  marginLeft:10
//            }}
//            placeholder={'First Name'}
//            onChangeText={(text) => setFirstName(text)}
//            />
//                 <TextInput
//            style={{
//              backgroundColor: 'white',
//              padding: 10,
//              borderRadius: 5,
//              borderColor:"#2FCBD8",
//              borderWidth:1,
//              width:'90%',
//              marginTop:20,
//             //  marginLeft:10
//            }}
//            placeholder={'Last Name'}
//            onChangeText={(text) => setLastName(text)}
//            />
//                    <TextInput
//            style={{
//              backgroundColor: 'white',
//              padding: 10,
//              borderRadius: 5,
//              borderColor:"#2FCBD8",
//              borderWidth:1,
//              width:'90%',
//              marginTop:20,
//             //  marginLeft:10
//            }}
//            placeholder={'Male or Female'}
//            onChangeText={(text) => setSex(text)}
//            />
//                    <TextInput
//            style={{
//              backgroundColor: 'white',
//              padding: 10,
//              borderRadius: 5,
//              borderColor:"#2FCBD8",
//              borderWidth:1,
//              width:'90%',
//              marginTop:20,
//             //  marginLeft:10
//            }}
//            placeholder={'Age'}
//            onChangeText={(text) => setAge(text)}
//            />
//                    <TextInput
//            style={{
//              backgroundColor: 'white',
//              padding: 10,
//              borderRadius: 5,
//              borderColor:"#2FCBD8",
//              borderWidth:1,
//              width:'90%',
//              marginTop:20,
//             //  marginLeft:10
//            }}
//            placeholder={'Hospital Name or access point'}
//            onChangeText={(text) => setAccessPoint(text)}
//            />
//                    {/* <TextInput
//            style={{
//              backgroundColor: 'white',
//              padding: 10,
//              borderRadius: 5,
//              borderColor:"#2FCBD8",
//              borderWidth:1,
//              width:'90%',
//              marginTop:20,
//              marginLeft:10
//            }}
//            placeholder={'Department'}
//            /> */}
//                    {/* <TextInput
//            style={{
//              backgroundColor: 'white',
//              padding: 10,
//              borderRadius: 5,
//              borderColor:"#2FCBD8",
//              borderWidth:1,
//              width:'90%',
//              marginTop:20,
//              marginLeft:10
//            }}
//            placeholder={'Room number'}
//            /> */}
//           <TextInput
//            style={{
//              backgroundColor: 'white',
//              padding: 10,
//              borderRadius: 5,
//              borderColor:"#2FCBD8",
//              borderWidth:1,
//              width:'90%',
//              marginTop:20,
//             //  marginLeft:10
//            }}
//            placeholder={'Phone Number'}
//            onChangeText={(text) => setPhoneNumber(text)}
//            />
//           <TextInput
//            style={{
//              backgroundColor: 'white',
//              padding: 10,
//              borderRadius: 5,
//              borderColor:"#2FCBD8",
//              borderWidth:1,
//              width:'90%',
//              marginTop:20,
//             //  marginLeft:10
//            }}
//            placeholder={'Payment: if mobile payment write mobile else write cash'}
//            onChangeText={(text) => setPayment(text)}
//            />
//           {/* <Text style={{fontSize:25, marginLeft:10, marginTop:20}}>Payment Method</Text>
//             <View>
//       <Picker
//         selectedValue={selectedOption}
//         onValueChange={handleOptionChange}
//                   style={{
//              backgroundColor: 'white',
//              padding: 10,
//              borderRadius: 5,
//              borderColor:"#2FCBD8",
//              borderWidth:1,
//              width:'90%',
//              marginTop:20,
//              marginLeft:10
//            }}
//       >
//         <Picker.Item label="Select your payment mode" style={{color:'#2FCBD8'}}/>
//         <Picker.Item label="Cash" value="option1" />
//         <Picker.Item label="Mobile Pay" value="option2" />
//       </Picker>
//     </View> */}


//      {/* <View>
//       <Button title="Select Image" onPress={handleImageUpload} style={{color:'#2FCBD8', width:'90%'}} />
//       {selectedImage && <Image source={selectedImage} style={{ width: 200, height: 200 }} />}
//     </View> */}
//     <View style={{marginTop:20}}>
//     <TouchableOpacity style={styles.confirmOrder} onPress={() => {handleOrder(), showAlert()}}>
//        <Text style={styles.confirmOrderText}>Confirm Order</Text>
//      </TouchableOpacity>
//      <TouchableOpacity style={styles.cancelOrder} onPress={() => navigation.navigate('Main')}>
//        <Text style={styles.cancelOrderText}>Cancel Order</Text>
//      </TouchableOpacity>
//     </View>
// </View>
//         </ScrollView>
//       </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor:"#2FCBD8",
// },
// button: {
//   backgroundColor: 'white',
//   padding: 10,
//   borderRadius: 5,
//   width:300,
//   marginLeft:40

  
// },
// button2: {
//   backgroundColor: 'white',
//   padding: 10,
//   borderRadius: 5,
//   width:300,
//   marginLeft:40,
//   marginTop:20,
//   borderWidth: 2,
//   borderColor: "#2FCBD8",

  
// },
// buttonText: {
//   color: '#000',
//   fontSize: 16,
//   fontWeight: 'bold',
//   textAlign: 'center',
// },
// button1: {
//   backgroundColor: '#2FCBD8',
//   padding: 10,
//   borderRadius: 5,
//   borderColor:"white",
//   borderWidth:2,
//   width:300,
//   marginTop:20,
//   marginLeft:40

  
// },
// orderText: {
//   color: 'white',
//   fontSize: 30,
//   fontWeight: 'bold',
//   textAlign: 'center',
//   marginTop:-35
// },
// line: {
//   height: 1,
//   width: '40%',
//   backgroundColor: '#2FCBD8',
//   marginTop:20,
// },
// lineBox: {
//   marginLeft:150,
// },
// lineText: {
//   marginLeft:25,
//   marginTop:15,
// },
// resetText: {
//   marginTop: 20,
//   fontWeight: 'bold',
//   textAlign: 'center',
// },
// resetParagraphEnter: {
//   textAlign: 'center',
//   marginRight: 10,
// },


// confirmOrder: {
//   borderWidth:1,
//   borderColor:'#2FCBD8',
//   backgroundColor: '#2FCBD8',
//   padding: 10,
//   borderRadius: 10,
//   width:'400%',
//   // marginLeft:20

  
// },
// confirmOrderText: {
//   color: 'white',
//   fontSize: 16,
//   fontWeight: 'bold',
//   textAlign: 'center',
// },
// cancelOrder: {
//   backgroundColor: 'white',
//   padding: 10,
//   borderRadius: 10,
//   borderColor:'#2FCBD8',
//   borderWidth:2,
//   width:'400%',
//   marginTop:20,
//   // marginLeft:20,
//   marginBottom:20,
  
// },
// cancelOrderText: {
//   color: '#2FCBD8',
//   fontSize: 16,
//   fontWeight: 'bold',
//   textAlign: 'center',
// },
// order : {
//   // backgroundColor: '#FFFFff',
//   display:'flex',
//   flex: 1,
//   justifyContent: 'center',
//   alignItems: 'center',
// },
// })







import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function UrineAnalysis() {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [picture, setPicture] = useState('');

  const data = [
    { id: '1', title: 'Urine Analysis' },
    { id: '2', title: 'Serum Sodium' },
    { id: '3', title: 'Giving specimen' },
    { id: '4', title: 'Saliva test' },
    { id: '5', title: 'Home nursing' },
  ];

  const getData = async () => {
    try {
      const username = await AsyncStorage.getItem('name');
      setName(username);
    } catch (error) {
      // Handle errors
    }
  }

  const getPic = async () => {
    try {
      const proPicture = await AsyncStorage.getItem('profilPicture');
      setPicture(proPicture);
    } catch (error) {
      // Handle errors
    }
  }

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getPic();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{ backgroundColor: "#2FCBD8", width: 250, height: 250, borderRadius: 180, top: -150, left: -120 }}></View>
        <View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require("../../assets/photos/left-chevron.png")} style={{ marginTop: -190, marginLeft: 10, width: 20, height: 20 }} />
          </TouchableOpacity>
        </View>
        <View style={styles.labtest}>
        <Text style={styles.lab}>Lab test</Text>
        <Text style={styles.test}>Home Nursing</Text>
        <Text style={styles.testText}>These are the places you can find a home nurse</Text>
        <View style={styles.main}>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              padding: 10,
              borderRadius: 10,
              borderColor: "#2FCBD8",
              borderWidth: 1,
              width: '90%',
              height: 50,
              marginTop: 20,
            }}
          >
            <View style={styles.hospital}>
              <View style={styles.hospitalname}>
                <View><Text>Allation Hospital</Text></View>
                <View style={styles.correct}>
                  <View><Image source={require("../../assets/photos/correct.png")} style={{width:15, height:15,}}></Image></View>
                  <View><Image></Image></View>
                </View>
              </View>
              <View><Image source={require("../../assets/photos/new-moon.png" )} style={{width:35, height:35,}} /></View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              padding: 10,
              borderRadius: 10,
              borderColor: "#2FCBD8",
              borderWidth: 1,
              width: '90%',
              height: 50,
              marginTop: 20,
            }}
          >
            <View style={styles.hospital}>
              <View style={styles.hospitalname}>
                <View><Text>Kibru Hospital</Text></View>
                <View style={styles.correct}>
                  <View><Image source={require("../../assets/photos/correct.png")} style={{width:15, height:15,}}></Image></View>
                  <View><Image></Image></View>
                </View>
              </View>
              <View><Image source={require("../../assets/photos/new-moon.png" )} style={{width:35, height:35,}} /></View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              padding: 10,
              borderRadius: 10,
              borderColor: "#2FCBD8",
              borderWidth: 1,
              width: '90%',
              height: 50,
              marginTop: 20,
            }}
          >
            <View style={styles.hospital}>
              <View style={styles.hospitalname}>
                <View><Text>Naol Hospital</Text></View>
                <View style={styles.correct}>
                  <View><Image source={require("../../assets/photos/correct.png")} style={{width:15, height:15,}}></Image></View>
                  <View><Image></Image></View>
                </View>
              </View>
              <View><Image source={require("../../assets/photos/new-moon.png" )} style={{width:35, height:35,}} /></View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              padding: 10,
              borderRadius: 10,
              borderColor: "#2FCBD8",
              borderWidth: 1,
              width: '90%',
              height: 50,
              marginTop: 20,
            }}
          >
            <View style={styles.hospital}>
              <View style={styles.hospitalname}>
                <View><Text>Yanet Hospital</Text></View>
                <View style={styles.correct}>
                  <View><Image source={require("../../assets/photos/correct.png")} style={{width:15, height:15,}}></Image></View>
                  <View><Image></Image></View>
                </View>
              </View>
              <View><Image source={require("../../assets/photos/new-moon.png" )} style={{width:35, height:35,}} /></View>
            </View>
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
    backgroundColor: "white",
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
helloText: {
  fontWeight:'bold',
  fontSize: 40,
  marginLeft:10,
  marginTop:-80,
},
abebeText: {
  color: '#2FCBD8',
  fontWeight:'bold',
  fontSize: 40,
},
testText: {
  color: 'grey',
  fontWeight:'bold',
  fontSize: 15,
  marginLeft:10,
},
labText: {
  color: 'black',
  fontWeight:'bold',
  fontSize: 20,
  marginLeft:10,
},
main : {
  // backgroundColor: '#FFFF00',
  display:'flex',
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
},
flat: {
  paddingLeft:5,
  paddingRight:5,
  paddingTop:7,
  paddingBottom:7,
  borderColor: '#2FCBD8',
  borderRadius: 5,
  borderWidth: 1,
  margin: 7,
},
lab: {
  textAlign: 'center',
  fontSize:30,
  fontWeight: 'bold',
  marginBottom: 50,
  color: '#2FCBD8',
},
test: {
  textAlign: 'center',
  fontSize:20,
  fontWeight: 'bold',
},
labtest: {
  top: -160,
},
hospital: {
  display:'flex',
  flexDirection: 'row',
  flex: 1,
  justifyContent: 'space-between',
  alignItems: 'center',
},
hospitalname: {
  display:'flex',
  flexDirection: 'row',
  flex: 1,
  alignItems: 'center',
},
correct: {
  display:'flex',
  flexDirection: 'row',
  flex: 1,
  alignItems: 'center',
  marginBottom:15,
}
});
