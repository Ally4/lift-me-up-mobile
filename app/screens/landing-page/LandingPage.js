import 'react-native-gesture-handler';
import { SafeAreaView, StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';


export default function Landing({ navigation }) {


  return (
      <SafeAreaView style={styles.container}>
        <View style={{backgroundColor:"black", width:250, height:250, borderRadius:150, opacity:0.2, top: -90, left:-90}}></View>
        <Image source={require("../../assets/photos/logo.png")} style={{marginTop:200}}/>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
      <Text style={styles.buttonText}>Login</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button1} onPress={() => console.log('Button pressed')}>
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
