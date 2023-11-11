// import React, { useEffect, useState } from 'react';
// import { useNavigation } from '@react-navigation/native';
// import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList, ScrollView } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// export default function SerumSodium() {
//   const navigation = useNavigation();
//   const [name, setName] = useState('');
//   const [picture, setPicture] = useState('');

//   const data = [
//     { id: '1', title: 'Urine Analysis' },
//     { id: '2', title: 'Serum Sodium' },
//     { id: '3', title: 'Giving specimen' },
//     { id: '4', title: 'Saliva test' },
//     { id: '5', title: 'Home nursing' },
//   ];

//   const getData = async () => {
//     try {
//       const username = await AsyncStorage.getItem('name');
//       setName(username);
//     } catch (error) {
//       // Handle errors
//     }
//   }

//   const getPic = async () => {
//     try {
//       const proPicture = await AsyncStorage.getItem('profilPicture');
//       setPicture(proPicture);
//     } catch (error) {
//       // Handle errors
//     }
//   }

//   useEffect(() => {
//     getData();
//   }, []);

//   useEffect(() => {
//     getPic();
//   }, []);

//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView>
//         <View style={{ backgroundColor: "#2FCBD8", width: 250, height: 250, borderRadius: 180, top: -150, left: -120 }}></View>
//         <View>
//           <TouchableOpacity onPress={() => navigation.goBack()}>
//             <Image source={require("../../assets/photos/left-chevron.png")} style={{ marginTop: -190, marginLeft: 10, width: 20, height: 20 }} />
//           </TouchableOpacity>
//         </View>
//         <View style={styles.labtest}>
//         <Text style={styles.lab}>Lab test</Text>
//         <Text style={styles.test}>Serum Sodium</Text>
//         <Text style={styles.testText}>You can run your test in any of these facilities</Text>
//         <View style={styles.main}>
//           <TouchableOpacity
//             style={{
//               backgroundColor: 'white',
//               padding: 10,
//               borderRadius: 10,
//               borderColor: "#2FCBD8",
//               borderWidth: 1,
//               width: '90%',
//               height: 50,
//               marginTop: 20,
//             }}
//           >
//             <View style={styles.hospital}>
//               <View style={styles.hospitalname}>
//                 <View><Text>Allation Hospital</Text></View>
//                 <View style={styles.correct}>
//                   <View><Image source={require("../../assets/photos/correct.png")} style={{width:15, height:15,}}></Image></View>
//                   <View><Image></Image></View>
//                 </View>
//               </View>
//               <View><Image source={require("../../assets/photos/new-moon.png" )} style={{width:35, height:35,}} /></View>
//             </View>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={{
//               backgroundColor: 'white',
//               padding: 10,
//               borderRadius: 10,
//               borderColor: "#2FCBD8",
//               borderWidth: 1,
//               width: '90%',
//               height: 50,
//               marginTop: 20,
//             }}
//           >
//             <View style={styles.hospital}>
//               <View style={styles.hospitalname}>
//                 <View><Text>Kibru Hospital</Text></View>
//                 <View style={styles.correct}>
//                   <View><Image source={require("../../assets/photos/correct.png")} style={{width:15, height:15,}}></Image></View>
//                   <View><Image></Image></View>
//                 </View>
//               </View>
//               <View><Image source={require("../../assets/photos/new-moon.png" )} style={{width:35, height:35,}} /></View>
//             </View>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={{
//               backgroundColor: 'white',
//               padding: 10,
//               borderRadius: 10,
//               borderColor: "#2FCBD8",
//               borderWidth: 1,
//               width: '90%',
//               height: 50,
//               marginTop: 20,
//             }}
//           >
//             <View style={styles.hospital}>
//               <View style={styles.hospitalname}>
//                 <View><Text>Naol Hospital</Text></View>
//                 <View style={styles.correct}>
//                   <View><Image source={require("../../assets/photos/correct.png")} style={{width:15, height:15,}}></Image></View>
//                   <View><Image></Image></View>
//                 </View>
//               </View>
//               <View><Image source={require("../../assets/photos/new-moon.png" )} style={{width:35, height:35,}} /></View>
//             </View>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={{
//               backgroundColor: 'white',
//               padding: 10,
//               borderRadius: 10,
//               borderColor: "#2FCBD8",
//               borderWidth: 1,
//               width: '90%',
//               height: 50,
//               marginTop: 20,
//             }}
//           >
//             <View style={styles.hospital}>
//               <View style={styles.hospitalname}>
//                 <View><Text>Yanet Hospital</Text></View>
//                 <View style={styles.correct}>
//                   <View><Image source={require("../../assets/photos/correct.png")} style={{width:15, height:15,}}></Image></View>
//                   <View><Image></Image></View>
//                 </View>
//               </View>
//               <View><Image source={require("../../assets/photos/new-moon.png" )} style={{width:35, height:35,}} /></View>
//             </View>
//           </TouchableOpacity>
//           </View>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "white",
//   },
  
