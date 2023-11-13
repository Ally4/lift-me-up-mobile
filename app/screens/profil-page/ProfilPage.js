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
      <SafeAreaView > 
      <ScrollView >
        <View style={{backgroundColor:"#2FCBD8", width:'auto', height:150}}></View>

      {/* <View>
        <View>
        <TouchableOpacity onPress={createTwoButtonAlert}><Image source={require("../../assets/photos/dots.png")} style={{marginTop:-200, marginLeft:320, width:40, height:40}}/></TouchableOpacity>
        </View>


        <View>
        <TouchableOpacity onPress={() => navigation.goBack()} ><Image source={require("../../assets/photos/left-chevron.png")} style={{marginTop:-200, marginLeft:10, width:20, height:20}}/></TouchableOpacity>
        </View>
      </View> */}
      <View style={styles.proUpper}>
      <View>
        <TouchableOpacity onPress={() => navigation.goBack()} ><Image source={require("../../assets/photos/left-chevron.png")} style={{ width:20, height:20}}/></TouchableOpacity>
        </View>
        <View>
        <TouchableOpacity onPress={createTwoButtonAlert}><Image source={require("../../assets/photos/dots.png")} style={{ width:20, height:20}}/></TouchableOpacity>
        </View>
      </View>

        <View style={styles.pro}>
        <View style={styles.proPic}>
        <Image source={require("../../assets/photos/profile.png")} style={{borderRadius:65, width:130, height:130}}/>
        <Image source={require("../../assets/photos/photo-camera.png")} style={{marginLeft:'30%',marginTop:-25, width:20, height:20}}/>
        </View>
        <View style={styles.proDes}>
        <View style={styles.proText}>
        <Text style={styles.helloText}>Abebe David </Text>
        </View>
        <View style={styles.proEdit}>
        <TouchableOpacity><Image source={require("../../assets/photos/edit.png")} style={{width:25, height:25}}/></TouchableOpacity>
        </View>
        </View>
        </View>

         <Text style={styles.labText}>Personal Information</Text>




         <View style={styles.profil}>

         <View style={styles.proLine}>
          <View style={styles.proField}>
          <View >
         <Text style={styles.proLabel}>E-mail</Text>
         </View>
         <View style={styles.proWithArrow}>
          <View>
         <Text style={{color: '#A5A6A6'}}>abebedavid@gmail.com</Text>
         </View>
         <View>
         <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}><Image source={require("../../assets/photos/right-arrow.png")} style={{width:10, height:10}}/></TouchableOpacity>
         </View>
         </View>
         </View>



         <View style={styles.proLine} />

         <View style={styles.proField}>
          <View >
         <Text style={styles.proLabel}>Date of birth</Text>
         </View>
         <View style={styles.proWithArrow}>
          <View>
         <Text style={{color: '#A5A6A6'}}>12.12.1993</Text>
         </View>
         <View>
         <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}><Image source={require("../../assets/photos/right-arrow.png")} style={{width:10, height:10}}/></TouchableOpacity>
         </View>
         </View>
         </View>


         <View style={styles.proLine} />
         <View style={styles.proField}>
          <View >
         <Text style={styles.proLabel}>Gender</Text>
         </View>
         <View style={styles.proWithArrow}>
          <View>
         <Text style={{color: '#A5A6A6'}}>Male</Text>
         </View>
         <View>
         <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}><Image source={require("../../assets/photos/right-arrow.png")} style={{width:10, height:10}}/></TouchableOpacity>
         </View>
         </View>
         </View>
         </View>




         <View style={styles.proLine}>
         <View style={styles.proField}>
          <View >
         <Text style={styles.proLabel}>City</Text>
         </View>
         <View style={styles.proWithArrow}>
          <View>
         <Text style={{color: '#A5A6A6'}}>New York, USA </Text>
         </View>
         <View>
         <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}><Image source={require("../../assets/photos/right-arrow.png")} style={{width:10, height:10}}/></TouchableOpacity>
         </View>
         </View>
         </View>


         <View style={styles.proLine} />

         <View style={styles.proField}>
          <View >        
         <Text style={styles.proLabel}>Occupation</Text>
         </View>
         <View style={styles.proWithArrow}>
          <View>
         <Text style={{color: '#A5A6A6'}}>Designer </Text>
         </View>
         <View>
         <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}><Image source={require("../../assets/photos/right-arrow.png")} style={{width:10, height:10}}/></TouchableOpacity>
         </View>
         </View>
         </View>
         </View>


         <View style={styles.proLine}>
         <View style={styles.proField}>
          <View >
         <Text style={styles.proLabel}>Previous Test Results</Text> 
         </View>
         <View style={styles.proWithArrow}>
         <View>
         <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}><Image source={require("../../assets/photos/arrow-down-sign-to-navigate.png")} style={{width:20, height:20}}/></TouchableOpacity>
         </View>
         </View>
         {/* </View> */}
         </View>
         </View>
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
proLabel: {
  fontWeight: 'bold',
  textAlign: 'center',
  color: 'black',
  marginLeft:10,
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
  // marginLeft:80,
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
  marginLeft:20,
},
profil : {
  // backgroundColor: '#FFFF00',
  display:'flex',
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
},
pro : {
  display: 'flex',
  flex:1,
  justifyContent:'center',
  alignItems:'center',
  marginTop:25
},
proDes : {
  display: 'flex',
  flex:1,
  flexDirection:'row',
  justifyContent:'center',
  alignItems:'center'
},
proField : {
  display: 'flex',
  flex:1,
  flexDirection:'row',
  // justifyContent:'space-around',
  alignItems:'center',
  marginTop:20,
  marginBottom:10
},
proWithArrow : {
  display: 'flex',
  flex:1,
  flexDirection:'row',
  justifyContent:'flex-end',
  alignItems:'center',
  padding:10
},
proLine : {
  borderRadius:30, 
  borderColor: '#A5A6A6', 
  borderWidth: 1, 
  width:'90%',
  marginTop:10,
  alignItems:'center'
},
proUpper : {
  display: 'flex',
  flex:1,
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center',
  padding:10,
  marginTop:-130
},
})
