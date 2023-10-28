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
        <Stack.Screen name="Home" component={LandingPage} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={Login}  options={{ headerShown: false }}/>
        <Stack.Screen name="Signup" component={Signup}  options={{ headerShown: false }}/>
        <Stack.Screen name="Order" component={Order} options={{ headerShown: false }} /> 
        <Stack.Screen name="Booking" component={Booking} options={{ headerShown: false }} /> 
        <Stack.Screen name="Main" component={Main}  options={{ headerShown: false }}/>
        {/* <Stack.Screen name="ResetEmailScreen" component={ResetEmailScreen}  /> */}
        {/* <Stack.Screen name="Pin-Screen" component={PinScreen}  /> */}
        <Stack.Screen name="UpdateProfil" component={UpdateProfil}  options={{ headerShown: false }}/>
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