// button: {
//   backgroundColor: 'white',
//   padding: 10,
//   borderRadius: 5,
//   width:300,
//   marginLeft:40

  
// },
// button2: {
//   backgroundColor: 'white',
//   padding: 10,
//   borderRadius: 5,
//   width:300,
//   marginLeft:40,
//   marginTop:20,
//   borderWidth: 2,
//   borderColor: "#2FCBD8",

  
// },
// buttonText: {
//   color: '#000',
//   fontSize: 16,
//   fontWeight: 'bold',
//   textAlign: 'center',
// },
// button1: {
//   backgroundColor: '#2FCBD8',
//   padding: 10,
//   borderRadius: 5,
//   borderColor:"white",
//   borderWidth:2,
//   width:300,
//   marginTop:20,
//   // marginLeft:40

  
// },
// buttonText1: {
//   color: 'white',
//   fontSize: 16,
//   fontWeight: 'bold',
//   textAlign: 'center',
// },
// line: {
//   height: 1,
//   width: '40%',
//   backgroundColor: '#2FCBD8',
//   marginTop:20,
// },
// lineBox: {
//   marginLeft:150,
// },
// lineText: {
//   marginLeft:25,
//   marginTop:15,
// },
// resetText: {
//   marginTop: 20,
//   fontWeight: 'bold',
//   textAlign: 'center',
// },
// resetParagraphEnter: {
//   textAlign: 'center',
//   marginRight: 10,
// },
// helloText: {
//   fontWeight:'bold',
//   fontSize: 40,
//   marginLeft:10,
//   marginTop:-80,
// },
// abebeText: {
//   color: '#2FCBD8',
//   fontWeight:'bold',
//   fontSize: 40,
// },
// testText: {
//   color: 'grey',
//   fontWeight:'bold',
//   fontSize: 15,
//   marginLeft:10,
// },
// labText: {
//   color: 'black',
//   fontWeight:'bold',
//   fontSize: 20,
//   marginLeft:10,
// },
// main : {
//   // backgroundColor: '#FFFF00',
//   display:'flex',
//   flex: 1,
//   justifyContent: 'center',
//   alignItems: 'center',
// },
// flat: {
//   paddingLeft:5,
//   paddingRight:5,
//   paddingTop:7,
//   paddingBottom:7,
//   borderColor: '#2FCBD8',
//   borderRadius: 5,
//   borderWidth: 1,
//   margin: 7,
// },
// lab: {
//   textAlign: 'center',
//   fontSize:30,
//   fontWeight: 'bold',
//   marginBottom: 50,
//   color: '#2FCBD8',
// },
// test: {
//   textAlign: 'center',
//   fontSize:20,
//   fontWeight: 'bold',
// },
// labtest: {
//   top: -160,
// },
// hospital: {
//   display:'flex',
//   flexDirection: 'row',
//   flex: 1,
//   justifyContent: 'space-between',
//   alignItems: 'center',
// },
// hospitalname: {
//   display:'flex',
//   flexDirection: 'row',
//   flex: 1,
//   alignItems: 'center',
// },
// correct: {
//   display:'flex',
//   flexDirection: 'row',
//   flex: 1,
//   alignItems: 'center',
//   marginBottom:15,
// }
// });






import 'react-native-reanimated';
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';




import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList, ScrollView, Animated, Modal, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';


import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import PopupDialog from 'react-native-popup-dialog';


import BottomSheett from '../bottomSheet/BottomSheet';


