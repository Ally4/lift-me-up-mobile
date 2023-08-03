import 'react-native-gesture-handler';
// import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';


export default function App() {


  return (
      <SafeAreaView style={styles.container}> 
        <View style={{backgroundColor:"black", width:250, height:250, borderRadius:150, opacity:0.2, top: -90, left:-90}}></View>
        <Image source={require("../../assets/photos/colab.png")} style={{marginBottom:20, marginLeft:70}}/>
        <View style={{backgroundColor:"white", flex:2, borderTopRightRadius:30, borderTopLeftRadius:30}}>
          <Text style={styles.resetText}>Enter the verification code we just sent to your email</Text>
          <View style={{marginLeft:45, marginTop:30}}><SmoothPinCodeInput
            cellStyle={{
              borderBottomWidth: 2,
              borderColor: '#2FCBD8',
            }}
            cellStyleFocused={{
              borderColor: 'black',
            }}
            />
            </View>
          <TouchableOpacity style={styles.button1} onPress={() => console.log('Button pressed')}> 
            <Text style={styles.buttonText1}>Verify</Text>
           </TouchableOpacity>
           <Text style={{marginLeft:60}}>If you did not receive the code :<TouchableOpacity ><Text style={{ color: '#2FCBD8', marginTop:2}}> Resend</Text></TouchableOpacity></Text>
        </View>
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
      <Text style={styles.buttonText}>Login</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('Signup')}>
      <Text style={styles.buttonText1}>Sign Up</Text>
    </TouchableOpacity>
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
resetText: {
  marginTop: 20,
  fontWeight: 'bold',
  textAlign: 'center',
},
resetParagraphEnter: {
  textAlign: 'center',
  marginRight: 10,
},
})