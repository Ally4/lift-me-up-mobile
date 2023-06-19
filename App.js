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
//         <View>
//         <TouchableOpacity ><Image source={require("./app/assets/photos/left-arrow.png")} style={{marginTop:-200, marginLeft:10, width:40, height:40}}/></TouchableOpacity>
//         </View>
//         <Image source={require("./app/assets/photos/colab.png")} style={{marginBottom:20, marginLeft:70}}/>
//         {/* <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignupScreen')}> */}
//         {/* <Stack.Screen name="Signu[" component={SignupScreen} /> */}
//       {/* <Text style={styles.buttonText}>Login</Text> */}
//     {/* </TouchableOpacity> */}
//         {/* <Button title="Login" backgroundColor="#2FCBD8"  buttonText="#2FCBD8" color="white" width='50' height='50' borderRadius="50" borderColor="white" /> */}
//         <View style={{backgroundColor:"white", flex:2, borderTopRightRadius:30, borderTopLeftRadius:30}}>
//         <Text style={{fontSize:30, fontWeight:'bold', marginLeft: 150}}>Signup</Text>
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
//         <View>
//         <TouchableOpacity ><Image source={require("./app/assets/photos/left-arrow.png")} style={{marginTop:-200, marginLeft:10, width:40, height:40}}/></TouchableOpacity>
//         </View>
//         <Image source={require("./app/assets/photos/colab.png")} style={{marginBottom:20, marginLeft:70}}/>
//         {/* <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignupScreen')}> */}
//         {/* <Stack.Screen name="Signu[" component={SignupScreen} /> */}
//     {/* </TouchableOpacity> */}
//         {/* <Button title="Login" backgroundColor="#2FCBD8"  buttonText="#2FCBD8" color="white" width='50' height='50' borderRadius="50" borderColor="white" /> */}
//         <View style={{backgroundColor:"white", flex:2, borderTopRightRadius:30, borderTopLeftRadius:30}}>
//       <Text style={{fontSize:30, fontWeight:'bold', marginLeft: 150}}>Login</Text>
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
//         <View>
//         <TouchableOpacity ><Image source={require("./app/assets/photos/left-arrow.png")} style={{marginTop:-200, marginLeft:10, width:40, height:40}}/></TouchableOpacity>
//         </View>
//         <Image source={require("./app/assets/photos/colab.png")} style={{marginBottom:20, marginLeft:70}}/>
//         {/* <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignupScreen')}> */}
//         {/* <Stack.Screen name="Signu[" component={SignupScreen} /> */}
//       {/* <Text style={styles.buttonText}>Login</Text> */}
//     {/* </TouchableOpacity> */}
//         {/* <Button title="Login" backgroundColor="#2FCBD8"  buttonText="#2FCBD8" color="white" width='50' height='50' borderRadius="50" borderColor="white" /> */}
//         <View style={{backgroundColor:"white", flex:2, borderTopRightRadius:30, borderTopLeftRadius:30}}>
//           <Text style={styles.resetText}>Forgotten Password</Text>
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







// // Reset Password, enter code screen

// import 'react-native-gesture-handler';
// import { StatusBar } from 'expo-status-bar';
// import { SafeAreaView, StyleSheet, Text, View, Image, Button, TouchableOpacity, TextInput } from 'react-native';
// // import { NavigationContainer} from '@react-navigation/native';
// import SignupScreen from './app/screens/SignupScreen';
// import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
// // import { NavigationContainer } from '@react-navigation/native';
// // import { createNativeStackNavigator } from '@react-navigation/native-stack';

// // const Stack = createNativeStackNavigator();


// export default function App() {


//   return (
//       <SafeAreaView style={styles.container}> 
//       {/* <NavigationContainer> */}
//       {/* <Stack.Navigator> */}
//         <View style={{backgroundColor:"black", width:250, height:250, borderRadius:150, opacity:0.2, top: -90, left:-90}}></View>
//         <View>
//         <TouchableOpacity ><Image source={require("./app/assets/photos/left-arrow.png")} style={{marginTop:-200, marginLeft:10, width:40, height:40}}/></TouchableOpacity>
//         </View>
//         <Image source={require("./app/assets/photos/colab.png")} style={{marginBottom:20, marginLeft:70}}/>
//         {/* <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignupScreen')}> */}
//         {/* <Stack.Screen name="Signu[" component={SignupScreen} /> */}
//       {/* <Text style={styles.buttonText}>Login</Text> */}
//     {/* </TouchableOpacity> */}
//         {/* <Button title="Login" backgroundColor="#2FCBD8"  buttonText="#2FCBD8" color="white" width='50' height='50' borderRadius="50" borderColor="white" /> */}
//         <View style={{backgroundColor:"white", flex:2, borderTopRightRadius:30, borderTopLeftRadius:30}}>
//           <Text style={styles.resetText}>Enter the verification code we just sent to your email</Text>
//           <View style={{marginLeft:45, marginTop:30}}><SmoothPinCodeInput
//             cellStyle={{
//               borderBottomWidth: 2,
//               borderColor: '#2FCBD8',
//             }}
//             cellStyleFocused={{
//               borderColor: 'black',
//             }}
//             />
//             </View>
//           <TouchableOpacity style={styles.button1} onPress={() => console.log('Button pressed')}> 
//             <Text style={styles.buttonText1}>Verify</Text>
//            </TouchableOpacity>
//            <Text style={{marginLeft:60}}>If you did not receive the code :<TouchableOpacity ><Text style={{ color: '#2FCBD8', marginTop:2}}> Resend</Text></TouchableOpacity></Text>
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
// resetParagraphEnter: {
//   textAlign: 'center',
//   marginRight: 10,
// },
// })









