//LANDING

// import 'react-native-gesture-handler';
// import { StatusBar } from 'expo-status-bar';
// import { SafeAreaView, StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
// // import { NavigationContainer} from '@react-navigation/native';
// import SignupScreen from './app/screens/SignupScreen';
// // import { NavigationContainer } from '@react-navigation/native';
// // import { createNativeStackNavigator } from '@react-navigation/native-stack';

// // const Stack = createNativeStackNavigator();


// export default function App() {


//   return (
//       <SafeAreaView style={styles.container}> 
//       {/* <NavigationContainer> */}
//       {/* <Stack.Navigator> */}
//         <View style={{backgroundColor:"black", width:250, height:250, borderRadius:150, opacity:0.2, top: -90, left:-90}}></View>
//         <Image source={require("./app/assets/photos/logo.png")} style={{marginTop:200}}/>
//         <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignupScreen')}>
//         {/* <Stack.Screen name="Signu[" component={SignupScreen} /> */}
//       <Text style={styles.buttonText}>Login</Text>
//     </TouchableOpacity>
//     <TouchableOpacity style={styles.button1} onPress={() => console.log('Button pressed')}>
//       <Text style={styles.buttonText1}>Sign Up</Text>
//     </TouchableOpacity>
//         {/* <Button title="Login" backgroundColor="#2FCBD8"  buttonText="#2FCBD8" color="white" width='50' height='50' borderRadius="50" borderColor="white" /> */}
//         {/* <View style={{backgroundColor:"red", flex:1}}></View>
//         <View style={{backgroundColor:"green", flex:1}}></View> */}
//         {/* </Stack.Navigator> */}
//         {/* </NavigationContainer> */}
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

//   // justifyContent:"center"    its not working in js engine: hermes
// },
// buttonText: {
//   color: '#2FCBD8',
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

//   // justifyContent:"center"    its not working in js engine: hermes
// },
// buttonText1: {
//   color: 'white',
//   fontSize: 16,
//   fontWeight: 'bold',
//   textAlign: 'center',
// },
// })






// //SIGNUP

// import 'react-native-gesture-handler';
// import { StatusBar } from 'expo-status-bar';
// import { SafeAreaView, StyleSheet, Text, View, Image, Button, TouchableOpacity, TextInput } from 'react-native';
// // import { NavigationContainer} from '@react-navigation/native';
// import SignupScreen from './app/screens/SignupScreen';
// // import { NavigationContainer } from '@react-navigation/native';
// // import { createNativeStackNavigator } from '@react-navigation/native-stack';

// // const Stack = createNativeStackNavigator();


// export default function App() {


//   return (
//       <SafeAreaView style={styles.container}> 
//       {/* <NavigationContainer> */}
//       {/* <Stack.Navigator> */}
//         <View style={{backgroundColor:"black", width:250, height:250, borderRadius:150, opacity:0.2, top: -90, left:-90}}></View>
//         <Image source={require("./app/assets/photos/colab.png")} style={{marginBottom:20, marginLeft:70}}/>
//         {/* <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignupScreen')}> */}
//         {/* <Stack.Screen name="Signu[" component={SignupScreen} /> */}
//       {/* <Text style={styles.buttonText}>Login</Text> */}
//     {/* </TouchableOpacity> */}
//         {/* <Button title="Login" backgroundColor="#2FCBD8"  buttonText="#2FCBD8" color="white" width='50' height='50' borderRadius="50" borderColor="white" /> */}
//         <View style={{backgroundColor:"white", flex:2, borderTopRightRadius:30, borderTopLeftRadius:30}}>
//         <TextInput
//           style={{
//             backgroundColor: 'white',
//             padding: 10,
//             borderRadius: 5,
//             borderColor:"#2FCBD8",
//             borderWidth:1,
//             width:300,
//             marginTop:20,
//             marginLeft:40
//           }}
//           placeholder={'First Name'}
//           />
//         <TextInput
//           style={{
//             backgroundColor: 'white',
//             padding: 10,
//             borderRadius: 5,
//             borderColor:"#2FCBD8",
//             borderWidth:1,
//             width:300,
//             marginTop:20,
//             marginLeft:40
//           }}
//           placeholder={'Last Name'}
//           />
//         <TextInput
//           style={{
//             backgroundColor: 'white',
//             padding: 10,
//             borderRadius: 5,
//             borderColor:"#2FCBD8",
//             borderWidth:1,
//             width:300,
//             marginTop:20,
//             marginLeft:40
//           }}
//           placeholder={'Email or Phone Number'}
//           />
//         <TextInput
//           style={{
//             backgroundColor: 'white',
//             padding: 10,
//             borderRadius: 5,
//             borderColor:"#2FCBD8",
//             borderWidth:1,
//             width:300,
//             marginTop:20,
//             marginLeft:40
//           }}
//           placeholder={'Password'}
//           />
//         <TextInput
//           style={{
//             backgroundColor: 'white',
//             padding: 10,
//             borderRadius: 5,
//             borderColor:"#2FCBD8",
//             borderWidth:1,
//             width:300,
//             marginTop:20,
//             marginLeft:40
//           }}
//           placeholder={'Confirm Password'}
//           />
//           <TouchableOpacity style={styles.button1} onPress={() => console.log('Button pressed')}> 
//             <Text style={styles.buttonText1}>Sign Up</Text>
//            </TouchableOpacity>
//            <Text style={{marginLeft:90}}>Do you have an account?<TouchableOpacity ><Text style={{ color: '#2FCBD8', marginTop:2}}> Login</Text></TouchableOpacity></Text>
//            <Image source={require("./app/assets/photos/acubed.png")} style={{marginBottom:20, marginLeft:150}}/>
//         </View>
//         {/* <View style={{backgroundColor:"green", flex:1}}></View> */}
//         {/* </Stack.Navigator> */}
//         {/* </NavigationContainer> */}
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

