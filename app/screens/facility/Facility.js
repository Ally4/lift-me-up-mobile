import 'react-native-gesture-handler';
// import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';


export default function Facility({ navigation }) {


  return (
      <SafeAreaView style={styles.container}> 
      <ScrollView >
        <View style={{backgroundColor:"#2FCBD8", width:250, height:250, borderRadius:150, top: -90, left:-90}}></View>
        <View>
          <TouchableOpacity onPress={() => navigation.goBack()}><Image source={require("../../assets/photos/left-arrow.png")} style={{marginTop:-160, marginLeft:10, width:40, height:40}}/></TouchableOpacity>
          <Text style={{fontWeight:'bold', fontSize:30, marginTop:-160, marginLeft:140, color:"#2FCBD8",}}>Facility</Text>
        </View>
        <View>
          <Image source={require("../../assets/photos/pharmacy.png")} style={{ marginTop:-100, marginLeft:140, width:100, height:100}}/>
        </View>
        <Text style={{fontWeight:'bold', fontSize:30, marginLeft:20}}>Alation Hospital</Text>
        <Text style={{color:"grey", marginLeft:20, fontSize:15}}>7545 bedfort Avenue Omaha NE 68134</Text>
        <Text style={{fontWeight:'bold', fontSize:20, marginTop:10, marginLeft:20, marginBottom:10}}>Available Lab Tests</Text>
        <View style={{ borderRadius:30, borderColor: '#A5A6A6',borderOpacity:0.4, padding:5, borderWidth: 2, width:370, marginLeft:10, marginBottom:10}}>
          <Text style={styles.previousResultText}>Urine Analysis                            <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}><Image source={require("../../assets/photos/right-arrow-black.png")} style={{width:20, height:20}}/></TouchableOpacity></Text>
        </View>
        <View style={{ borderRadius:30, borderColor: '#A5A6A6',borderOpacity:0.4, padding:5, borderWidth: 2, width:370, marginLeft:10, marginBottom:10}}>
          <Text style={styles.previousResultText}>Complete body count (CBC)                                <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}><Image source={require("../../assets/photos/right-arrow-black.png")} style={{width:20, height:20}}/></TouchableOpacity></Text>
        </View>
        <View style={{ borderRadius:30, borderColor: '#A5A6A6',borderOpacity:0.4, padding:5, borderWidth: 2, width:370, marginLeft:10, marginBottom:10}}>
          <Text style={styles.previousResultText}>Serum Creatine                           <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}><Image source={require("../../assets/photos/right-arrow-black.png")} style={{width:20, height:20}}/></TouchableOpacity></Text>
        </View>
        <View style={{ borderRadius:30, borderColor: '#A5A6A6',borderOpacity:0.4, padding:5, borderWidth: 2, width:370, marginLeft:10, marginBottom:10}}>
          <Text style={styles.previousResultText}>Serum Potasium                          <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}><Image source={require("../../assets/photos/right-arrow-black.png")} style={{width:20, height:20}}/></TouchableOpacity></Text>
        </View>
        <View style={{ borderRadius:30, borderColor: '#A5A6A6',borderOpacity:0.4, padding:5, borderWidth: 2, width:370, marginLeft:10, marginBottom:10}}>
          <Text style={styles.previousResultText}>Serum Sodium                              <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}><Image source={require("../../assets/photos/right-arrow-black.png")} style={{width:20, height:20}}/></TouchableOpacity></Text>
        </View>
        <View style={{ borderRadius:30, borderColor: '#A5A6A6',borderOpacity:0.4, padding:5, borderWidth: 2, width:370, marginLeft:10, marginBottom:10}}>
          <Text style={styles.previousResultText}>Lipase                                             <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}><Image source={require("../../assets/photos/right-arrow-black.png")} style={{width:20, height:20}}/></TouchableOpacity></Text>
        </View>
        <View style={{ borderRadius:30, borderColor: '#A5A6A6',borderOpacity:0.4, padding:5, borderWidth: 2, width:370, marginLeft:10, marginBottom:10}}>
          <Text style={styles.previousResultText}>Lymane                                          <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}><Image source={require("../../assets/photos/right-arrow-black.png")} style={{width:20, height:20}}/></TouchableOpacity></Text>
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
},
})