// //Reset Password, where you enter new password, and confirm password

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
//         <View>
//         <TouchableOpacity ><Image source={require("./app/assets/photos/left-arrow.png")} style={{marginTop:-200, marginLeft:10, width:40, height:40}}/></TouchableOpacity>
//         </View>
//         <Image source={require("./app/assets/photos/colab.png")} style={{marginBottom:20, marginLeft:70}}/>
//         {/* <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignupScreen')}> */}
//         {/* <Stack.Screen name="Signu[" component={SignupScreen} /> */}
//       {/* <Text style={styles.buttonText}>Login</Text> */}
//     {/* </TouchableOpacity> */}
//         {/* <Button title="Login" backgroundColor="#2FCBD8"  buttonText="#2FCBD8" color="white" width='50' height='50' borderRadius="50" borderColor="white" /> */}
//         <View style={{backgroundColor:"white", flex:2, borderTopRightRadius:30, borderTopLeftRadius:30}}>
//           <Text style={styles.resetText}>Reset Your Password</Text>
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
//           placeholder={'New Password'}
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
//             <Text style={styles.buttonText1}>Confirm</Text>
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
//   fontSize: 20,
// },
// resetParagraph: {
//   textAlign: 'center',
//   marginRight: 10,
// },
// })














// // Main screen

// import 'react-native-gesture-handler';
// import { StatusBar } from 'expo-status-bar';
// import { SafeAreaView, StyleSheet, Text, View, Image, Button, TouchableOpacity, TextInput, FlatList, } from 'react-native';
// // import { NavigationContainer} from '@react-navigation/native';
// import SignupScreen from './app/screens/SignupScreen';
// import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
// // import { NavigationContainer } from '@react-navigation/native';
// // import { createNativeStackNavigator } from '@react-navigation/native-stack';

// // const Stack = createNativeStackNavigator();


// export default function App() {



//     const data = [
//       { id: '1', title: 'Urine Analysis' },
//       { id: '2', title: 'Serum Sodium' },
//       { id: '3', title: 'Giving specimen' },
//       { id: '4', title: 'Saliva test' },
//       { id: '5', title: 'Home nursing' },
//     ];