//   // justifyContent:"center"    its not working in js engine: hermes
// },
// buttonText: {
//   color: '#2FCBD8',
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

//   // justifyContent:"center"    its not working in js engine: hermes
// },
// buttonText1: {
//   color: 'white',
//   fontSize: 16,
//   fontWeight: 'bold',
//   textAlign: 'center',
// },
// })






// //LOGIN

// import 'react-native-gesture-handler';
// import { StatusBar } from 'expo-status-bar';
// import { SafeAreaView, StyleSheet, Text, View, Image, Button, TouchableOpacity, TextInput } from 'react-native';
// // import { NavigationContainer} from '@react-navigation/native';
// import SignupScreen from './app/screens/SignupScreen';
// import { CheckBox } from 'react-native-elements';
// // import { NavigationContainer } from '@react-navigation/native';
// // import { createNativeStackNavigator } from '@react-navigation/native-stack';

// // const Stack = createNativeStackNavigator();


// export default function App() {


//   return (
//       <SafeAreaView style={styles.container}> 
//       {/* <NavigationContainer> */}
//       {/* <Stack.Navigator> */}
//         <View style={{backgroundColor:"black", width:250, height:250, borderRadius:150, opacity:0.2, top: -90, left:-90}}></View>
//         <Image source={require("./app/assets/photos/colab.png")} style={{marginBottom:20, marginLeft:70}}/>
//         {/* <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignupScreen')}> */}
//         {/* <Stack.Screen name="Signu[" component={SignupScreen} /> */}
//       {/* <Text style={styles.buttonText}>Login</Text> */}
//     {/* </TouchableOpacity> */}
//         {/* <Button title="Login" backgroundColor="#2FCBD8"  buttonText="#2FCBD8" color="white" width='50' height='50' borderRadius="50" borderColor="white" /> */}
//         <View style={{backgroundColor:"white", flex:2, borderTopRightRadius:30, borderTopLeftRadius:30}}>
//         <TextInput
//           style={{
//             backgroundColor: 'white',
//             padding: 10,
//             borderRadius: 5,
//             borderColor:"#2FCBD8",
//             borderWidth:1,
//             width:300,
//             marginTop:20,
//             marginLeft:40
//           }}
//           placeholder={'Email or Phone Number'}
//           />
//         <TextInput
//           style={{
//             backgroundColor: 'white',
//             padding: 10,
//             borderRadius: 5,
//             borderColor:"#2FCBD8",
//             borderWidth:1,
//             width:300,
//             marginTop:20,
//             marginLeft:40
//           }}
//           placeholder={'Password'}
//           />
//           <TouchableOpacity style={styles.button1} onPress={() => console.log('Button pressed')}> 
//             <Text style={styles.buttonText1}>Login</Text>
//            </TouchableOpacity>
//            <View style={{marginLeft:20}}><Text><CheckBox title='Remember Me' color='#2FCBD8'></CheckBox> Forgotten Password?</Text></View>
//            <View style={styles.lineBox}>
//            <View style={styles.line} /> 
//            <Text style={styles.lineText}>Or Login</Text>
//            <View style={styles.line} /> 
//            </View>
//            <TouchableOpacity style={styles.button2}>
//             <Text style={styles.buttonText}><Image source={require("./app/assets/photos/google.png")} style={{width:20, height:20}}/>  GOOGLE</Text>
//             </TouchableOpacity>
//            <Text style={{marginLeft:90}}>Do you have an account?<TouchableOpacity ><Text style={{ color: '#2FCBD8', marginTop:2}}> Signup</Text></TouchableOpacity></Text>
//            <Image source={require("./app/assets/photos/acubed.png")} style={{marginBottom:20, marginLeft:150}}/>
//         </View>
//         {/* <View style={{backgroundColor:"green", flex:1}}></View> */}
//         {/* </Stack.Navigator> */}
//         {/* </NavigationContainer> */}
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

