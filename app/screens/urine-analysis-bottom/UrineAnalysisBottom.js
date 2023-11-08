import React, { useEffect, useState, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList, ScrollView, Animated } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';

export default function UrineAnalysis() {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [picture, setPicture] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const translateY = useRef(new Animated.Value(400)).current;

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






  // const toggleSheet = () => {
  //   if (isVisible) {
  //     Animated.timing(translateY, {
  //       toValue: 400,
  //       duration: 300,
  //       useNativeDriver: false,
  //     }).start();
  //   } else {
  //     Animated.timing(translateY, {
  //       toValue: 0,
  //       duration: 300,
  //       useNativeDriver: false,
  //     }).start();
  //   }

  //   setIsVisible(!isVisible);
  // };

const sheetRef =  useRef<BottomSheet>(null);
const [isOpen, setIsOpen] = useState(true);

const snapPoints = ["40%"];



  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{ backgroundColor: "#2FCBD8", width: 250, height: 250, borderRadius: 100, top: -140, left: -140 }}></View>
        <View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require("../../assets/photos/left-arrow.png")} style={{ marginTop: -220, marginLeft: 10, width: 40, height: 40 }} />
          </TouchableOpacity>
        </View>
        <View style={styles.labtest}>
        <Text style={styles.lab}>Lab test</Text>
        <Text style={styles.test}>Urine Analysis</Text>
        <Text style={styles.testText}>You can run your test in any of these facilities</Text>
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
          >
            <View style={styles.hospital}>
              <View style={styles.hospitalname}>
                <View><Text>Allation Hospital</Text></View>
                <View style={styles.correct}>
                  <View><Image source={require("../../assets/photos/correct.png")} style={{width:15, height:15,}}></Image></View>
                  <View><Image></Image></View>
                </View>
              </View>
              <View><Image source={require("../../assets/photos/new-moon.png" )} style={{width:35, height:35,}} /></View>
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
          >
            <View style={styles.hospital}>
              <View style={styles.hospitalname}>
                <View><Text>Kibru Hospital</Text></View>
                <View style={styles.correct}>
                  <View><Image source={require("../../assets/photos/correct.png")} style={{width:15, height:15,}}></Image></View>
                  <View><Image></Image></View>
                </View>
              </View>
              <View><Image source={require("../../assets/photos/new-moon.png" )} style={{width:35, height:35,}} /></View>
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
          >
            <View style={styles.hospital}>
              <View style={styles.hospitalname}>
                <View><Text>Naol Hospital</Text></View>
                <View style={styles.correct}>
                  <View><Image source={require("../../assets/photos/correct.png")} style={{width:15, height:15,}}></Image></View>
                  <View><Image></Image></View>
                </View>
              </View>
              <View><Image source={require("../../assets/photos/new-moon.png" )} style={{width:35, height:35,}} /></View>
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
          >
            <View style={styles.hospital}>
              <View style={styles.hospitalname}>
                <View><Text>Yanet Hospital</Text></View>
                <View style={styles.correct}>
                  <View><Image source={require("../../assets/photos/correct.png")} style={{width:15, height:15,}}></Image></View>
                  <View><Image></Image></View>
                </View>
              </View>
              <View><Image source={require("../../assets/photos/new-moon.png" )} style={{width:35, height:35,}} /></View>
            </View>
          </TouchableOpacity>
          </View>




          {/* <TouchableOpacity onPress={toggleSheet} style={styles.buttonSheet}>
        <Text style={styles.buttonTextSheet}>
          {isVisible ? 'Close Bottom Sheet' : 'Open Bottom Sheet'}
        </Text>
      </TouchableOpacity>

      {isVisible && (
        <Animated.View
          style={[
            styles.bottomSheet,
            {
              transform: [{ translateY }],
            },
          ]}
        >
          <View style={styles.lineSheet}></View>

          <View style={styles.sheetContent}>
            <TouchableOpacity
              onPress={() => {
                toggleSheet();
                navigation.navigate('SecondScreen');
              }}
            >
              <Text style={styles.sheetButton}>Navigate to Second Screen</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleSheet}>
              <Text style={styles.sheetButton}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      )} */}








          <BottomSheet
          ref={sheetRef}
          snapPoints={snapPoints}
          enablePanDownToClose={true}
          onClose={() => setIsOpen(false)}
          >
            <BottomSheetView>
              <Text>EEEEHHHH Baba eh</Text>
            </BottomSheetView>

          </BottomSheet>



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
  height: 2,
  width: '30%',
  backgroundColor: '#808080',
  marginTop:20,
  // position:'center'
  marginVertical:10,
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
  marginBottom: 50,
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




// bottomSheet: {
//   position: 'absolute',
//   bottom: 0,
//   width: '100%',
//   height:'100%',
//   backgroundColor: 'white',
//   borderTopLeftRadius: 20,
//   borderTopRightRadius: 20,
//   padding: 20,
// },
// // bottomPart: {
// //   bottom: 0,
// //   width: '100%',
// //   height:'40%',
// //   backgroundColor: 'yellow',
// //   borderTopLeftRadius: 20,
// //   borderTopRightRadius: 20,
// //   padding: 20,
// // },
// sheetButton: {
//   fontSize: 18,
//   color: 'blue',
// },






buttonSheet: {
  backgroundColor: 'blue',
  padding: 12,
},
buttonTextSheet: {
  color: 'white',
},
bottomSheet: {
  position: 'absolute',
  bottom: 0,
  width: '100%',
  backgroundColor: 'white',
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  padding: 20,
  zIndex: 1, // To make the bottom sheet appear above the line
},
sheetContent: {
  flex: 1,
  alignItems: 'center',
},
sheetButton: {
  fontSize: 18,
  color: 'blue',
  marginVertical: 8,
},
lineSheet: {
  width: '100%',
  height: 1,
  backgroundColor: 'lightgray',
  marginVertical: 10, // Adjust as needed
},



});
