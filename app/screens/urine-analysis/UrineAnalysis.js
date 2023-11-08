// import 'react-native-reanimated';
// import 'react-native-gesture-handler';

// import React, { useEffect, useState, useRef } from 'react';
// import { useNavigation } from '@react-navigation/native';
// import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList, ScrollView, Animated } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import BottomSheet from '../bottomSheet/BottomSheet';
// import { BottomSheetFlatList } from '@gorhom/bottom-sheet';

// export default function UrineAnalysis() {
//   const navigation = useNavigation();
//   const [name, setName] = useState('');
//   const [picture, setPicture] = useState('');



//   const bottomSheetRef = useRef(null);
//   const snapPoints = [0, '50%'];




//   const openBottomSheet = () => {
//     if (bottomSheetRef.current) {
//       bottomSheetRef.current.snapTo(1);
//     }
//   };




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



//   // // Bottom Sheet
//   // const bottomSheetRef = useRef(null);
//   // const snapPoints = [0, '50%']; // Define the snapping points for the bottom sheet

//   // const openBottomSheet = () => {
//   //   if (bottomSheetRef.current) {
//   //     bottomSheetRef.current.snapTo(1); // Open the bottom sheet
//   //   }
//   // };




//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView>
//         <View style={{ backgroundColor: "#2FCBD8", width: 250, height: 250, borderRadius: 100, top: -140, left: -140 }}></View>
//         <View>
//           <TouchableOpacity onPress={() => navigation.goBack()}>
//             <Image source={require("../../assets/photos/left-arrow.png")} style={{ marginTop: -220, marginLeft: 10, width: 40, height: 40 }} />
//           </TouchableOpacity>
//         </View>
//         <View style={styles.labtest}>
//         <Text style={styles.lab}>Lab test</Text>
//         <Text style={styles.test}>Urine Analysis</Text>
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
//         <TouchableOpacity onPress={openBottomSheet}>
//           <Text>Open Bottom Sheet</Text>
//         </TouchableOpacity>
//       </ScrollView>



//       <BottomSheetFlatList
//         ref={bottomSheetRef}
//         data={data}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <TouchableOpacity
//             style={styles.bottomSheetItem}
//             onPress={() => {
//               // Handle item selection or navigation
//               // You can use navigation.navigate here
//             }}
//           >
//             <Text style={styles.bottomSheetItemText}>{item.title}</Text>
//           </TouchableOpacity>
//         )}
//         snapPoints={snapPoints}
//       />


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
//   height: 2,
//   width: '30%',
//   backgroundColor: '#808080',
//   marginTop:20,
//   // position:'center'
//   marginVertical:10,
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
// },




//   // New styles for the bottom sheet
//   bottomSheetItem: {
//     padding: 16,
//     backgroundColor: 'white',
//     borderBottomWidth: 1,
//     borderBottomColor: '#e0e0e0',
//   },
//   bottomSheetItemText: {
//     fontSize: 18,
//   },



// });







// 




// import 'react-native-reanimated';
// import 'react-native-gesture-handler';

// import React, { useEffect, useState, useRef } from 'react';
// import { useNavigation } from '@react-navigation/native';
// import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import BottomSheet from '../bottomSheet/BottomSheet';
// import { BottomSheetFlatList } from '@gorhom/bottom-sheet';

// export default function UrineAnalysis() {
//   const navigation = useNavigation();
//   const [name, setName] = useState('');
//   const [picture, setPicture] = useState('');

//   const bottomSheetRef = useRef(null);
//   const snapPoints = [0, '50%'];

//   const openBottomSheet = () => {
//     if (bottomSheetRef.current) {
//       bottomSheetRef.current.snapTo(1);
//     }
//   };

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
//     getPic();
//   }, []);

//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView>
//         {/* Rest of your UI components */}
//         <TouchableOpacity onPress={openBottomSheet}>
//           <Text>Open Bottom Sheet</Text>
//         </TouchableOpacity>
//       </ScrollView>

//       <BottomSheet
//         ref={bottomSheetRef}
//         index={0}
//         snapPoints={snapPoints}
//       >
//         {/* Content inside the BottomSheet */}
//         <BottomSheetFlatList
//           data={data}
//           keyExtractor={(item) => item.id}
//           renderItem={({ item }) => (
//             <TouchableOpacity
//               style={styles.bottomSheetItem}
//               onPress={() => {
//                 // Handle item selection or navigation
//                 // You can use navigation.navigate here
//               }}
//             >
//               <Text style={styles.bottomSheetItemText}>{item.title}</Text>
//             </TouchableOpacity>
//           )}
//         />
//       </BottomSheet>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   // Your styles here
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
//   height: 2,
//   width: '30%',
//   backgroundColor: '#808080',
//   marginTop:20,
//   // position:'center'
//   marginVertical:10,
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
// },




//   // New styles for the bottom sheet
//   bottomSheetItem: {
//     padding: 16,
//     backgroundColor: 'white',
//     borderBottomWidth: 1,
//     borderBottomColor: '#e0e0e0',
//   },
//   bottomSheetItemText: {
//     fontSize: 18,
//   },



// });




import React, { useEffect, useState, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BottomSheet from '@gorhom/bottom-sheet';
import { BottomSheetFlatList } from '@gorhom/bottom-sheet';

export default function UrineAnalysis() {
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
  };

  const getPic = async () => {
    try {
      const proPicture = await AsyncStorage.getItem('profilPicture');
      setPicture(proPicture);
    } catch (error) {
      // Handle errors
    }
  };

  useEffect(() => {
    getData();
    getPic();
  }, []);

  const bottomSheetRef = useRef(null);
  const snapPoints = ['50%'];
  const enablePanDownToClose = true;

  const openBottomSheet = () => {
    if (bottomSheetRef.current) {
      bottomSheetRef.current.expand(); // Change to desired snap point
    }
  };

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
          <Text style={styles.test}>Serum Sodium</Text>
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
              onPress={openBottomSheet} // Open the bottom sheet
            >
              <View style={styles.hospital}>
                <View style={styles.hospitalname}>
                  <View><Text>Allation Hospital</Text></View>
                  <View style={styles.correct}>
                    <View><Image source={require("../../assets/photos/correct.png")} style={{ width: 15, height: 15, }}></Image></View>
                    <View><Image></Image></View>
                  </View>
                </View>
                <View><Image source={require("../../assets/photos/new-moon.png")} style={{ width: 35, height: 35, }} /></View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        enablePanDownToClose={enablePanDownToClose}
      >
        {/* Content inside the BottomSheet */}
        <BottomSheetFlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.bottomSheetItem}
              onPress={() => {
                // Handle item selection or navigation
                // You can use navigation.navigate here
              }}
            >
              <Text style={styles.bottomSheetItemText}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
      </BottomSheet>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  // Rest of your styles

    
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
});

