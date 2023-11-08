import 'react-native-reanimated';
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import store from './app/store';
import { Provider } from "react-redux";

import LandingPage from './app/screens/landing-page/LandingPage';
import Login from './app/screens/login/Login'
import Signup from './app/screens/signup/Signup'
import Main from './app/screens/main-screen/MainScreen'
import ResetEmailScreen from './app/screens/reset-password/ResetPassword'
import PinScreen from './app/screens/reset-password-pin-screen/ResetPasswordScreenPin'
import UpdateProfil from './app/screens/update-profil/UpdateProfil'
import Profil from './app/screens/profil-page/ProfilPage'
import Order from './app/screens/order/Order'
import Booking from './app/screens/booking/Booking'
// import UrineAnalysis from './app/screens/urine-analysis/UrineAnalysis'
import UrineAnalysis from './app/screens/urine-analysis-bottom/UrineAnalysisBottom'
import Saliva from './app/screens/saliva/Saliva'
import SerumSodium from './app/screens/serum-sodium/SerumSodium'
import Specimen from './app/screens/specimen/Specimen'
import HomeNursing from './app/screens/home-nursing/HomeNursing'
import AlationFacility from './app/screens/alation-facility/AlationFacility'
import KibruFacility from './app/screens/kibru-facility/KibruFacility'
import NaolFacility from './app/screens/naol-facility/NaolFacility'
import YanetFacility from './app/screens/yanet-facility/YanetFacility'

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

// const TabNavigator = () => {
//   <Tab.Navigator>
//     <Tab.Screen name='Order' component={Order} />
//     <Tab.Screen name='Book' component={Order} />
//   </Tab.Navigator>
// }


const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer options={{ headerShown: false }}>
      <Stack.Navigator mode="modal" options={{ headerShown: false }}>
        {/* <Stack.Screen name="Home" component={LandingPage} options={{ headerShown: false }}/> */}
        {/* <Stack.Screen name="Login" component={Login}  options={{ headerShown: false }}/> */}
        {/* <Stack.Screen name="Signup" component={Signup}  options={{ headerShown: false }}/> */}
        {/* <Stack.Screen name="Order" component={Order} options={{ headerShown: false }} />  */}
        {/* <Stack.Screen name="Booking" component={Booking} options={{ headerShown: false }} />  */}
        <Stack.Screen name="Main" component={Main}  options={{ headerShown: false }}/>
        <Stack.Screen name="UrineAnalysis" component={UrineAnalysis}  options={{ headerShown: false }}/>
        <Stack.Screen name="Saliva" component={Saliva}  options={{ headerShown: false }}/>
        <Stack.Screen name="SerumSodium" component={SerumSodium}  options={{ headerShown: false }}/>
        <Stack.Screen name="Specimen" component={Specimen}  options={{ headerShown: false }}/>
        <Stack.Screen name="HomeNursing" component={HomeNursing}  options={{ headerShown: false }}/>
        <Stack.Screen name="AlationFacility" component={AlationFacility}  options={{ headerShown: false }}/>
        <Stack.Screen name="KibruFacility" component={KibruFacility}  options={{ headerShown: false }}/>
        <Stack.Screen name="NaolFacility" component={NaolFacility}  options={{ headerShown: false }}/>
        <Stack.Screen name="YanetFacility" component={YanetFacility}  options={{ headerShown: false }}/>
        {/* <Stack.Screen name="ResetEmailScreen" component={ResetEmailScreen}  /> */}
        {/* <Stack.Screen name="Pin-Screen" component={PinScreen}  /> */}
        {/* <Stack.Screen name="UpdateProfil" component={UpdateProfil}  options={{ headerShown: false }}/> */}
        {/* <Stack.Screen name="Profil" component={Profil}  /> */}
      </Stack.Navigator>
     </NavigationContainer>
     </Provider>
  );
};


