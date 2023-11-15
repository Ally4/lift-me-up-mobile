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


export default function SerumPotassiumTest() {
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




const handlePopupClose = () => {
  setPopupVisible(false);
  setTimeout(() => {
    navigation.navigate('SerumPotassiumTest');
  }, 300);
};

const handleGoToNextScreenAllation = () => {
  setPopupVisible(false);
  navigation.navigate('OrderAllationSerumPotassium');
};

const handleGoToNextScreenKibru = () => {
  setPopupVisible(false);
  navigation.navigate('OrderKibruSerumPotassium');
};

const handleGoToNextScreenNaol = () => {
  setPopupVisible(false);
  navigation.navigate('OrderNaolSerumPotassium');
};

const handleGoToNextScreenYanet = () => {
  setPopupVisible(false);
  navigation.navigate('OrderYanetSerumPotassium');
};







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
        <Text style={styles.lab}>Lab test</Text>
        <Text style={styles.test}>Serum Potassium</Text>
        <Text style={styles.testText}>You can run your test in any of these facilities</Text>
        <View style={styles.main}>







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
            onPress={handleGoToNextScreenAllation}
          >
              <Text >Allation Hospital</Text>          
        <Text style={styles.testText}>7545 Bedfort Avenue Omaha NE 68134</Text>
        <Text>Price:50$</Text>
        <Text>Turnaround Time 1hour</Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          </TouchableOpacity>
        <View>
          <Button   title="Order" style={{marginTop:20}} onPress={handleGoToNextScreenAllation} /> 
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
            onPress={handleGoToNextScreenKibru}
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
          <Button   title="Order" style={{marginTop:20}} onPress={handleGoToNextScreenKibru} /> 
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
            onPress={handleGoToNextScreenNaol}
          >
              <Text >Naol Hospital</Text>          
        <Text style={styles.testText}>7545 Bedfort Avenue Omaha NE 68134</Text>
        <Text>Price:50$</Text>
        <Text>Turnaround Time 1hour</Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          </TouchableOpacity>
        <View>
          <Button   title="Order" style={{marginTop:20}} onPress={handleGoToNextScreenNaol} /> 
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
            onPress={handleGoToNextScreenYanet}
          >
              <Text >Yanet Hospital</Text>          
        <Text style={styles.testText}>7545 Bedfort Avenue Omaha NE 68134</Text>
        <Text>Price:50$</Text>
        <Text>Turnaround Time 1hour</Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          </TouchableOpacity>
        <View>
          <Button   title="Order" style={{marginTop:20}} onPress={handleGoToNextScreenYanet} /> 
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