export default function SerumSodium() {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [picture, setPicture] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const translateY = useRef(new Animated.Value(700)).current;


const [modalVisible, setModalVisible] = useState(false);


const [popupVisible, setPopupVisible] = useState(false);



  const myRef = useRef(null);

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






  const toggleSheet = () => {
    if (isVisible) {
      Animated.timing(translateY, {
        toValue: 700,
        duration: 600,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(translateY, {
        toValue: 0,
        duration: 600,
        useNativeDriver: false,
      }).start();
    }

    setIsVisible(!isVisible);
  };

// const sheetRef =  useRef<BottomSheet>(null);
// const [isOpen, setIsOpen] = useState(true);

// const snapPoints = ["40%"];




// const handleSnapPress = useCallback ((index) => {
//   sheetRef.current?.snapToIndex(index);
//   setIsOpen(true);
//   }, []);




const handlePopupClose = () => {
  setPopupVisible(false);
  setTimeout(() => {
    navigation.navigate('SerumSodium');
  }, 300);
};

const handleGoToNextScreen = () => {
  setPopupVisible(false);
  navigation.navigate('Order');
};







  return (
    // <SafeAreaView style={[styles.container, {backgroundColor: isOpen ? '#00000090' : 'fff'}]}></SafeAreaView>
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{ backgroundColor: "#2FCBD8", width: 250, height: 250, borderRadius: 180, top: -150, left: -120 }}></View>
        <View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require("../../assets/photos/left-chevron.png")} style={{ marginTop: -190, marginLeft: 10, width: 20, height: 20 }} />
          </TouchableOpacity>
        </View>
        <View style={styles.labtest}>
        <Text style={styles.lab}>Lab test</Text>
        <Text style={styles.test}>Serum Sodium</Text>
        <Text style={styles.testText}>You can run your test in any of these facilities</Text>
        <View style={styles.main}>
          {/* <TouchableOpacity
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
          > */}



                  {/* {isVisible && (
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
                navigation.navigate('Order');
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







            {/* <View style={styles.hospital}>
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
          </View> */}




          {/* <TouchableOpacity onPress={toggleSheet} style={styles.buttonSheet}>
        <Text style={styles.buttonTextSheet}>
          {isVisible ? 'Close Bottom Sheet' : 'Open Bottom Sheet what'}
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
                navigation.navigate('Order');
              }}
            >
              <Text style={styles.sheetButton}>Navigate to Second Screen</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleSheet}>
              <Text style={styles.sheetButton}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleSheet}>
              <Text style={styles.sheetButton}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleSheet}>
              <Text style={styles.sheetButton}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleSheet}>
              <Text style={styles.sheetButton}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleSheet}>
              <Text style={styles.sheetButton}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      )} */}






          {/* <TouchableOpacity
          style={styles.button}
          onPress={() => handleSnapPress(0)}
          >
            <Text style={{color:'0080fb', fontSize:16, fontWeight:'600'}}>GET</Text>
          </TouchableOpacity>



          <BottomSheet
          ref={sheetRef}
          snapPoints={snapPoints}
          enablePanDownToClose={true}
          onClose={() => setIsOpen(false)}
          >
            <BottomSheetView>
              <BottomSheett/>
               <Text>EEEEHHHH Baba eh</Text>
            </BottomSheetView>

          </BottomSheet>  */}










    {/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', width:'100%' }}>
      <PopupDialog
        visible={popupVisible}
        onTouchOutside={() => {
          setPopupVisible(false);
        }}
      >
        <View style={{ backgroundColor: 'white', padding: 20 }}>
          <Text>Hello World!</Text>

          <Button
            title="Close"
            onPress={() => {
              setPopupVisible(false);
              navigation.goBack();
            }}
          />
        </View>
      </PopupDialog>




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
            onPress={() => setPopupVisible(true)}
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
          </TouchableOpacity> */}









          <View 
                  style={{
                    backgroundColor: 'white',
                    padding: 10,
                    borderRadius: 10,
                    width: '100%',
                    height: 50,
                    // marginTop: 20,
                  }}
                  >
      <PopupDialog
        visible={popupVisible}
        onPress={() => {
          setPopupVisible(false);
        }}
      >
        <View style={{ backgroundColor: 'white', padding: 20, height:'50%' }}>
          {/* <Text>Hello World!</Text> */}
          <TouchableOpacity
            style={{ marginTop: 10 }}
            onPress={handleGoToNextScreen}
          >
            {/* <Text>Go to Next Screen bbbbbbbbbbbbbb</Text> */}
            {/* <View style={styles.hospitalname}>
              <Text>Kibru</Text>
                <View><Text style={styles.facilitytext}>Kibru Hospital</Text></View>
                <View style={styles.correct}>
                  <Image source={require("../../assets/photos/correct.png")} style={{width:15, height:15,}}></Image>
                  <View><Image></Image></View>
                </View>
              </View> */}
              <Text >Allation Hospital</Text>          
                  {/* <Image source={require("../../assets/photos/correct.png")} style={{width:15, height:15,}}></Image> */}
        <Text style={styles.testText}>7545 Bedfort Avenue Omaha NE 68134</Text>
        <Text>Price:50$</Text>
        <Text>Turnaround Time 1hour</Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          </TouchableOpacity>
        <View>
          <Button   title="Order" style={{marginTop:20}} onPress={handleGoToNextScreen} /> 
          <Text></Text>
           <Button title="Cancel"  onPress={handlePopupClose}  />
{/* <TouchableOpacity style={styles.buttonPop} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonTextPop}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button1Pop} onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.buttonText1Pop}>Sign Up</Text>
      </TouchableOpacity> */}
          </View>
        </View>
      </PopupDialog>
      <TouchableOpacity
            style={{
              backgroundColor: 'white',
              padding: 10,
              borderRadius: 10,
              borderColor: "#2FCBD8",
              borderWidth: 1,
              width: '100%',
              height: 50,
              // marginTop: 20,
            }}
            onPress={() => setPopupVisible(true)}
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
    </View>

    <View 
                  style={{
                    backgroundColor: 'white',
                    padding: 10,
                    borderRadius: 10,
                    width: '100%',
                    height: 50,
                    marginTop: 30,
                  }}
                  >
      <PopupDialog
        visible={popupVisible}
        onPress={() => {
          setPopupVisible(false);
        }}
      >
        <View style={{ backgroundColor: 'white', padding: 20, height:'50%' }}>
          {/* <Text>Hello World!</Text> */}
          <TouchableOpacity
            style={{ marginTop: 10 }}
            onPress={handleGoToNextScreen}
          >
            {/* <Text>Go to Next Screen bbbbbbbbbbbbbb</Text> */}
            {/* <View style={styles.hospitalname}>
              <Text>Kibru</Text>
                <View><Text style={styles.facilitytext}>Kibru Hospital</Text></View>
                <View style={styles.correct}>
                  <Image source={require("../../assets/photos/correct.png")} style={{width:15, height:15,}}></Image>
                  <View><Image></Image></View>
                </View>
              </View> */}
              <Text >Kibru Hospital</Text>          
                  {/* <Image source={require("../../assets/photos/correct.png")} style={{width:15, height:15,}}></Image> */}
        <Text style={styles.testText}>7545 Bedfort Avenue Omaha NE 68134</Text>
        <Text>Price:50$</Text>
        <Text>Turnaround Time 1hour</Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          </TouchableOpacity>
        <View>
          <Button   title="Order" style={{marginTop:20}} onPress={handleGoToNextScreen} /> 
          <Text></Text>
           <Button title="Cancel"  onPress={handlePopupClose}  />
{/* <TouchableOpacity style={styles.buttonPop} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonTextPop}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button1Pop} onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.buttonText1Pop}>Sign Up</Text>
      </TouchableOpacity> */}
          </View>
        </View>
      </PopupDialog>
      <TouchableOpacity
            style={{
              backgroundColor: 'white',
              padding: 10,
              borderRadius: 10,
              borderColor: "#2FCBD8",
              borderWidth: 1,
              width: '100%',
              height: 50,
              // marginTop: 20,
            }}
            onPress={() => setPopupVisible(true)}
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
    </View>

    <View 
                  style={{
                    backgroundColor: 'white',
                    padding: 10,
                    borderRadius: 10,
                    width: '100%',
                    height: 50,
                    marginTop: 30,
                  }}
                  >
      <PopupDialog
        visible={popupVisible}
        onPress={() => {
          setPopupVisible(false);
        }}
      >
        <View style={{ backgroundColor: 'white', padding: 20, height:'50%' }}>
          {/* <Text>Hello World!</Text> */}
          <TouchableOpacity
            style={{ marginTop: 10 }}
            onPress={handleGoToNextScreen}
          >
            {/* <Text>Go to Next Screen bbbbbbbbbbbbbb</Text> */}
            {/* <View style={styles.hospitalname}>
              <Text>Kibru</Text>
                <View><Text style={styles.facilitytext}>Kibru Hospital</Text></View>
                <View style={styles.correct}>
                  <Image source={require("../../assets/photos/correct.png")} style={{width:15, height:15,}}></Image>
                  <View><Image></Image></View>
                </View>
              </View> */}
              <Text >Naol Hospital</Text>          
                  {/* <Image source={require("../../assets/photos/correct.png")} style={{width:15, height:15,}}></Image> */}
        <Text style={styles.testText}>7545 Bedfort Avenue Omaha NE 68134</Text>
        <Text>Price:50$</Text>
        <Text>Turnaround Time 1hour</Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          </TouchableOpacity>
        <View>
          <Button   title="Order" style={{marginTop:20}} onPress={handleGoToNextScreen} /> 
          <Text></Text>
           <Button title="Cancel"  onPress={handlePopupClose}  />
{/* <TouchableOpacity style={styles.buttonPop} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonTextPop}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button1Pop} onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.buttonText1Pop}>Sign Up</Text>
      </TouchableOpacity> */}
          </View>
        </View>
      </PopupDialog>
      <TouchableOpacity
            style={{
              backgroundColor: 'white',
              padding: 10,
              borderRadius: 10,
              borderColor: "#2FCBD8",
              borderWidth: 1,
              width: '100%',
              height: 50,
              // marginTop: 20,
            }}
            onPress={() => setPopupVisible(true)}
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
    </View>

    <View 
                  style={{
                    backgroundColor: 'white',
                    padding: 10,
                    borderRadius: 10,
                    width: '100%',
                    height: 50,
                    marginTop: 30,
                  }}
                  >
      <PopupDialog
        visible={popupVisible}
        onPress={() => {
          setPopupVisible(false);
        }}
      >
        <View style={{ backgroundColor: 'white', padding: 20, height:'50%' }}>
          {/* <Text>Hello World!</Text> */}
          <TouchableOpacity
            style={{ marginTop: 10 }}
            onPress={handleGoToNextScreen}
          >
            {/* <Text>Go to Next Screen bbbbbbbbbbbbbb</Text> */}
            {/* <View style={styles.hospitalname}>
              <Text>Kibru</Text>
                <View><Text style={styles.facilitytext}>Kibru Hospital</Text></View>
                <View style={styles.correct}>
                  <Image source={require("../../assets/photos/correct.png")} style={{width:15, height:15,}}></Image>
                  <View><Image></Image></View>
                </View>
              </View> */}
              <Text >Yanet Hospital</Text>          
                  {/* <Image source={require("../../assets/photos/correct.png")} style={{width:15, height:15,}}></Image> */}
        <Text style={styles.testText}>7545 Bedfort Avenue Omaha NE 68134</Text>
        <Text>Price:50$</Text>
        <Text>Turnaround Time 1hour</Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          </TouchableOpacity>
        <View>
          <Button   title="Order" style={{marginTop:20}} onPress={handleGoToNextScreen} /> 
          <Text></Text>
           <Button title="Cancel"  onPress={handlePopupClose}  />
{/* <TouchableOpacity style={styles.buttonPop} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonTextPop}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button1Pop} onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.buttonText1Pop}>Sign Up</Text>
      </TouchableOpacity> */}
          </View>
        </View>
      </PopupDialog>
      <TouchableOpacity
            style={{
              backgroundColor: 'white',
              padding: 10,
              borderRadius: 10,
              borderColor: "#2FCBD8",
              borderWidth: 1,
              width: '100%',
              height: 50,
              // marginTop: 20,
            }}
            onPress={() => setPopupVisible(true)}
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

    {/* <View 
                  style={{
                    backgroundColor: 'white',
                    padding: 10,
                    borderRadius: 10,
                    width: '100%',
                    height: 50,
                    marginTop: 30,
                  }}
                  >
      <PopupDialog
        visible={popupVisible}
        onPress={() => {
          setPopupVisible(false);
        }}
      >
        <View style={{ backgroundColor: 'white', padding: 20, height:'50%' }}>
          <TouchableOpacity
            style={{ marginTop: 10 }}
            onPress={handleGoToNextScreen}
          >

              <Text >Kibru Hospital</Text>          
        <Text style={styles.testText}>7545 Bedfort Avenue Omaha NE 68134</Text>
        <Text>Price:50$</Text>
        <Text>Turnaround Time 1hour</Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          </TouchableOpacity>
        <View>
          <Button   title="Order" style={{marginTop:20}} onPress={handleGoToNextScreen} /> 
          <Text></Text>
           <Button title="Cancel"  onPress={handlePopupClose}  />
          </View>
        </View>
      </PopupDialog>
      <TouchableOpacity
            style={{
              backgroundColor: 'white',
              padding: 10,
              borderRadius: 10,
              borderColor: "#2FCBD8",
              borderWidth: 1,
              width: '100%',
              height: 50,
              marginTop: 20,
            }}
            onPress={() => setPopupVisible(true)}
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
    </View> */}








    </View>


        {/* twins */}

        {/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Modal
        isVisible={popupVisible}
        onBackdropPress={() => setPopupVisible(false)}
        onSwipeComplete={() => setPopupVisible(false)}
        swipeDirection={['down']}
        style={{ justifyContent: 'flex-end', margin: 0 }}
      >
        <View style={{ backgroundColor: 'white', padding: 20 }}>
          <Text>Hello World!</Text>

          <Button
            title="Close"
            onPress={() => setPopupVisible(false)}
          />

          <TouchableOpacity
            style={{ marginTop: 10 }}
            onPress={() => {
              setPopupVisible(false);
              navigation.navigate('OtherScreen');
            }}
          >
            <Text>Go to Other Screen</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <Button
        title="Open Popup"
        onPress={() => setPopupVisible(true)}
      />
    </View> */}









{/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableWithoutFeedback onPress={() => setPopupVisible(true)}>
        <View
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

          <PopupDialog
            visible={popupVisible}
            onTouchOutside={() => {
              setPopupVisible(false);
            }}
          >
            <View style={{ backgroundColor: 'white', padding: 20 }}>
              <Text>Hello World!</Text>

              <TouchableOpacity
                style={{ marginTop: 10 }}
                onPress={handleGoToNextScreen}
              >
                <Text>Go to Next Screen</Text>
              </TouchableOpacity>

              <Button
                title="Close"
                onPress={handlePopupClose}
              />
            </View>
          </PopupDialog>
        </View>
      </TouchableWithoutFeedback>
    </View> */}







{/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableWithoutFeedback onPress={() => setPopupVisible(true)}>
        <View
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

          <PopupDialog
            visible={popupVisible}
            onTouchOutside={() => {
              setPopupVisible(false);
            }}
          >
            <View style={{ backgroundColor: 'white', padding: 20 }}>
              <Text>Hello World!</Text>

              <TouchableOpacity
                style={{ marginTop: 10 }}
                onPress={handleGoToNextScreen}
              >
                <Text>Go to Next Screen</Text>
              </TouchableOpacity>

              <Button
                title="Close"
                onPress={handlePopupClose}
              />
            </View>
          </PopupDialog>
        </View>
      </TouchableWithoutFeedback>
    </View> */}






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









buttonPop: {
  backgroundColor: 'white',
  padding: 10,
  borderRadius: 5,
  height:50
  // width:300,
  // marginLeft:40

  
},
button2Pop: {
  backgroundColor: 'white',
  padding: 10,
  borderRadius: 5,
  height:50,
  // width:300,
  // marginLeft:40,
  // marginTop:20,
  borderWidth: 2,
  borderColor: "#2FCBD8",

  
},
buttonTextPop: {
  color: '#000',
  fontSize: 16,
  fontWeight: 'bold',
  textAlign: 'center',
},
button1Pop: {
  backgroundColor: '#2FCBD8',
  padding: 10,
  borderRadius: 5,
  borderColor:"white",
  borderWidth:2,
  height:50
  // width:300,
  // marginTop:20,
  // marginLeft:40

  
},
buttonText1Pop: {
  color: 'white',
  fontSize: 16,
  fontWeight: 'bold',
  textAlign: 'center'
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
  fontSize: 10,
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
  borderColor:'#2FCBD8',
  borderWidth:1
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


facilitytext: {
  fontSize: 20,
  fontWeight:'bold',
  marginLeft:10,
},


});
