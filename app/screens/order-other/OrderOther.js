import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { SafeAreaView, StyleSheet, Text, View, Image, Button, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import ImagePicker from 'react-native-image-picker';
// import { NavigationContainer} from '@react-navigation/native';
import SignupScreen from './app/screens/SignupScreen';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const Stack = createNativeStackNavigator();


export default function OrderOther() {





  // const [selectedGender, setSelectedGender] = useState('');

  // const handleGenderSelect = (gender) => {
  //   setSelectedGender(gender);
  // };

  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };


  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = () => {
    ImagePicker.showImagePicker({ title: 'Select Image' }, (response) => {
      if (response.didCancel) {
        console.log('Image selection was canceled.');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = { uri: response.uri };
        setSelectedImage(source);
      }
    });
  };







  return (
      <SafeAreaView> 
        <ScrollView>
      {/* <NavigationContainer> */}
      {/* <Stack.Navigator> */}
        {/* <View style={{backgroundColor:"black", width:250, height:250, borderRadius:150, opacity:0.2, top: -90, left:-90}}></View> */}
        <View style={{backgroundColor:'#2FCBD8', borderBottomRightRadius:30, borderBottomLeftRadius:30}}>
        <TouchableOpacity ><Image source={require("./app/assets/photos/left-arrow.png")} style={{marginTop:50, marginLeft:10, width:40, height:40}}/><Text style={styles.orderText}>Order</Text></TouchableOpacity>
        <View >
         <View style={{marginTop:20, padding:20, width:350, marginLeft:20}}>
          <View style={{marginBottom:20}}>
            <Text style={{fontWeight:'bold', fontSize:20, color:'white'}}>Test Type</Text><Text style={{fontWeight:'bold', marginLeft:180, marginTop:-25, fontSize:20}}>Urine Analysis</Text>
           </View>
          <View style={{marginBottom:20}}>
            <Text style={{fontWeight:'bold', fontSize:20, color:'white'}}>Facility Name</Text><Text style={{fontWeight:'bold', marginLeft:160, marginTop:-25, fontSize:20}}>Alation Hospital</Text>
          </View>
          <View style={{marginBottom:20}}>
            <Text style={{fontWeight:'bold', fontSize:20, color:'white'}}>Price</Text><Text style={{fontWeight:'bold', marginLeft:270, marginTop:-25, fontSize:20}}>50$</Text>
          </View>
          <View style={{marginBottom:20}}>
            <Text style={{fontWeight:'bold', fontSize:20, color:'white'}}>Turn Around Time</Text><Text style={{fontWeight:'bold', marginLeft:270, marginTop:-25, fontSize:20}}>1h</Text>
          </View>
        </View>
        </View>
        {/* <Image source={require("./app/assets/photos/colab.png")} style={{marginBottom:20, marginLeft:70}}/> */}
        {/* <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignupScreen')}> */}
        {/* <Stack.Screen name="Signu[" component={SignupScreen} /> */}
      {/* <Text style={styles.buttonText}>Login</Text> */}
    {/* </TouchableOpacity> */}
        {/* <Button title="Login" backgroundColor="#2FCBD8"  buttonText="#2FCBD8" color="white" width='50' height='50' borderRadius="50" borderColor="white" /> */}

          {/* <View style={{marginLeft:45, marginTop:30}}><SmoothPinCodeInput
            cellStyle={{
              borderBottomWidth: 2,
              borderColor: '#2FCBD8',
            }}
            cellStyleFocused={{
              borderColor: 'black',
            }}
            />
            </View> */}
        </View>
        <Text style={{fontSize:25, marginLeft:10, marginTop:20}}>Sample Collection Point</Text>
        <View style={{width:350, marginLeft:10, borderRadius:10,padding:1, backgroundColor:'#2FCBD8', marginTop:10}}>
          <View style={{ width:'50%', padding:15, backgroundColor:'white'}}>
            <TouchableOpacity><Text style={{marginLeft:50, fontWeight:'bold'}}>Hospital</Text></TouchableOpacity>
          </View>
          <View style={{backgroundColor:'#2FCBD8', width:'50%', marginLeft:'50%', marginTop:-49.5, padding:15, borderBottomRightRadius:10, borderTopRightRadius:10}}>
            <TouchableOpacity><Text style={{marginLeft:50, fontWeight:'bold', fontSize:15, color:'white'}}>Others</Text></TouchableOpacity>
          </View>
        </View>
        <TextInput
           style={{
             backgroundColor: 'white',
             padding: 10,
             borderRadius: 5,
             borderColor:"#2FCBD8",
             borderWidth:1,
             width:350,
             marginTop:20,
             marginLeft:10
           }}
           placeholder={'Name'}
           />
                   <TextInput
           style={{
             backgroundColor: 'white',
             padding: 10,
             borderRadius: 5,
             borderColor:"#2FCBD8",
             borderWidth:1,
             width:350,
             marginTop:20,
             marginLeft:10
           }}
           placeholder={'Male or Female'}
           />
                   <TextInput
           style={{
             backgroundColor: 'white',
             padding: 10,
             borderRadius: 5,
             borderColor:"#2FCBD8",
             borderWidth:1,
             width:350,
             marginTop:20,
             marginLeft:10
           }}
           placeholder={'Age'}
           />
                   <TextInput
           style={{
             backgroundColor: 'white',
             padding: 10,
             borderRadius: 5,
             borderColor:"#2FCBD8",
             borderWidth:1,
             width:350,
             marginTop:20,
             marginLeft:10
           }}
           placeholder={'City'}
           />
                   <TextInput
           style={{
             backgroundColor: 'white',
             padding: 10,
             borderRadius: 5,
             borderColor:"#2FCBD8",
             borderWidth:1,
             width:350,
             marginTop:20,
             marginLeft:10
           }}
           placeholder={'District'}
           />
                   <TextInput
           style={{
             backgroundColor: 'white',
             padding: 10,
             borderRadius: 5,
             borderColor:"#2FCBD8",
             borderWidth:1,
             width:350,
             marginTop:20,
             marginLeft:10
           }}
           placeholder={'Phone Number'}
           />
          <Text style={{fontSize:25, marginLeft:10, marginTop:20}}>Payment Method</Text>
        {/* <View style={{backgroundColor:"green", flex:1}}></View> */}
        {/* </Stack.Navigator> */}
        {/* </NavigationContainer> */}
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
             width:350,
             marginTop:20,
             marginLeft:10
           }}
      >
        <Picker.Item label="Select your payment mode" style={{color:'#2FCBD8'}}/>
        <Picker.Item label="Cash" value="option1" />
        <Picker.Item label="Mobile Pay" value="option2" />
      </Picker>
    </View>


     <View>
      <Button title="Select Image" onPress={handleImageUpload} style={{color:'#2FCBD8', width:350}} />
      {selectedImage && <Image source={selectedImage} style={{ width: 200, height: 200 }} />}
    </View>
    <View style={{marginTop:20}}>
    <TouchableOpacity style={styles.confirmOrder} onPress={() => navigation.navigate('SignupScreen')}>
         {/* <Stack.Screen name="Signu[" component={SignupScreen} /> */}
       <Text style={styles.confirmOrderText}>Confirm Order</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.cancelOrder} onPress={() => console.log('Button pressed')}>
       <Text style={styles.cancelOrderText}>Cancel Order</Text>
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
    //  borderBottomRightRadius:30, 
    //  borderBottomLeftRadius:30
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
  width:350,
  marginLeft:20

  // justifyContent:"center"    its not working in js engine: hermes
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
  width:350,
  marginTop:20,
  marginLeft:20,
  marginBottom:20,
  // justifyContent:"center"    its not working in js engine: hermes
},
cancelOrderText: {
  color: '#2FCBD8',
  fontSize: 16,
  fontWeight: 'bold',
  textAlign: 'center',
},
})