//   return (
//       <SafeAreaView style={styles.container1}> 
//       {/* <NavigationContainer> */}
//       {/* <Stack.Navigator> */}
//         <View style={{backgroundColor:"#2FCBD8", width:250, height:250, borderRadius:150, top: -90, left:-90}}></View>
//         <View>
//         <Image source={require("./app/assets/photos/profile.png")} style={{marginTop:-150, marginLeft:10, width:50, height:50}}/>
//         <Image source={require("./app/assets/photos/logo-blue.png")} style={{marginTop:-40, marginLeft:135}}/>
//         <Image source={require("./app/assets/photos/bell.png")} style={{marginTop:-30,marginLeft:330, width:35, height:35}}/>
//         </View>
//         <Text style={styles.helloText}>Hello, <Text style={styles.abebeText}>Abebe!</Text></Text>
//         <Text style={styles.testText}>Which facility or test are you looking for today?</Text>
//         <TextInput
//          style={{
//           backgroundColor: 'white',
//           padding: 10,
//           borderRadius: 10,
//           borderColor:"#2FCBD8",
//           borderWidth:1,
//           width:300,
//           marginTop:20,
//           marginLeft:40
//           }}
//           placeholder={'Search'}
//            />
//          <Text style={styles.labText}>Lab Tests</Text>
//          <FlatList
//         horizontal
//         data={data}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <View style={{ margin: 10,   backgroundColor: 'white',
//           padding: 10,
//           borderRadius: 10,
//           borderColor:"#2FCBD8",
//           borderWidth:2,
//           width:150}}>
//             <Text>{item.title}</Text>
//           </View>
//         )}
//       />
//          <Text style={styles.labText}>Our Facilities</Text>
//          <Image source={require("./app/assets/photos/plus.png")} style={{width:100, height:100, marginTop:260, marginLeft:280}}/>
//         {/* <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignupScreen')}> */}
//         {/* <Stack.Screen name="Signu[" component={SignupScreen} /> */}
//       {/* <Text style={styles.buttonText}>Login</Text> */}
//     {/* </TouchableOpacity> */}
//         {/* <Button title="Login" backgroundColor="#2FCBD8"  buttonText="#2FCBD8" color="white" width='50' height='50' borderRadius="50" borderColor="white" /> */}
//         {/* <View style={{backgroundColor:"white", flex:2, borderTopRightRadius:30, borderTopLeftRadius:30}}>
//           <Text style={styles.resetText}>Enter the verification code we just sent to your email</Text>
//           <View style={{marginLeft:45, marginTop:30}}><SmoothPinCodeInput
//             cellStyle={{
//               borderBottomWidth: 2,
//               borderColor: '#2FCBD8',
//             }}
//             cellStyleFocused={{
//               borderColor: 'black',
//             }}
//             />
//             </View>
//           <TouchableOpacity style={styles.button1} onPress={() => console.log('Button pressed')}> 
//             <Text style={styles.buttonText1}>Verify</Text>
//            </TouchableOpacity>
//            <Text style={{marginLeft:60}}>If you did not receive the code :<TouchableOpacity ><Text style={{ color: '#2FCBD8', marginTop:2}}> Resend</Text></TouchableOpacity></Text>
//         </View> */}
//         {/* <View style={{backgroundColor:"green", flex:1}}></View> */}
//         {/* </Stack.Navigator> */}
//         {/* </NavigationContainer> */}
//       </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor:"white",
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
// resetParagraphEnter: {
//   textAlign: 'center',
//   marginRight: 10,
// },
// helloText: {
//   fontWeight:'bold',
//   fontSize: 40,
//   marginLeft:10,
//   marginTop:-80,
// },
// abebeText: {
//   color: '#2FCBD8',
//   fontWeight:'bold',
//   fontSize: 40,
// },
// testText: {
//   color: 'grey',
//   fontWeight:'bold',
//   fontSize: 15,
//   marginLeft:10,
// },
// labText: {
//   color: 'black',
//   fontWeight:'bold',
//   fontSize: 20,
//   marginLeft:10,
// },
// })












// // Profil screen

// import 'react-native-gesture-handler';
// import { StatusBar } from 'expo-status-bar';
// import { SafeAreaView, StyleSheet, Text, View, Image, Button, TouchableOpacity, TextInput, FlatList, Alert} from 'react-native';
// // import { NavigationContainer} from '@react-navigation/native';
// import SignupScreen from './app/screens/SignupScreen';
// import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
// // import { NavigationContainer } from '@react-navigation/native';
// // import { createNativeStackNavigator } from '@react-navigation/native-stack';

// // const Stack = createNativeStackNavigator();


// export default function App() {




//   const createTwoButtonAlert = () =>
//   Alert.alert('Profil Options', 'Make your choice', [
//     {
//       text: 'Logout',
//       onPress: () => console.log('Cancel Pressed'),
//       style: 'cancel',
//     },
//     {text: 'Switch Account', onPress: () => console.log('OK Pressed')},
//   ]);




