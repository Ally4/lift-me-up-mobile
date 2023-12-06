import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export default function MainScreen() {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [picture, setPicture] = useState('');

  const data = [
    { id: '1', title: 'Urine Analysis' },
    { id: '2', title: 'Amylase' },
    { id: '3', title: 'Complete Body Count (cbc)' },
    { id: '4', title: 'Lipase' },
    { id: '5', title: 'Serum Creatine' },
    { id: '6', title: 'Serum Potassium' },
    { id: '7', title: 'Serum Sodium' },
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


  const user = async () => {
    try {


      const toStore = await axios.get(`https://acubed-backend-production.up.railway.app/api/v1/auth/${response.data.user}`);



      await AsyncStorage.setItem('picture', toStore.data?.user?.profilPicture)
      await AsyncStorage.setItem('email', toStore.data?.user?.email)
      await AsyncStorage.setItem('dob', toStore.data?.user?.dateOfBirth)
      await AsyncStorage.setItem('gender', toStore.data?.user?.gender)
      await AsyncStorage.setItem('city', toStore.data?.user?.city)
      await AsyncStorage.setItem('lastName', toStore.data?.user?.lastName)
      await AsyncStorage.setItem('occupation', toStore.data?.user?.occupation)



      const proPicture = await AsyncStorage.getItem('picture');

      console.log('the pic is here', proPicture)


      setPicture(proPicture);
    } catch (error) {
      // Handle errors
    }
  }


      // const toStore = await axios.get(`https://acubed-backend-production.up.railway.app/api/v1/auth/${response.data.user}`);



      //  await AsyncStorage.setItem('picture', toStore.data.user.profilPicture)
      //  await AsyncStorage.setItem('email', toStore.data.user.email)
      //  await AsyncStorage.setItem('dob', toStore.data.user.dateOfBirth)
      //  await AsyncStorage.setItem('gender', toStore.data.user.gender)
      //  await AsyncStorage.setItem('city', toStore.data.user.city)
      //  await AsyncStorage.setItem('lastName', toStore.data.user.lastName)
      //  await AsyncStorage.setItem('occupation', toStore.data.user.occupation)


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View style={{ backgroundColor: "#2FCBD8", width: 250, height: 250, borderRadius: 180, top: -150, left: -120 }}></View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Profil')} >
            {/* <Image source={require("../../assets/photos/left-chevron.png")} style={{ marginTop: -190, marginLeft: 10, width: 20, height: 20 }} /> */}
            <Image source={{uri:picture}} style={{ marginTop: -210, marginLeft: 10, width: 50, height: 50, borderWidth:2}} />


          {/* <Image
  source={{ uri: `https://res.cloudinary.com/bomayee/image/upload/v1699862446/acubed-profil-pictures/profile_oyc28d.png` }}
  style={{ marginTop: -210, marginLeft: 10, borderWidth: 2, width:50, height:50}}
  onError={(error) => console.error("Image load error", error)}
/> */}



          </TouchableOpacity>
        </View>
          {/* <Image source={picture} style={{ marginTop: -150, marginLeft: 10, width: 50, height: 50 }} /> */}
          <View style={{marginBottom:150}}> 
          <Image source={require("../../assets/photos/logo-blue.png")} style={{ marginTop: -80, marginLeft: 135 }} />
          <Image source={require("../../assets/photos/bell.png")} style={{ marginTop: -10, marginLeft: 330, width: 35, height: 35 }} />
          </View>
          <View style={{marginTop:-100}}>
        <Text style={styles.helloText}>Hello <Text style={styles.abebeText}>{name}!</Text></Text>
        <Text style={styles.testText}>Which facility or test are you looking for today?</Text>
        <View style={styles.main}>
          <TextInput
            style={{
              backgroundColor: 'white',
              padding: 10,
              borderRadius: 10,
              borderColor: "#2FCBD8",
              borderWidth: 1,
              width: 300,
              marginTop: 20,
            }}
            placeholder={'Search'}
          />
          <Text style={styles.labText}>Lab Tests</Text>

          <FlatList
            horizontal
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  if (item.id === '1') {
                    navigation.navigate('OrderAllationUrine');
                  } else if (item.id === '2') {
                    navigation.navigate('OrderAllationAmylase');
                  } else if (item.id === '3') {
                    navigation.navigate('OrderAllationcbc');
                  } else if (item.id === '4') {
                    navigation.navigate('OrderAllationLipase');
                  } else if (item.id === '5') {
                    navigation.navigate('OrderAllationSerumCreatine');
                  } else if (item.id === '6') {
                    navigation.navigate('OrderAllationSerumPotassium');
                  } else if (item.id === '7') {
                    navigation.navigate('OrderAllationSerumSodium');
                  }
                }}
              >
                <View style={styles.flat}>
                  <Text>{item.title}</Text>
                </View>
              </TouchableOpacity>
            )}
          />

          {/* <View>
            <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('Order')}>
              <Text style={styles.buttonText1}>Order</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('Booking')}>
              <Text style={styles.buttonText1}>Booking</Text>
            </TouchableOpacity>
          </View> */}
          <View style={{alignSelf:'flex-start'}}>
            <Text style={styles.facText}>Our Facilities</Text>
          </View>
          <View style={styles.facilities}>
            <View style={{borderWidth:2, borderColor:'#C7C4B9', borderRadius:10, marginRight:10}}><TouchableOpacity onPress={() => navigation.navigate('AlationFacility')}><Image source={require("../../assets/photos/med.png")} style={{width:120, height:120, marginTop:10, marginRight:10}} /><Text>  Alation Hospital</Text></TouchableOpacity></View>
            <View style={{borderWidth:2, borderColor:'#C7C4B9', borderRadius:10, marginLeft:10}}><TouchableOpacity onPress={() => navigation.navigate('KibruFacility')}><Image source={require("../../assets/photos/med.png")} style={{width:120, height:120, marginTop:10, marginLeft:10}} /><Text>     Kibru Hospital</Text></TouchableOpacity></View>
          </View>
          <View style={styles.facilities}>
            <View style={{borderWidth:2, borderColor:'#C7C4B9', borderRadius:10, marginRight:10}}><TouchableOpacity onPress={() => navigation.navigate('NaolFacility')}><Image source={require("../../assets/photos/med.png")} style={{width:120, height:120, marginTop:10, marginRight:10}} /><Text>   Naol Hospital</Text></TouchableOpacity></View>
            <View style={{borderWidth:2, borderColor:'#C7C4B9', borderRadius:10, marginLeft:10}}><TouchableOpacity onPress={() => navigation.navigate('YanetFacility')}><Image source={require("../../assets/photos/med.png")} style={{width:120, height:120, marginTop:10, marginLeft:10}} /><Text>     Yanet Hospital</Text></TouchableOpacity></View>
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
  fontWeight:'bold',
  fontSize: 15,
  marginLeft:10,
},
labText: {
  color: 'black',
  fontWeight:'bold',
  fontSize: 20,
  // textAlign:'center',
  marginLeft:10,
  alignSelf:'flex-start'
},
facText: {
  color: 'black',
  fontWeight:'bold',
  fontSize: 20,
  // textAlign:'center',
  marginLeft:10,
  alignSelf:'flex-start'
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
facilities: {
  display:'flex',
  flexDirection: 'row',
  flex: 1,
  justifyContent: 'space-around',
  alignItems: 'center',
  marginBottom:10,
  marginTop:10,
}
});
