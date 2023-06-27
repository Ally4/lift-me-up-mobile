import 'react-native-gesture-handler';
import { SafeAreaView, StyleSheet, Text, View, Image, Button, TouchableOpacity, TextInput } from 'react-native';
import { CheckBox } from 'react-native-elements';


export default function Login() {


  return (
      <SafeAreaView style={styles.container}> 
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
          placeholder={'Email or Phone Number'}
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
          />
          <TouchableOpacity style={styles.button1} onPress={() => console.log('Button pressed')}> 
            <Text style={styles.buttonText1}>Login</Text>
           </TouchableOpacity>
           <View style={{marginLeft:20}}><Text><CheckBox title='Remember Me' color='#2FCBD8'></CheckBox> Forgotten Password?</Text></View>
           <View style={styles.lineBox}>
           <View style={styles.line} /> 
           <Text style={styles.lineText}>Or Login</Text>
           <View style={styles.line} /> 
           </View>
           <TouchableOpacity style={styles.button2}>
            <Text style={styles.buttonText}><Image source={require("../../assets/photos/google.png")} style={{width:20, height:20}}/>  GOOGLE</Text>
            </TouchableOpacity>
           <Text style={{marginLeft:90}}>Do you have an account?<TouchableOpacity ><Text style={{ color: '#2FCBD8', marginTop:2}}> Signup</Text></TouchableOpacity></Text>
           <Image source={require("../../assets/photos/acubed.png")} style={{marginBottom:20, marginLeft:150}}/>
        </View>
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