//   return (
//       <SafeAreaView style={styles.container1}> 
//       {/* <NavigationContainer> */}
//       {/* <Stack.Navigator> */}
//         <View style={{backgroundColor:"#2FCBD8", width:500, height:250}}></View>
//         <View>
//         <TouchableOpacity onPress={createTwoButtonAlert}><Image source={require("./app/assets/photos/dots.png")} style={{marginTop:-200, marginLeft:320, width:40, height:40}}/></TouchableOpacity>
//         </View>
//         <View>
//         <TouchableOpacity ><Image source={require("./app/assets/photos/left-arrow.png")} style={{marginTop:-200, marginLeft:10, width:40, height:40}}/></TouchableOpacity>
//         </View>
//         {/* <View> */}
//         <Image source={require("./app/assets/photos/profile.png")} style={{marginTop:-60, marginLeft:140, width:130, height:130}}/>
//         {/* <Image source={require("./app/assets/photos/logo-blue.png")} style={{marginTop:-40, marginLeft:135}}/>
//         <Image source={require("./app/assets/photos/bell.png")} style={{marginTop:-30,marginLeft:330, width:35, height:35}}/> */}
//         {/* </View> */}
//         <Text style={styles.helloText}>Abebe David <Image source={require("./app/assets/photos/edit.png")} style={{width:25, height:25}}/></Text>
//         {/* <Text style={styles.testText}>Which facility or test are you looking for today?</Text> */}
//         {/* <TextInput
//          style={{
//           backgroundColor: 'white',
//           padding: 10,
//           borderRadius: 10,
//           borderColor:"#2FCBD8",
//           borderWidth:1,
//           width:300,
//           marginTop:20,
//           marginLeft:40
//           }}
//           placeholder={'Search'}
//            /> */}
//          {/* <Text style={styles.labText}>Lab Tests</Text> */}
//          {/* <FlatList
//         horizontal
//         data={data}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <View style={{ margin: 10,   backgroundColor: 'white',
//           padding: 10,
//           borderRadius: 10,
//           borderColor:"#2FCBD8",
//           borderWidth:2,
//           width:150}}>
//             <Text>{item.title}</Text>
//           </View>
//         )}
//       /> */}
//          <Text style={styles.labText}>Personal Information</Text>
//          <View style={{ borderRadius:30, borderColor: '#A5A6A6', borderWidth: 2, width:370, marginLeft:10, marginBottom:10}}>
//          <Text style={styles.emailEditText}>E-mail                     <Text style={{color: '#A5A6A6', marginLeft:200}}>abebedavid@gmail.com <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}><Image source={require("./app/assets/photos/right-arrow.png")} style={{width:10, height:10}}/></TouchableOpacity></Text></Text>
//          <View style={{borderBottomColor:'grey', borderBottomWidth:1, width:300, marginLeft: 40, marginTop: 5}} />
//          <Text style={styles.dobEditText}>Date of birth                                 <Text style={{color: '#A5A6A6'}}>12.12.1993 <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}><Image source={require("./app/assets/photos/right-arrow.png")} style={{width:10, height:10}}/></TouchableOpacity></Text></Text>
//          <View style={{borderBottomColor:'grey', borderBottomWidth:1, width:300, marginLeft: 40, marginTop: 5}} />
//          <Text style={styles.genderEditText}>Gender                                                     <Text style={{color: '#A5A6A6'}}>Male <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}><Image source={require("./app/assets/photos/right-arrow.png")} style={{width:10, height:10}}/></TouchableOpacity></Text></Text>
//          </View>
//          <View style={{ borderRadius:30, borderColor: '#A5A6A6', borderWidth: 2, width:370, marginLeft:10, marginBottom:10}}>
//          <Text style={styles.emailEditText}>City                                          <Text style={{color: '#A5A6A6', marginLeft:200}}>New York, USA <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}><Image source={require("./app/assets/photos/right-arrow.png")} style={{width:10, height:10}}/></TouchableOpacity></Text></Text>
//          <View style={{borderBottomColor:'grey', borderBottomWidth:1, width:300, marginLeft: 40, marginTop: 5}} />
//          <Text style={styles.dobEditText}>Occupation                                         <Text style={{color: '#A5A6A6'}}>Designer <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}><Image source={require("./app/assets/photos/right-arrow.png")} style={{width:10, height:10}}/></TouchableOpacity></Text></Text>
//          </View>
//          <View style={{ borderRadius:30, borderColor: '#A5A6A6', borderWidth: 2, width:370, marginLeft:10}}>
//          <Text style={styles.previousResultText}>Previous Test Results                <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}><Image source={require("./app/assets/photos/arrow-down-sign-to-navigate.png")} style={{width:20, height:20}}/></TouchableOpacity></Text>
//          </View>
//          {/* <Image source={require("./app/assets/photos/plus.png")} style={{width:100, height:100, marginTop:260, marginLeft:280}}/> */}
//         {/* <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignupScreen')}> */}
//         {/* <Stack.Screen name="Signu[" component={SignupScreen} /> */}
//       {/* <Text style={styles.buttonText}>Login</Text> */}
//     {/* </TouchableOpacity> */}
//         {/* <Button title="Login" backgroundColor="#2FCBD8"  buttonText="#2FCBD8" color="white" width='50' height='50' borderRadius="50" borderColor="white" /> */}
//         {/* <View style={{backgroundColor:"white", flex:2, borderTopRightRadius:30, borderTopLeftRadius:30}}>
//           <Text style={styles.resetText}>Enter the verification code we just sent to your email</Text>
//           <View style={{marginLeft:45, marginTop:30}}><SmoothPinCodeInput
//             cellStyle={{
//               borderBottomWidth: 2,
//               borderColor: '#2FCBD8',
//             }}
//             cellStyleFocused={{
//               borderColor: 'black',
//             }}
//             />
//             </View>
//           <TouchableOpacity style={styles.button1} onPress={() => console.log('Button pressed')}> 
//             <Text style={styles.buttonText1}>Verify</Text>
//            </TouchableOpacity>
//            <Text style={{marginLeft:60}}>If you did not receive the code :<TouchableOpacity ><Text style={{ color: '#2FCBD8', marginTop:2}}> Resend</Text></TouchableOpacity></Text>
//         </View> */}
//         {/* <View style={{backgroundColor:"green", flex:1}}></View> */}
//         {/* </Stack.Navigator> */}
//         {/* </NavigationContainer> */}
//       </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor:"white",
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
// emailEditText: {
//   marginTop: 20,
//   marginBottom: 10,
//   fontWeight: 'bold',
//   textAlign: 'center',
//   color: 'black',
//   // marginRight:75,
//   // borderBottomColor:'grey',
//   // borderBottomWidth:1,
// },
// dobEditText: {
//   marginTop: 20,
//   marginBottom: 10,
//   fontWeight: 'bold',
//   textAlign: 'center',
//   color: 'black',
//   // marginRight:120,
//   // borderBottomColor:'grey',
//   // borderBottomWidth:1,
// },
// genderEditText: {
//   marginTop: 20,
//   marginBottom: 20,
//   fontWeight: 'bold',
//   textAlign: 'center',
//   color: 'black',
//   // marginRight:190,
//   // borderBottomColor:'grey',
//   // borderBottomWidth:1,
// },
// previousResultText: {
//   fontSize:20,
//   marginTop: 20,
//   marginBottom: 20,
//   fontWeight: 'bold',
//   textAlign: 'center',
//   color: 'black',
//   // marginRight:190,
//   // borderBottomColor:'grey',
//   // borderBottomWidth:1,
// },
// resetParagraphEnter: {
//   textAlign: 'center',
//   marginRight: 10,
// },
// helloText: {
//   fontWeight:'bold',
//   fontSize: 30,
//   marginLeft:110,
// },
// abebeText: {
//   color: '#2FCBD8',
//   fontWeight:'bold',
//   fontSize: 40,
// },
// testText: {
//   color: 'grey',
//   fontWeight:'bold',
//   fontSize: 15,
//   marginLeft:10,
// },
// labText: {
//   color: 'black',
//   fontWeight:'bold',
//   fontSize: 20,
//   marginLeft:10,
// },
// })



















