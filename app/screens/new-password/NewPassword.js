import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, Button, TouchableOpacity, TextInput } from 'react-native';
// import { NavigationContainer} from '@react-navigation/native';
// import SignupScreen from './app/screens/SignupScreen';
// import { CheckBox } from 'react-native-elements';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const Stack = createNativeStackNavigator();


export default function App() {


  return (
      <SafeAreaView style={styles.container}> 
      {/* <NavigationContainer> */}
      {/* <Stack.Navigator> */}
        <View style={{backgroundColor:"black", width:250, height:250, borderRadius:150, opacity:0.2, top: -90, left:-90}}></View>
        <Image source={require("../../assets/photos/colab.png")} style={{marginBottom:20, marginLeft:70}}/>
        {/* <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignupScreen')}> */}
        {/* <Stack.Screen name="Signu[" component={SignupScreen} /> */}
      {/* <Text style={styles.buttonText}>Login</Text> */}
    {/* </TouchableOpacity> */}
        {/* <Button title="Login" backgroundColor="#2FCBD8"  buttonText="#2FCBD8" color="white" width='50' height='50' borderRadius="50" borderColor="white" /> */}
        <View style={{backgroundColor:"white", flex:2, borderTopRightRadius:30, borderTopLeftRadius:30}}>
          <Text style={styles.resetText}>Reset Your Password</Text>
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
          placeholder={'New Password'}
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
          placeholder={'Confirm Password'}
          />
          <TouchableOpacity style={styles.button1} onPress={() => console.log('Button pressed')}> 
            <Text style={styles.buttonText1}>Confirm</Text>
           </TouchableOpacity>
        </View>
        {/* <View style={{backgroundColor:"green", flex:1}}></View> */}
        {/* </Stack.Navigator> */}
        {/* </NavigationContainer> */}
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
  fontSize: 20,
},
resetParagraph: {
  textAlign: 'center',
  marginRight: 10,
},
})