// const OrderStack = () => {
//   return (
//     // <Provider store={store}>
//     // <NavigationContainer>
//       <Stack.Navigator mode="modal" options={{ headerShown: false }}>
//         {/* <Stack.Screen name="Home" component={LandingPage} /> */}
//         {/* <Stack.Screen name="Login" component={Login}  /> */}
//         {/* <Stack.Screen name="Signup" component={Signup}  /> */}
//         <Stack.Screen name="Order" component={Order} options={{ headerShown: false }} /> 
//         <Stack.Screen name="Main" component={Main}  options={{ headerShown: false }}/>
//         {/* <Stack.Screen name="ResetEmailScreen" component={ResetEmailScreen}  /> */}
//         {/* <Stack.Screen name="Pin-Screen" component={PinScreen}  /> */}
//         <Stack.Screen name="UpdateProfil" component={UpdateProfil}  />
//         {/* <Stack.Screen name="Profil" component={Profil}  /> */}
//       </Stack.Navigator>
//     // </NavigationContainer>
//     // </Provider>
//   );
// };


// const BookingStack = () => {
//   return (
//     // <Provider store={store}>
//     // <NavigationContainer>
//       <Stack.Navigator mode="modal" options={{ headerShown: false }}>
//         {/* <Stack.Screen name="Home" component={LandingPage} /> */}
//         {/* <Stack.Screen name="Login" component={Login}  /> */}
//         {/* <Stack.Screen name="Signup" component={Signup}  /> */}
//         <Stack.Screen name="Main" component={Main}  options={{ headerShown: false }}/>
//         {/* <Stack.Screen name="ResetEmailScreen" component={ResetEmailScreen}  /> */}
//         {/* <Stack.Screen name="Pin-Screen" component={PinScreen}  /> */}
//         {/* <Stack.Screen name="UpdateProfil" component={UpdateProfil}  /> */}
//         <Stack.Screen name="Order" component={Order} options={{ headerShown: false }} /> 
//         {/* <Stack.Screen name="Profil" component={Profil}  /> */}
//       </Stack.Navigator>
//     // </NavigationContainer>
//     // </Provider>
//   );
// };




// const TabNavigator = () => {
//   return (
//       <Tab.Navigator options={{ headerShown: false }}>
//       {/* <Tab.Screen name="MainStack" component={MainStack} options={{ headerShown: false }}/> */}
//         <Tab.Screen name="Home" component={LandingPage} />
//         <Tab.Screen name="Login" component={Login}  />
//         <Stack.Screen name="Signup" component={Signup}  />
//         <Tab.Screen name="OrderStack" component={OrderStack}  options={{ headerShown: false, tabBarIcon:()=><MaterialCommunityIcons name="test-tube" color="#2FCBD8" size={25}/> }}/>
//         {/* <Stack.Screen name="ResetEmailScreen" component={ResetEmailScreen}  /> */}
//         {/* <Stack.Screen name="Pin-Screen" component={PinScreen}  /> */}
//         {/* <Stack.Screen name="UpdateProfil" component={UpdateProfil}  /> */}
//         {/* <Stack.Screen name="Profil" component={Profil}  /> */}
//         <Tab.Screen name="BookingStack" component={BookingStack} options={{ headerShown: false }} /> 
//       </Tab.Navigator>
//   );
// };



// const App = () => {
//   return (
//     <Provider store={store}>
//     <NavigationContainer>
//     <TabNavigator />
//          {/* <Stack.Navigator mode="modal" options={{ headerShown: false }}> */}
//          {/* <Stack.Screen name="Home" component={LandingPage} /> */}
//          {/* <Stack.Screen name="Login" component={Login}  /> */}
//          {/* <Stack.Screen name="Signup" component={Signup}  /> */}
//          {/* <Stack.Screen name="Main" component={Main}  options={{ headerShown: false }}/> */}
//          {/* <Stack.Screen name="Booking" component={Booking}  options={{ headerShown: false }}/> */}
//          {/* <Stack.Screen name="ResetEmailScreen" component={ResetEmailScreen}  /> */}
//          {/* <Stack.Screen name="Pin-Screen" component={PinScreen}  /> */}
//          {/* <Stack.Screen name="UpdateProfil" component={UpdateProfil}  /> */}
//          {/* <Stack.Screen name="Order" component={Order} options={{ headerShown: false }} />  */}
//          {/* <Stack.Screen name="Profil" component={Profil}  /> */}
//        {/* </Stack.Navigator> */}
//     </NavigationContainer>
//     </Provider>
//   );
// };


export default App;


// export default () => {
//   return (
//     <Provider store={store}>
//       <App />
//     </Provider>
//   );
// };