// // Search page

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
//         <View style={{backgroundColor:"#2FCBD8", width:250, height:250, borderRadius:150, top: -90, left:-90}}></View>
//         <View>
//           <TouchableOpacity ><Image source={require("./app/assets/photos/left-arrow.png")} style={{marginTop:-160, marginLeft:10, width:40, height:40}}/></TouchableOpacity>
//           <Text style={{fontWeight:'bold', fontSize:30, marginTop:-160, marginLeft:140, color:"#2FCBD8",}}>Search</Text>
//         </View>
//         <TextInput
//           style={{
//            backgroundColor: 'white',
//            padding: 10,
//            borderRadius: 10,
//            borderColor:"#2FCBD8",
//            borderWidth:1,
//            width:350,
//            marginTop:-60,
//            marginLeft:20
//            }}
//            placeholder={'Search'}
//             />
//         <View style={{marginLeft: 20, marginTop: 20, borderWidth:1, borderColor:"grey", borderRadius: 10, width:350, padding:10}}>
//           <TouchableOpacity ><Text style={{fontWeight:'bold', fontSize:20}}> Alation Hospital</Text><Image source={require("./app/assets/photos/correct.png")} style={{ marginLeft: 150, width:15, height:15, marginTop:-25}}/><Image source={require("./app/assets/photos/pharmacy.png")} style={{ marginLeft: 290, width:40, height:40, marginTop:-20}}/></TouchableOpacity>
//         </View>
//         <View style={{marginLeft: 20, marginTop: 20, borderWidth:1, borderColor:"grey", borderRadius: 10, width:350, padding:10}}>
//           <TouchableOpacity ><Text style={{fontWeight:'bold', fontSize:20}}> Kibru Hospital</Text><Image source={require("./app/assets/photos/correct.png")} style={{ marginLeft: 150, width:15, height:15, marginTop:-25}}/><Image source={require("./app/assets/photos/pharmacy.png")} style={{ marginLeft: 290, width:40, height:40, marginTop:-20}}/></TouchableOpacity>
//         </View>
//         <View style={{marginLeft: 20, marginTop: 20, borderWidth:1, borderColor:"grey", borderRadius: 10, width:350, padding:10}}>
//           <TouchableOpacity ><Text style={{fontWeight:'bold', fontSize:20}}> Naol Hospital</Text><Image source={require("./app/assets/photos/correct.png")} style={{ marginLeft: 150, width:15, height:15, marginTop:-25}}/><Image source={require("./app/assets/photos/pharmacy.png")} style={{ marginLeft: 290, width:40, height:40, marginTop:-20}}/></TouchableOpacity>
//         </View>
//         <View style={{marginLeft: 20, marginTop: 20, borderWidth:1, borderColor:"grey", borderRadius: 10, width:350, padding:10}}>
//           <TouchableOpacity ><Text style={{fontWeight:'bold', fontSize:20}}> Yanet Hospital</Text><Image source={require("./app/assets/photos/correct.png")} style={{ marginLeft: 150, width:15, height:15, marginTop:-25}}/><Image source={require("./app/assets/photos/pharmacy.png")} style={{ marginLeft: 290, width:40, height:40, marginTop:-20}}/></TouchableOpacity>
//         </View>
//             {/* <TouchableOpacity ><Text>Alation Hospital</Text><Image source={require("./app/assets/photos/pharmacy.png")} style={{marginTop:-25, marginLeft:300, width:35, height:35}}/></TouchableOpacity>
//             <TouchableOpacity ><Text>Kibru Hospital</Text><Image source={require("./app/assets/photos/pharmacy.png")} style={{marginTop:-25, marginLeft:300, width:35, height:35}}/></TouchableOpacity>
//             <TouchableOpacity ><Text>Naol Hospital</Text><Image source={require("./app/assets/photos/pharmacy.png")} style={{marginTop:-25, marginLeft:300, width:35, height:35}}/></TouchableOpacity>
//             <TouchableOpacity ><Text>Yanet Hospital</Text><Image source={require("./app/assets/photos/pharmacy.png")} style={{marginTop:-25, marginLeft:300, width:35, height:35}}/></TouchableOpacity> */}
//         {/* <Image source={require("./app/assets/photos/logo.png")} style={{marginTop:200}}/> */}
//         {/* <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignupScreen')}> */}
//         {/* <Stack.Screen name="Signu[" component={SignupScreen} /> */}
//       {/* <Text style={styles.buttonText}>Login</Text> */}
//     {/* </TouchableOpacity> */}
//     {/* <TouchableOpacity style={styles.button1} onPress={() => console.log('Button pressed')}>
//       <Text style={styles.buttonText1}>Sign Up</Text>
//     </TouchableOpacity> */}
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
//     backgroundColor:"white",
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













