import 'react-native-gesture-handler';
// import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView  } from 'react-native';


export default function Details({ navigation }) {


  return (
      <SafeAreaView style={styles.container}> 
      <ScrollView>
        <View style={{backgroundColor:"#2FCBD8", width:250, height:250, borderRadius:150, top: -90, left:-90}}></View>
        <View>
          <TouchableOpacity onPress={() => navigation.goBack()}><Image source={require("./app/assets/photos/left-arrow.png")} style={{marginTop:-160, marginLeft:10, width:40, height:40}}/></TouchableOpacity>
          <Text style={{fontWeight:'bold', fontSize:30, marginTop:-160, marginLeft:140, color:"#2FCBD8",}}>Test details</Text>
        </View>
        <View>
          <Image source={require("./app/assets/photos/pharmacy.png")} style={{ marginTop:-100, marginLeft:140, width:100, height:100}}/>
        </View>
        <Text style={{fontWeight:'bold', fontSize:30, marginLeft:20}}>Alation Hospital<Image source={require("./app/assets/photos/correct.png")} style={{ marginLeft: 150, width:15, height:15}}/></Text>
        <Text style={{color:"grey", marginLeft:20, fontSize:15}}>7545 bedfort Avenue Omaha NE 68134</Text>
        <View style={{borderColor:'grey', borderWidth:1, borderRadius:10, borderOpacity:0.4, marginTop:20, padding:20, width:350, marginLeft:20}}>
          <View style={{marginBottom:20}}>
            <Text style={{fontWeight:'bold', fontSize:20}}>Price</Text><Text style={{fontWeight:'bold', marginLeft:270, marginTop:-25, fontSize:20}}>50$</Text>
          </View>
          <View>
            <Text style={{fontWeight:'bold', fontSize:20}}>Turnaround Time</Text><Text style={{fontWeight:'bold', marginLeft:270, marginTop:-25, fontSize:20}}>1h</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.buttonOrder} onPress={() => console.log('Button pressed')}> 
          <Text style={styles.textOrder}>Order</Text>
        </TouchableOpacity>
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
  fontSize: 20,
  fontWeight: 'bold',
  textAlign: 'center',
},
buttonOrder: {
  backgroundColor: '#2FCBD8',
  padding: 20,
  borderRadius: 10,
  borderColor:"white",
  borderWidth:2,
  width:350,
  marginTop:20,
  marginLeft:20

  // justifyContent:"center"    its not working in js engine: hermes
},
textOrder: {
  color: 'white',
  fontSize: 20,
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
