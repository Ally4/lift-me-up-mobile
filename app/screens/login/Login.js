import 'react-native-gesture-handler';
import React, { useState} from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { useSelector, useDispatch } from 'react-redux'; //for the redux
import LoginSlice from '../../../LoginSlice';  //slice or reducer


export default function Login() {

  // We use the useSelector hook to access the balance state from the store
  // const login = useSelector((state) => state.login.value);

  // This is to pass value in the text fields
  const [text, setText] = useState();

  //This is to dispatch the action in the screen
  const dispatch = useDispatch();


  //Here gooes the function of login and it mainly called onSubmit or handleSubmit; we pass in the dispatch of actions, in the dispatch we pass in LoginSlice(reducer), in the reducer we pass in the text, but also down we put the new value of text, so far setted to empty
    function handleSubmit() {
      dispatch(LoginSlice(text));
      setText('');
  }






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
          placeholder={'Email'}
          // value={text}
          onChangeText={setText}
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
          placeholder={'Password'}
          // value={text}
          onChangeText={setText}
          />
        {/* <View style={{ marginTop: 20 }}>
            <Text style={{ fontSize: 20 }}>Current Balance: {login}$</Text>      this is how it could be if proceeding with the example of balance
        </View> */}


{/* <View style={{ marginTop: 20 }}>
            <Button
                title="Deposit"
                onPress={() => {
                    // We dispatch the deposit action to the store with payload 10
                    dispatch(deposit(10));
                }}
            />
        </View>                                                                                and the these are the actions that would change the initial state, also with the dispatch
        <View style={{ marginTop: 20 }}>
            <Button
                title="Withdraw"
                onPress={() => {
                    // We dispatch the withdraw action to the store with payload 10
                    dispatch(withdraw(10));
                }}
            />
        </View> */}



          <TouchableOpacity style={styles.button1} onPress={handleSubmit}> 
            <Text style={styles.buttonText1}>Login</Text>
           </TouchableOpacity>
           <View style={{marginLeft:20}}><Text><CheckBox title='Remember Me' color='#2FCBD8'></CheckBox> Forgotten Password?</Text></View>
           <View style={styles.lineBox}>
           <View style={styles.line} onPress={handleSubmit} /> 
           <Text style={styles.lineText}>Or Login</Text>
           <View style={styles.line} /> 
           </View>
           <TouchableOpacity style={styles.button2}>
            <Text style={styles.buttonText}><Image source={require("../../assets/photos/google.png")} style={{width:20, height:20}}/>  GOOGLE</Text>
            </TouchableOpacity>
           <Text style={{marginLeft:90}}>Do you have an account?<TouchableOpacity ><Text style={{ color: '#2FCBD8', marginTop:2}}> Signup</Text></TouchableOpacity></Text>
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
})