// // LabTests page

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
//         <View style={{backgroundColor:"#2FCBD8", width:250, height:250, borderRadius:150, top: -90, left:-90}}></View>
//         <View>
//           <TouchableOpacity ><Image source={require("./app/assets/photos/left-arrow.png")} style={{marginTop:-160, marginLeft:10, width:40, height:40}}/></TouchableOpacity>
//           <Text style={{fontWeight:'bold', fontSize:30, marginTop:-160, marginLeft:140, color:"#2FCBD8",}}>Lab Test</Text>
//         </View>
//         <Text style={{fontWeight:'bold', fontSize:30, marginTop:-80, marginLeft:100}}>Urine Analysis</Text>
//         <Text style={{color:"grey", marginLeft:20, fontSize:20}}>you can run your test in any of the following facilities</Text>
//         {/* <TextInput
//           style={{
//            backgroundColor: 'white',
//            padding: 10,
//            borderRadius: 10,
//            borderColor:"#2FCBD8",
//            borderWidth:1,
//            width:350,
//            marginTop:-60,
//            marginLeft:20
//            }}
//            placeholder={'Search'}
//             /> */}
//         <View style={{marginLeft: 20, marginTop: 20, borderWidth:1, borderColor:"grey", borderRadius: 10, width:350, padding:10}}>
//           <TouchableOpacity ><Text style={{fontWeight:'bold', fontSize:20}}> Alation Hospital</Text><Image source={require("./app/assets/photos/correct.png")} style={{ marginLeft: 150, width:15, height:15, marginTop:-25}}/><Image source={require("./app/assets/photos/pharmacy.png")} style={{ marginLeft: 290, width:40, height:40, marginTop:-20}}/></TouchableOpacity>
//         </View>
//         <View style={{marginLeft: 20, marginTop: 20, borderWidth:1, borderColor:"grey", borderRadius: 10, width:350, padding:10}}>
//           <TouchableOpacity ><Text style={{fontWeight:'bold', fontSize:20}}> Kibru Hospital</Text><Image source={require("./app/assets/photos/correct.png")} style={{ marginLeft: 150, width:15, height:15, marginTop:-25}}/><Image source={require("./app/assets/photos/pharmacy.png")} style={{ marginLeft: 290, width:40, height:40, marginTop:-20}}/></TouchableOpacity>
//         </View>
//         <View style={{marginLeft: 20, marginTop: 20, borderWidth:1, borderColor:"grey", borderRadius: 10, width:350, padding:10}}>
//           <TouchableOpacity ><Text style={{fontWeight:'bold', fontSize:20}}> Naol Hospital</Text><Image source={require("./app/assets/photos/correct.png")} style={{ marginLeft: 150, width:15, height:15, marginTop:-25}}/><Image source={require("./app/assets/photos/pharmacy.png")} style={{ marginLeft: 290, width:40, height:40, marginTop:-20}}/></TouchableOpacity>
//         </View>
//         <View style={{marginLeft: 20, marginTop: 20, borderWidth:1, borderColor:"grey", borderRadius: 10, width:350, padding:10}}>
//           <TouchableOpacity ><Text style={{fontWeight:'bold', fontSize:20}}> Yanet Hospital</Text><Image source={require("./app/assets/photos/correct.png")} style={{ marginLeft: 150, width:15, height:15, marginTop:-25}}/><Image source={require("./app/assets/photos/pharmacy.png")} style={{ marginLeft: 290, width:40, height:40, marginTop:-20}}/></TouchableOpacity>
//         </View>
//             {/* <TouchableOpacity ><Text>Alation Hospital</Text><Image source={require("./app/assets/photos/pharmacy.png")} style={{marginTop:-25, marginLeft:300, width:35, height:35}}/></TouchableOpacity>
//             <TouchableOpacity ><Text>Kibru Hospital</Text><Image source={require("./app/assets/photos/pharmacy.png")} style={{marginTop:-25, marginLeft:300, width:35, height:35}}/></TouchableOpacity>
//             <TouchableOpacity ><Text>Naol Hospital</Text><Image source={require("./app/assets/photos/pharmacy.png")} style={{marginTop:-25, marginLeft:300, width:35, height:35}}/></TouchableOpacity>
//             <TouchableOpacity ><Text>Yanet Hospital</Text><Image source={require("./app/assets/photos/pharmacy.png")} style={{marginTop:-25, marginLeft:300, width:35, height:35}}/></TouchableOpacity> */}
//         {/* <Image source={require("./app/assets/photos/logo.png")} style={{marginTop:200}}/> */}
//         {/* <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignupScreen')}> */}
//         {/* <Stack.Screen name="Signu[" component={SignupScreen} /> */}
//       {/* <Text style={styles.buttonText}>Login</Text> */}
//     {/* </TouchableOpacity> */}
//     {/* <TouchableOpacity style={styles.button1} onPress={() => console.log('Button pressed')}>
//       <Text style={styles.buttonText1}>Sign Up</Text>
//     </TouchableOpacity> */}
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
//     backgroundColor:"white",
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












