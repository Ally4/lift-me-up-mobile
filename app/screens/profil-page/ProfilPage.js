import 'react-native-gesture-handler';
// import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, Alert, ScrollView} from 'react-native';

export default function ProfilPage({ navigation }) {




  const createTwoButtonAlert = () =>
  Alert.alert('Profil Options', 'Make your choice', [
    {
      text: 'Logout',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    {text: 'Switch Account', onPress: () => console.log('OK Pressed')},
  ]);

  return (
      <SafeAreaView style={styles.container1}> 
      <ScrollView >
        <View style={{backgroundColor:"#2FCBD8", width:500, height:250}}></View>
        <View>
        <TouchableOpacity onPress={createTwoButtonAlert}><Image source={require("../../assets/photos/dots.png")} style={{marginTop:-200, marginLeft:320, width:40, height:40}}/></TouchableOpacity>
        </View>
        <View>
        <TouchableOpacity onPress={() => navigation.goBack()} ><Image source={require("../../assets/photos/left-arrow.png")} style={{marginTop:-200, marginLeft:10, width:40, height:40}}/></TouchableOpacity>
        </View>
        <Image source={require("../../assets/photos/profile.png")} style={{marginTop:-60, marginLeft:140, width:130, height:130}}/>
        <Text style={styles.helloText}>Abebe David <Image source={require("../../assets/photos/edit.png")} style={{width:25, height:25}}/></Text>
         <Text style={styles.labText}>Personal Information</Text>
         <View style={{ borderRadius:30, borderColor: '#A5A6A6', borderWidth: 2, width:370, marginLeft:10, marginBottom:10}}>
         <Text style={styles.emailEditText}>E-mail                     <Text style={{color: '#A5A6A6', marginLeft:200}}>abebedavid@gmail.com <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}><Image source={require("../../assets/photos/right-arrow.png")} style={{width:10, height:10}}/></TouchableOpacity></Text></Text>
         <View style={{borderBottomColor:'grey', borderBottomWidth:1, width:300, marginLeft: 40, marginTop: 5}} />
         <Text style={styles.dobEditText}>Date of birth                                 <Text style={{color: '#A5A6A6'}}>12.12.1993 <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}><Image source={require("../../assets/photos/right-arrow.png")} style={{width:10, height:10}}/></TouchableOpacity></Text></Text>
         <View style={{borderBottomColor:'grey', borderBottomWidth:1, width:300, marginLeft: 40, marginTop: 5}} />
         <Text style={styles.genderEditText}>Gender                                                     <Text style={{color: '#A5A6A6'}}>Male <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}><Image source={require("../../assets/photos/right-arrow.png")} style={{width:10, height:10}}/></TouchableOpacity></Text></Text>
         </View>
         <View style={{ borderRadius:30, borderColor: '#A5A6A6', borderWidth: 2, width:370, marginLeft:10, marginBottom:10}}>
         <Text style={styles.emailEditText}>City                                          <Text style={{color: '#A5A6A6', marginLeft:200}}>New York, USA <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}><Image source={require("../../assets/photos/right-arrow.png")} style={{width:10, height:10}}/></TouchableOpacity></Text></Text>
         <View style={{borderBottomColor:'grey', borderBottomWidth:1, width:300, marginLeft: 40, marginTop: 5}} />
         <Text style={styles.dobEditText}>Occupation                                         <Text style={{color: '#A5A6A6'}}>Designer <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}><Image source={require("../../assets/photos/right-arrow.png")} style={{width:10, height:10}}/></TouchableOpacity></Text></Text>
         </View>
         <View style={{ borderRadius:30, borderColor: '#A5A6A6', borderWidth: 2, width:370, marginLeft:10}}>
         <Text style={styles.previousResultText}>Previous Test Results                <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}><Image source={require("../../assets/photos/arrow-down-sign-to-navigate.png")} style={{width:20, height:20}}/></TouchableOpacity></Text>
         </View>
         </ScrollView>
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
emailEditText: {
  marginTop: 20,
  marginBottom: 10,
  fontWeight: 'bold',
  textAlign: 'center',
  color: 'black',
},
dobEditText: {
  marginTop: 20,
  marginBottom: 10,
  fontWeight: 'bold',
  textAlign: 'center',
  color: 'black',
},
genderEditText: {
  marginTop: 20,
  marginBottom: 20,
  fontWeight: 'bold',
  textAlign: 'center',
  color: 'black',
},
previousResultText: {
  fontSize:20,
  marginTop: 20,
  marginBottom: 20,
  fontWeight: 'bold',
  textAlign: 'center',
  color: 'black',
},
resetParagraphEnter: {
  textAlign: 'center',
  marginRight: 10,
},
helloText: {
  fontWeight:'bold',
  fontSize: 30,
  marginLeft:110,
},
abebeText: {
  color: '#2FCBD8',
  fontWeight:'bold',
  fontSize: 40,
},
testText: {
  color: 'grey',
  fontWeight:'bold',
  fontSize: 15,
  marginLeft:10,
},
labText: {
  color: 'black',
  fontWeight:'bold',
  fontSize: 20,
  marginLeft:10,
},
})
