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