// Facility page

import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, Button, TouchableOpacity, TextInput } from 'react-native';
// import { NavigationContainer} from '@react-navigation/native';
import SignupScreen from './app/screens/SignupScreen';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const Stack = createNativeStackNavigator();


export default function App() {


  return (
      <SafeAreaView style={styles.container}> 
      {/* <NavigationContainer> */}
      {/* <Stack.Navigator> */}
        <View style={{backgroundColor:"#2FCBD8", width:250, height:250, borderRadius:150, top: -90, left:-90}}></View>
        <View>
          <TouchableOpacity ><Image source={require("./app/assets/photos/left-arrow.png")} style={{marginTop:-160, marginLeft:10, width:40, height:40}}/></TouchableOpacity>
          <Text style={{fontWeight:'bold', fontSize:30, marginTop:-160, marginLeft:140, color:"#2FCBD8",}}>Facility</Text>
        </View>
        <View>
          <Image source={require("./app/assets/photos/pharmacy.png")} style={{ marginTop:-100, marginLeft:140, width:100, height:100}}/>
        </View>
        <Text style={{fontWeight:'bold', fontSize:30, marginLeft:20}}>Alation Hospital</Text>
        <Text style={{color:"grey", marginLeft:20, fontSize:15}}>7545 bedfort Avenue Omaha NE 68134</Text>
        <Text style={{fontWeight:'bold', fontSize:20, marginTop:10, marginLeft:20, marginBottom:10}}>Available Lab Tests</Text>
        {/* <TextInput
          style={{
           backgroundColor: 'white',
           padding: 10,
           borderRadius: 10,
           borderColor:"#2FCBD8",
           borderWidth:1,
           width:350,
           marginTop:-60,
           marginLeft:20
           }}
           placeholder={'Search'}
            /> */}
        <View style={{ borderRadius:30, borderColor: '#A5A6A6',borderOpacity:0.4, padding:5, borderWidth: 2, width:370, marginLeft:10, marginBottom:10}}>
          <Text style={styles.previousResultText}>Urine Analysis                            <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}><Image source={require("./app/assets/photos/right-arrow-black.png")} style={{width:20, height:20}}/></TouchableOpacity></Text>
        </View>
        <View style={{ borderRadius:30, borderColor: '#A5A6A6',borderOpacity:0.4, padding:5, borderWidth: 2, width:370, marginLeft:10, marginBottom:10}}>
          <Text style={styles.previousResultText}>Complete body count (CBC)                                <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}><Image source={require("./app/assets/photos/right-arrow-black.png")} style={{width:20, height:20}}/></TouchableOpacity></Text>
        </View>
        <View style={{ borderRadius:30, borderColor: '#A5A6A6',borderOpacity:0.4, padding:5, borderWidth: 2, width:370, marginLeft:10, marginBottom:10}}>
          <Text style={styles.previousResultText}>Serum Creatine                           <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}><Image source={require("./app/assets/photos/right-arrow-black.png")} style={{width:20, height:20}}/></TouchableOpacity></Text>
        </View>
        <View style={{ borderRadius:30, borderColor: '#A5A6A6',borderOpacity:0.4, padding:5, borderWidth: 2, width:370, marginLeft:10, marginBottom:10}}>
          <Text style={styles.previousResultText}>Serum Potasium                          <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}><Image source={require("./app/assets/photos/right-arrow-black.png")} style={{width:20, height:20}}/></TouchableOpacity></Text>
        </View>
        <View style={{ borderRadius:30, borderColor: '#A5A6A6',borderOpacity:0.4, padding:5, borderWidth: 2, width:370, marginLeft:10, marginBottom:10}}>
          <Text style={styles.previousResultText}>Serum Sodium                              <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}><Image source={require("./app/assets/photos/right-arrow-black.png")} style={{width:20, height:20}}/></TouchableOpacity></Text>
        </View>
        <View style={{ borderRadius:30, borderColor: '#A5A6A6',borderOpacity:0.4, padding:5, borderWidth: 2, width:370, marginLeft:10, marginBottom:10}}>
          <Text style={styles.previousResultText}>Lipase                                             <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}><Image source={require("./app/assets/photos/right-arrow-black.png")} style={{width:20, height:20}}/></TouchableOpacity></Text>
        </View>
        <View style={{ borderRadius:30, borderColor: '#A5A6A6',borderOpacity:0.4, padding:5, borderWidth: 2, width:370, marginLeft:10, marginBottom:10}}>
          <Text style={styles.previousResultText}>Lymane                                          <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}><Image source={require("./app/assets/photos/right-arrow-black.png")} style={{width:20, height:20}}/></TouchableOpacity></Text>
        </View>
            {/* <TouchableOpacity ><Text>Alation Hospital</Text><Image source={require("./app/assets/photos/pharmacy.png")} style={{marginTop:-25, marginLeft:300, width:35, height:35}}/></TouchableOpacity>
            <TouchableOpacity ><Text>Kibru Hospital</Text><Image source={require("./app/assets/photos/pharmacy.png")} style={{marginTop:-25, marginLeft:300, width:35, height:35}}/></TouchableOpacity>
            <TouchableOpacity ><Text>Naol Hospital</Text><Image source={require("./app/assets/photos/pharmacy.png")} style={{marginTop:-25, marginLeft:300, width:35, height:35}}/></TouchableOpacity>
            <TouchableOpacity ><Text>Yanet Hospital</Text><Image source={require("./app/assets/photos/pharmacy.png")} style={{marginTop:-25, marginLeft:300, width:35, height:35}}/></TouchableOpacity> */}
        {/* <Image source={require("./app/assets/photos/logo.png")} style={{marginTop:200}}/> */}
        {/* <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignupScreen')}> */}
        {/* <Stack.Screen name="Signu[" component={SignupScreen} /> */}
      {/* <Text style={styles.buttonText}>Login</Text> */}
    {/* </TouchableOpacity> */}
    {/* <TouchableOpacity style={styles.button1} onPress={() => console.log('Button pressed')}>
      <Text style={styles.buttonText1}>Sign Up</Text>
    </TouchableOpacity> */}
        {/* <Button title="Login" backgroundColor="#2FCBD8"  buttonText="#2FCBD8" color="white" width='50' height='50' borderRadius="50" borderColor="white" /> */}
        {/* <View style={{backgroundColor:"red", flex:1}}></View>
        <View style={{backgroundColor:"green", flex:1}}></View> */}
        {/* </Stack.Navigator> */}
        {/* </NavigationContainer> */}
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"white",
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
previousResultText: {
  fontSize:20,
  marginTop: 5,
  marginBottom: 10,
  fontWeight: 'bold',
  textAlign: 'center',
  color: 'black',
  // marginRight:190,
  // borderBottomColor:'grey',
  // borderBottomWidth:1,
},
})
