// // details

// import 'react-native-gesture-handler';
// import { StatusBar } from 'expo-status-bar';
// import { SafeAreaView, StyleSheet, Text, View, Image, Button, TouchableOpacity, TextInput } from 'react-native';
// // import { NavigationContainer} from '@react-navigation/native';
// import SignupScreen from './app/screens/SignupScreen';
// // import { NavigationContainer } from '@react-navigation/native';
// // import { createNativeStackNavigator } from '@react-navigation/native-stack';

// // const Stack = createNativeStackNavigator();


// export default function Details() {


//   return (
//       <SafeAreaView style={styles.container}> 
//       {/* <NavigationContainer> */}
//       {/* <Stack.Navigator> */}
//         <View style={{backgroundColor:"#2FCBD8", width:250, height:250, borderRadius:150, top: -90, left:-90}}></View>
//         <View>
//           <TouchableOpacity ><Image source={require("./app/assets/photos/left-arrow.png")} style={{marginTop:-160, marginLeft:10, width:40, height:40}}/></TouchableOpacity>
//           <Text style={{fontWeight:'bold', fontSize:30, marginTop:-160, marginLeft:140, color:"#2FCBD8",}}>Test details</Text>
//         </View>
//         <View>
//           <Image source={require("./app/assets/photos/pharmacy.png")} style={{ marginTop:-100, marginLeft:140, width:100, height:100}}/>
//         </View>
//         <Text style={{fontWeight:'bold', fontSize:30, marginLeft:20}}>Alation Hospital<Image source={require("./app/assets/photos/correct.png")} style={{ marginLeft: 150, width:15, height:15}}/></Text>
//         <Text style={{color:"grey", marginLeft:20, fontSize:15}}>7545 bedfort Avenue Omaha NE 68134</Text>
//         <View style={{borderColor:'grey', borderWidth:1, borderRadius:10, borderOpacity:0.4, marginTop:20, padding:20, width:350, marginLeft:20}}>
//           <View style={{marginBottom:20}}>
//             <Text style={{fontWeight:'bold', fontSize:20}}>Price</Text><Text style={{fontWeight:'bold', marginLeft:270, marginTop:-25, fontSize:20}}>50$</Text>
//           </View>
//           <View>
//             <Text style={{fontWeight:'bold', fontSize:20}}>Turnaround Time</Text><Text style={{fontWeight:'bold', marginLeft:270, marginTop:-25, fontSize:20}}>1h</Text>
//           </View>
//         </View>
//         <TouchableOpacity style={styles.buttonOrder} onPress={() => console.log('Button pressed')}> 
//           <Text style={styles.textOrder}>Order</Text>
//         </TouchableOpacity>
//         {/* <Text style={{fontWeight:'bold', fontSize:20, marginTop:10, marginLeft:20, marginBottom:10}}>Available Lab Tests</Text> */}
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
//         {/* <View style={{ borderRadius:30, borderColor: '#A5A6A6',borderOpacity:0.4, padding:5, borderWidth: 2, width:370, marginLeft:10, marginBottom:10}}>
//           <Text style={styles.previousResultText}>Urine Analysis                            <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}><Image source={require("./app/assets/photos/right-arrow-black.png")} style={{width:20, height:20}}/></TouchableOpacity></Text>
//         </View>
//         <View style={{ borderRadius:30, borderColor: '#A5A6A6',borderOpacity:0.4, padding:5, borderWidth: 2, width:370, marginLeft:10, marginBottom:10}}>
//           <Text style={styles.previousResultText}>Complete body count (CBC)                                <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}><Image source={require("./app/assets/photos/right-arrow-black.png")} style={{width:20, height:20}}/></TouchableOpacity></Text>
//         </View>
//         <View style={{ borderRadius:30, borderColor: '#A5A6A6',borderOpacity:0.4, padding:5, borderWidth: 2, width:370, marginLeft:10, marginBottom:10}}>
//           <Text style={styles.previousResultText}>Serum Creatine                           <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}><Image source={require("./app/assets/photos/right-arrow-black.png")} style={{width:20, height:20}}/></TouchableOpacity></Text>
//         </View>
//         <View style={{ borderRadius:30, borderColor: '#A5A6A6',borderOpacity:0.4, padding:5, borderWidth: 2, width:370, marginLeft:10, marginBottom:10}}>
//           <Text style={styles.previousResultText}>Serum Potasium                          <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}><Image source={require("./app/assets/photos/right-arrow-black.png")} style={{width:20, height:20}}/></TouchableOpacity></Text>
//         </View>
//         <View style={{ borderRadius:30, borderColor: '#A5A6A6',borderOpacity:0.4, padding:5, borderWidth: 2, width:370, marginLeft:10, marginBottom:10}}>
//           <Text style={styles.previousResultText}>Serum Sodium                              <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}><Image source={require("./app/assets/photos/right-arrow-black.png")} style={{width:20, height:20}}/></TouchableOpacity></Text>
//         </View>
//         <View style={{ borderRadius:30, borderColor: '#A5A6A6',borderOpacity:0.4, padding:5, borderWidth: 2, width:370, marginLeft:10, marginBottom:10}}>
//           <Text style={styles.previousResultText}>Lipase                                             <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}><Image source={require("./app/assets/photos/right-arrow-black.png")} style={{width:20, height:20}}/></TouchableOpacity></Text>
//         </View>
//         <View style={{ borderRadius:30, borderColor: '#A5A6A6',borderOpacity:0.4, padding:5, borderWidth: 2, width:370, marginLeft:10, marginBottom:10}}>
//           <Text style={styles.previousResultText}>Lymane                                          <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}><Image source={require("./app/assets/photos/right-arrow-black.png")} style={{width:20, height:20}}/></TouchableOpacity></Text>
//         </View> */}
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
//   fontSize: 20,
//   fontWeight: 'bold',
//   textAlign: 'center',
// },
// buttonOrder: {
//   backgroundColor: '#2FCBD8',
//   padding: 20,
//   borderRadius: 10,
//   borderColor:"white",
//   borderWidth:2,
//   width:350,
//   marginTop:20,
//   marginLeft:20

//   // justifyContent:"center"    its not working in js engine: hermes
// },
// textOrder: {
//   color: 'white',
//   fontSize: 20,
//   fontWeight: 'bold',
//   textAlign: 'center',
// },
// previousResultText: {
//   fontSize:20,
//   marginTop: 5,
//   marginBottom: 10,
//   fontWeight: 'bold',
//   textAlign: 'center',
//   color: 'black',
//   // marginRight:190,
//   // borderBottomColor:'grey',
//   // borderBottomWidth:1,
// },
// })
