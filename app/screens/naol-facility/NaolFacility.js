import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AlationFacility() {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [picture, setPicture] = useState('');

  const data = [
    { id: '1', title: 'Urine Analysis' },
    { id: '2', title: 'Serum Sodium' },
    { id: '3', title: 'Giving specimen' },
    { id: '4', title: 'Saliva test' },
    { id: '5', title: 'Home nursing' },
  ];

  const getData = async () => {
    try {
      const username = await AsyncStorage.getItem('name');
      setName(username);
    } catch (error) {
      // Handle errors
    }
  }

  const getPic = async () => {
    try {
      const proPicture = await AsyncStorage.getItem('profilPicture');
      setPicture(proPicture);
    } catch (error) {
      // Handle errors
    }
  }

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getPic();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{ backgroundColor: "#2FCBD8", width: 250, height: 250, borderRadius: 180, top: -150, left: -120 }}></View>
        <View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require("../../assets/photos/left-chevron.png")} style={{ marginTop: -190, marginLeft: 10, width: 20, height: 20 }} />
          </TouchableOpacity>
        </View>
        <View style={styles.labtest}>
        <Text style={styles.lab}>Facility</Text>
        <View style={styles.logoFacility}><Image source={require("../../assets/photos/med.png")} style={{width:150, height:150}}></Image></View>
        <View style={styles.hospitalname}>
                <View><Text style={styles.facilitytext}>Naol Hospital</Text></View>
                <View style={styles.correct}>
                  <View><Image source={require("../../assets/photos/correct.png")} style={{width:15, height:15,}}></Image></View>
                  <View><Image></Image></View>
                </View>
              </View>
        <Text style={styles.testText}>7545 Bedfort Avenue Omaha NE 68134</Text>
        <View style={styles.main}>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              padding: 10,
              borderRadius: 10,
              borderColor: "#2FCBD8",
              borderWidth: 1,
              width: '90%',
              height: 50,
              marginTop: 20,
            }}
            onPress={() => navigation.navigate('OrderNaolUrine')}
          >
            <View style={styles.hospital}>
              <View style={styles.hospitalname}>
                <View><Text>Urine Analysis</Text></View>
              </View>
              <View><Image source={require("../../assets/photos/right-arrow.png" )} style={{width:35, height:35,}} /></View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              padding: 10,
              borderRadius: 10,
              borderColor: "#2FCBD8",
              borderWidth: 1,
              width: '90%',
              height: 50,
              marginTop: 20,
            }}
            onPress={() => navigation.navigate('OrderNaolcbc')}
          >
            <View style={styles.hospital}>
              <View style={styles.hospitalname}>
                <View><Text>Complete Blood Count (CBC)</Text></View>
              </View>
              <View><Image source={require("../../assets/photos/right-arrow.png" )} style={{width:35, height:35,}} /></View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              padding: 10,
              borderRadius: 10,
              borderColor: "#2FCBD8",
              borderWidth: 1,
              width: '90%',
              height: 50,
              marginTop: 20,
            }}
            onPress={() => navigation.navigate('OrderNaolSerumCreatine')}
          >
            <View style={styles.hospital}>
              <View style={styles.hospitalname}>
                <View><Text>Serum Creatine</Text></View>
              </View>
              <View><Image source={require("../../assets/photos/right-arrow.png" )} style={{width:35, height:35,}} /></View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              padding: 10,
              borderRadius: 10,
              borderColor: "#2FCBD8",
              borderWidth: 1,
              width: '90%',
              height: 50,
              marginTop: 20,
            }}
            onPress={() => navigation.navigate('OrderNaolSerumPotassium')}
          >
            <View style={styles.hospital}>
              <View style={styles.hospitalname}>
                <View><Text>Serum Potassium</Text></View>
              </View>
              <View><Image source={require("../../assets/photos/right-arrow.png" )} style={{width:35, height:35,}} /></View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              padding: 10,
              borderRadius: 10,
              borderColor: "#2FCBD8",
              borderWidth: 1,
              width: '90%',
              height: 50,
              marginTop: 20,
            }}
            onPress={() => navigation.navigate('OrderNaolSerumSodium')}
          >
            <View style={styles.hospital}>
              <View style={styles.hospitalname}>
                <View><Text>Serum Sodium</Text></View>
              </View>
              <View><Image source={require("../../assets/photos/right-arrow.png" )} style={{width:35, height:35,}} /></View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              padding: 10,
              borderRadius: 10,
              borderColor: "#2FCBD8",
              borderWidth: 1,
              width: '90%',
              height: 50,
              marginTop: 20,
            }}
            onPress={() => navigation.navigate('OrderNaolLipase')}
          >
            <View style={styles.hospital}>
              <View style={styles.hospitalname}>
                <View><Text>Lipase</Text></View>
              </View>
              <View><Image source={require("../../assets/photos/right-arrow.png" )} style={{width:35, height:35,}} /></View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              padding: 10,
              borderRadius: 10,
              borderColor: "#2FCBD8",
              borderWidth: 1,
              width: '90%',
              height: 50,
              marginTop: 20,
            }}
            onPress={() => navigation.navigate('OrderNaolAmylase')}
          >
            <View style={styles.hospital}>
              <View style={styles.hospitalname}>
                <View><Text>Amylase</Text></View>
              </View>
              <View><Image source={require("../../assets/photos/right-arrow.png" )} style={{width:35, height:35,}} /></View>
            </View>
          </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
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
  // marginLeft:40

  
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
helloText: {
  fontWeight:'bold',
  fontSize: 40,
  marginLeft:10,
  marginTop:-80,
},
abebeText: {
  color: '#2FCBD8',
  fontWeight:'bold',
  fontSize: 40,
},
testText: {
  color: 'grey',
  // fontWeight:'bold',
  fontSize: 12,
  marginLeft:10,
},
labText: {
  color: 'black',
  fontWeight:'bold',
  fontSize: 20,
  marginLeft:10,
},
main : {
  // backgroundColor: '#FFFF00',
  display:'flex',
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
},
flat: {
  paddingLeft:5,
  paddingRight:5,
  paddingTop:7,
  paddingBottom:7,
  borderColor: '#2FCBD8',
  borderRadius: 5,
  borderWidth: 1,
  margin: 7,
},
lab: {
  textAlign: 'center',
  fontSize:30,
  fontWeight: 'bold',
  // marginBottom: 10,
  color: '#2FCBD8',
},
test: {
  textAlign: 'center',
  fontSize:20,
  fontWeight: 'bold',
},
labtest: {
  top: -160,
},
hospital: {
  display:'flex',
  flexDirection: 'row',
  flex: 1,
  justifyContent: 'space-between',
  alignItems: 'center',
},
hospitalname: {
  display:'flex',
  flexDirection: 'row',
  flex: 1,
  alignItems: 'center',
},
correct: {
  display:'flex',
  flexDirection: 'row',
  flex: 1,
  alignItems: 'center',
  marginBottom:15,
},
facilitytext: {
  fontSize: 20,
  fontWeight:'bold',
  marginLeft:10,
},
logoFacility: {
  // display:'block',
  marginRight:'auto',
  marginLeft:'auto',
}
});
