import 'react-native-gesture-handler';
// import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';



export default function MainScreen() {

  const navigation = useNavigation();
  const [name, setName] =  useState('');
  const [picture, setPicture] =  useState('')

  const goToOrderUrine = () => navigation.navigate('Login');
  const goToOrderSerum = () => navigation.navigate('Login');
  const goToOrderSpecimen = () => navigation.navigate('Login');
  const goToOrderSaliva = () => navigation.navigate('Login');
  const goToOrderNursing = () => navigation.navigate('Login');




    const data = [
      { id: '1', title: 'Urine Analysis', func: goToOrderUrine()},
      { id: '2', title: 'Serum Sodium', func: goToOrderSerum()},
      { id: '3', title: 'Giving specimen', func: goToOrderSpecimen() },
      { id: '4', title: 'Saliva test', func: goToOrderSaliva() },
      { id: '5', title: 'Home nursing', func: goToOrderNursing() },
    ];


    const getData = async ()=>{
      try {
        const username = await AsyncStorage.getItem('name')
        setName(username);
      } catch (error) {
        
      }
    }

    const getPic = async ()=>{
      try {
        const proPicture = await AsyncStorage.getItem('profilPicture')
        setPicture(proPicture);
      } catch (error) {
        
      }
    }

    useEffect(()=>{
      getData();
    },[])

    useEffect(()=>{
      getPic();
    },[])

  return (
      <SafeAreaView style={styles.container1}> 
      <ScrollView >
        <View style={{backgroundColor:"#2FCBD8", width:250, height:250, borderRadius:150, top: -90, left:-90}}></View>
        <View>
        <TouchableOpacity onPress={() => navigation.goBack()} ><Image  source={require("../../assets/photos/left-arrow.png")} style={{marginTop:-220, marginLeft:10, width:40, height:40}}/></TouchableOpacity>
        <Image src={picture} style={{marginTop:-150, marginLeft:10, width:50, height:50}}/>
        <Image source={require("../../assets/photos/logo-blue.png")} style={{marginTop:-40, marginLeft:135}}/>
        <Image source={require("../../assets/photos/bell.png")} style={{marginTop:-30,marginLeft:330, width:35, height:35}}/>
        </View>
        <Text style={styles.helloText}>Hello, <Text style={styles.abebeText}>{name}!</Text></Text>
        <Text style={styles.testText}>Which facility or test are you looking for today?</Text>
        <TextInput
         style={{
          backgroundColor: 'white',
          padding: 10,
          borderRadius: 10,
          borderColor:"#2FCBD8",
          borderWidth:1,
          width:300,
          marginTop:20,
          marginLeft:40
          }}
          placeholder={'Search'}
           />
         <Text style={styles.labText}>Lab Tests</Text>
         {/* <FlatList
        horizontal
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={(item) => (
          <View style={{ margin: 10,   backgroundColor: 'white',
          padding: 10,
          borderRadius: 10,
          borderColor:"#2FCBD8",
          borderWidth:2,
          width:150}}>
           <TouchableOpacity onPress={item.func}><Text>{item.name}</Text></TouchableOpacity>
          </View>
        )}
      /> */}
        <TouchableOpacity style={styles.button1}
          onPress={() => navigation.navigate('Order')}
           > 
            <Text style={styles.buttonText1}>Order</Text>
           </TouchableOpacity>
         <Text style={styles.labText}>Our Facilities</Text>
         <Image source={require("../../assets/photos/plus.png")} style={{width:100, height:100, marginTop:260, marginLeft:280}}/>
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
  marginLeft:10,
},
})