import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, Button, TouchableOpacity, TextInput } from 'react-native';
// import { NavigationContainer} from '@react-navigation/native';
// import SignupScreen from './app/screens/SignupScreen';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const Stack = createNativeStackNavigator();


export default function LabTest() {


  return (
      <SafeAreaView style={styles.container}> 
      {/* <NavigationContainer> */}
      {/* <Stack.Navigator> */}
        <View style={{backgroundColor:"#2FCBD8", width:250, height:250, borderRadius:150, top: -90, left:-90}}></View>
        <View>
          <TouchableOpacity ><Image source={require("../../assets/photos/left-arrow.png")} style={{marginTop:-160, marginLeft:10, width:40, height:40}}/></TouchableOpacity>
          <Text style={{fontWeight:'bold', fontSize:30, marginTop:-160, marginLeft:140, color:"#2FCBD8",}}>Lab Test</Text>
        </View>
        <Text style={{fontWeight:'bold', fontSize:30, marginTop:-80, marginLeft:100}}>Urine Analysis</Text>
        <Text style={{color:"grey", marginLeft:20, fontSize:20}}>you can run your test in any of the following facilities</Text>
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
        <View style={{marginLeft: 20, marginTop: 20, borderWidth:1, borderColor:"grey", borderRadius: 10, width:350, padding:10}}>
          <TouchableOpacity ><Text style={{fontWeight:'bold', fontSize:20}}> Alation Hospital</Text><Image source={require("../../assets/photos/correct.png")} style={{ marginLeft: 150, width:15, height:15, marginTop:-25}}/><Image source={require("../../assets/photos/pharmacy.png")} style={{ marginLeft: 290, width:40, height:40, marginTop:-20}}/></TouchableOpacity>
        </View>
        <View style={{marginLeft: 20, marginTop: 20, borderWidth:1, borderColor:"grey", borderRadius: 10, width:350, padding:10}}>
          <TouchableOpacity ><Text style={{fontWeight:'bold', fontSize:20}}> Kibru Hospital</Text><Image source={require("../../assets/photos/correct.png")} style={{ marginLeft: 150, width:15, height:15, marginTop:-25}}/><Image source={require("../../assets/photos/pharmacy.png")} style={{ marginLeft: 290, width:40, height:40, marginTop:-20}}/></TouchableOpacity>
        </View>
        <View style={{marginLeft: 20, marginTop: 20, borderWidth:1, borderColor:"grey", borderRadius: 10, width:350, padding:10}}>
          <TouchableOpacity ><Text style={{fontWeight:'bold', fontSize:20}}> Naol Hospital</Text><Image source={require("../../assets/photos/correct.png")} style={{ marginLeft: 150, width:15, height:15, marginTop:-25}}/><Image source={require("../../assets/photos/pharmacy.png")} style={{ marginLeft: 290, width:40, height:40, marginTop:-20}}/></TouchableOpacity>
        </View>
        <View style={{marginLeft: 20, marginTop: 20, borderWidth:1, borderColor:"grey", borderRadius: 10, width:350, padding:10}}>
          <TouchableOpacity ><Text style={{fontWeight:'bold', fontSize:20}}> Yanet Hospital</Text><Image source={require("../../assets/photos/correct.png")} style={{ marginLeft: 150, width:15, height:15, marginTop:-25}}/><Image source={require("../../assets/photos/pharmacy.png")} style={{ marginLeft: 290, width:40, height:40, marginTop:-20}}/></TouchableOpacity>
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
})
