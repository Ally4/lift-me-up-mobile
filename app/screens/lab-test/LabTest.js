import 'react-native-gesture-handler';
// import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView  } from 'react-native';


export default function LabTest({ navigation  }) {


  return (
      <SafeAreaView style={styles.container}> 
      <ScrollView >
      <View style={{ backgroundColor: "#2FCBD8", width: 250, height: 250, borderRadius: 180, top: -150, left: -120 }}></View>
        <View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require("../../assets/photos/left-chevron.png")} style={{ marginTop: -190, marginLeft: 10, width: 20, height: 20 }} />
          </TouchableOpacity>
        </View>
        <Text style={{fontWeight:'bold', fontSize:30, marginTop:-160, marginLeft:140, color:"#2FCBD8",}}>Lab Test</Text>
        {/* <View>
          <TouchableOpacity onPress={() => navigation.goBack()} ><Image source={require("../../assets/photos/left-arrow.png")} style={{marginTop:-160, marginLeft:10, width:40, height:40}}/></TouchableOpacity>
          <Text style={{fontWeight:'bold', fontSize:30, marginTop:-160, marginLeft:140, color:"#2FCBD8",}}>Lab Test</Text>
        </View> */}
        <Text style={{fontWeight:'bold', fontSize:30, marginTop:-80, marginLeft:100}}>Urine Analysis</Text>
        <Text style={{color:"grey", marginLeft:20, fontSize:20}}>you can run your test in any of the following facilities</Text>
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

  
},
buttonText1: {
  color: 'white',
  fontSize: 16,
  fontWeight: 'bold',
  textAlign: 'center',
},
})