//   // justifyContent:"center"    its not working in js engine: hermes
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

//   // justifyContent:"center"    its not working in js engine: hermes
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

//   // justifyContent:"center"    its not working in js engine: hermes
// },
// buttonText1: {
//   color: 'white',
//   fontSize: 16,
//   fontWeight: 'bold',
//   textAlign: 'center',
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
// })




// //Reset Password

// import 'react-native-gesture-handler';
// import { StatusBar } from 'expo-status-bar';
// import { SafeAreaView, StyleSheet, Text, View, Image, Button, TouchableOpacity, TextInput } from 'react-native';
// // import { NavigationContainer} from '@react-navigation/native';
// import SignupScreen from './app/screens/SignupScreen';
// import { CheckBox } from 'react-native-elements';
// // import { NavigationContainer } from '@react-navigation/native';
// // import { createNativeStackNavigator } from '@react-navigation/native-stack';

// // const Stack = createNativeStackNavigator();


// export default function App() {


//   return (
//       <SafeAreaView style={styles.container}> 
//       {/* <NavigationContainer> */}
//       {/* <Stack.Navigator> */}
//         <View style={{backgroundColor:"black", width:250, height:250, borderRadius:150, opacity:0.2, top: -90, left:-90}}></View>
//         <Image source={require("./app/assets/photos/colab.png")} style={{marginBottom:20, marginLeft:70}}/>
//         {/* <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignupScreen')}> */}
//         {/* <Stack.Screen name="Signu[" component={SignupScreen} /> */}
//       {/* <Text style={styles.buttonText}>Login</Text> */}
//     {/* </TouchableOpacity> */}
//         {/* <Button title="Login" backgroundColor="#2FCBD8"  buttonText="#2FCBD8" color="white" width='50' height='50' borderRadius="50" borderColor="white" /> */}
//         <View style={{backgroundColor:"white", flex:2, borderTopRightRadius:30, borderTopLeftRadius:30}}>
//           <Text style={styles.resetText}>Reset Your Password</Text>
//           <Text style={styles.resetParagraph}>Enter the email address associated with your account so that we can send a code to reset your password</Text>
//         <TextInput
//           style={{
//             backgroundColor: 'white',
//             padding: 10,
//             borderRadius: 5,
//             borderColor:"#2FCBD8",
//             borderWidth:1,
//             width:300,
//             marginTop:20,
//             marginLeft:40
//           }}
//           placeholder={'Email or Phone Number'}
//           />
//           <TouchableOpacity style={styles.button1} onPress={() => console.log('Button pressed')}> 
//             <Text style={styles.buttonText1}>Verify</Text>
//            </TouchableOpacity>
//         </View>
//         {/* <View style={{backgroundColor:"green", flex:1}}></View> */}
//         {/* </Stack.Navigator> */}
//         {/* </NavigationContainer> */}
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

//   // justifyContent:"center"    its not working in js engine: hermes
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

//   // justifyContent:"center"    its not working in js engine: hermes
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

//   // justifyContent:"center"    its not working in js engine: hermes
// },
// buttonText1: {
//   color: 'white',
//   fontSize: 16,
//   fontWeight: 'bold',
//   textAlign: 'center',
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
// resetParagraph: {
//   textAlign: 'center',
//   marginRight: 10,
// },
// })







// Reset Password, enter code screen

import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, Button, TouchableOpacity, TextInput } from 'react-native';
// import { NavigationContainer} from '@react-navigation/native';
import SignupScreen from './app/screens/SignupScreen';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const Stack = createNativeStackNavigator();


export default function App() {


  return (
      <SafeAreaView style={styles.container}> 
      {/* <NavigationContainer> */}
      {/* <Stack.Navigator> */}
        <View style={{backgroundColor:"black", width:250, height:250, borderRadius:150, opacity:0.2, top: -90, left:-90}}></View>
        <Image source={require("./app/assets/photos/colab.png")} style={{marginBottom:20, marginLeft:70}}/>
        {/* <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignupScreen')}> */}
        {/* <Stack.Screen name="Signu[" component={SignupScreen} /> */}
      {/* <Text style={styles.buttonText}>Login</Text> */}
    {/* </TouchableOpacity> */}
        {/* <Button title="Login" backgroundColor="#2FCBD8"  buttonText="#2FCBD8" color="white" width='50' height='50' borderRadius="50" borderColor="white" /> */}
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
},
resetParagraphEnter: {
  textAlign: 'center',
  marginRight: 10,
},
})