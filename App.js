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
import OrderOther from './app/screens/order-other/OrderOther'
import Booking from './app/screens/booking/Booking'
// import UrineAnalysis from './app/screens/urine-analysis/UrineAnalysis'
import UrineAnalysis from './app/screens/tests/UrineTest'
import Saliva from './app/screens/saliva/Saliva'
import SerumSodium from './app/screens/serum-sodium/SerumSodium'
import Specimen from './app/screens/specimen/Specimen'
import HomeNursing from './app/screens/home-nursing/HomeNursing'
import AlationFacility from './app/screens/alation-facility/AlationFacility'
import KibruFacility from './app/screens/kibru-facility/KibruFacility'
import NaolFacility from './app/screens/naol-facility/NaolFacility'
import YanetFacility from './app/screens/yanet-facility/YanetFacility'
import Result from './app/screens/result/Result'
import LabTest from './app/screens/lab-test/LabTest'



import OrderAllationAmylase from './app/screens/alation-facility/OrderAllationAmylase'
import OrderAllationcbc from './app/screens/alation-facility/OrderAllationcbc'
import OrderAllationLipase from './app/screens/alation-facility/OrderAllationLipase'
import OrderAllationSerumCreatine from './app/screens/alation-facility/OrderAllationSerumCreatine'
import OrderAllationSerumPotassium from './app/screens/alation-facility/OrderAllationSerumPotassium'
import OrderAllationSerumSodium from './app/screens/alation-facility/OrderAllationSerumSodium'
import OrderAllationUrine from './app/screens/alation-facility/OrderAllationUrine'

import OrderKibruAmylase from './app/screens/kibru-facility/OrderKibruAmylase'
import OrderKibrucbc from './app/screens/kibru-facility/OrderKibrucbc'
import OrderKibruLipase from './app/screens/kibru-facility/OrderKibruLipase'
import OrderKibruSerumCreatine from './app/screens/kibru-facility/OrderKibruSerumCreatine'
import OrderKibruSerumPotassium from './app/screens/kibru-facility/OrderKibruSerumPotassium'
import OrderKibruSerumSodium from './app/screens/kibru-facility/OrderKibruSerumSodium'
import OrderKibruUrine from './app/screens/kibru-facility/OrderKibruUrine'

import OrderNaolAmylase from './app/screens/naol-facility/OrderNaolAmylase'
import OrderNaolcbc from './app/screens/naol-facility/OrderNaolcbc'
import OrderNaolLipase from './app/screens/naol-facility/OrderNaolLipase'
import OrderNaolSerumCreatine from './app/screens/naol-facility/OrderNaolSerumCreatine'
import OrderNaolSerumPotassium from './app/screens/naol-facility/OrderNaolSerumPotassium'
import OrderNaolSerumSodium from './app/screens/naol-facility/OrderNaolSerumSodium'
import OrderNaolUrine from './app/screens/naol-facility/OrderNaolUrine'

import OrderYanetAmylase from './app/screens/yanet-facility/OrderYanetAmylase'
import OrderYanetcbc from './app/screens/yanet-facility/OrderYanetcbc'
import OrderYanetLipase from './app/screens/yanet-facility/OrderYanetLipase'
import OrderYanetSerumCreatine from './app/screens/yanet-facility/OrderYanetSerumCreatine'
import OrderYanetSerumPotassium from './app/screens/yanet-facility/OrderYanetSerumPotassium'
import OrderYanetSerumSodium from './app/screens/yanet-facility/OrderYanetSerumSodium'
import OrderYanetUrine from './app/screens/yanet-facility/OrderYanetUrine'

import OrderOtherAmylase from './app/screens/order-other/OrderOtherAmylase'
import OrderOthercbc from './app/screens/order-other/OrderOthercbc'
import OrderOtherLipase from './app/screens/order-other/OrderOtherLipase'
import OrderOtherSerumCreatine from './app/screens/order-other/OrderOtherSerumCreatine'
import OrderOtherSerumPotassium from './app/screens/order-other/OrderOtherSerumPotassium'
import OrderOtherSerumSodium from './app/screens/order-other/OrderOtherSerumSodium'
import OrderOtherUrine from './app/screens/order-other/OrderOtherUrine'

import TestAmylase from './app/screens/tests/AlymaseTest'
import Testcbc from './app/screens/tests/CbcTest'
import TestLipase from './app/screens/tests/LipaseTest'
import TestSerumCreatine from './app/screens/tests/SerumCreatineTest'
import TestSerumPotassium from './app/screens/tests/SerumPotassiumTest'
import TestSerumSodium from './app/screens/tests/SerumSodiumTest'
import TestUrine from './app/screens/tests/UrineTest'


import Results from './app/screens/result/Result'
import ViewResults from './app/screens/viewResult/ViewResult'




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
        {/* This */}
        {/* <Stack.Screen name="Home" component={LandingPage} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={Login}  options={{ headerShown: false }}/>
        <Stack.Screen name="Signup" component={Signup}  options={{ headerShown: false }}/> */}


        {/* <Stack.Screen name="Order" component={Order} options={{ headerShown: false }} />  */}
        {/* <Stack.Screen name="OrderOther" component={OrderOther} options={{ headerShown: false }} />  */}
        {/* <Stack.Screen name="Booking" component={Booking} options={{ headerShown: false }} />  */}

        {/* This */}
        {/* <Stack.Screen name="Main" component={Main}  options={{ headerShown: false }}/> */}


        {/* <Stack.Screen name="TestAmylase" component={TestAmylase}  options={{ headerShown: false }}/>
        <Stack.Screen name="Testcbc" component={Testcbc}  options={{ headerShown: false }}/>
        <Stack.Screen name="TestLipase" component={TestLipase}  options={{ headerShown: false }}/>
        <Stack.Screen name="TestSerumCreatine" component={TestSerumCreatine}  options={{ headerShown: false }}/>
        <Stack.Screen name="TestSerumPotassium" component={TestSerumPotassium}  options={{ headerShown: false }}/>
        <Stack.Screen name="TestSerumSodium" component={TestSerumSodium}  options={{ headerShown: false }}/>
        <Stack.Screen name="UrineAnalysis" component={UrineAnalysis}  options={{ headerShown: false }}/> */}


        {/* <Stack.Screen name="Saliva" component={Saliva}  options={{ headerShown: false }}/> */}
        {/* <Stack.Screen name="SerumSodium" component={SerumSodium}  options={{ headerShown: false }}/> */}
        {/* <Stack.Screen name="Specimen" component={Specimen}  options={{ headerShown: false }}/> */}
        {/* <Stack.Screen name="HomeNursing" component={HomeNursing}  options={{ headerShown: false }}/> */}

        {/* This */}
        {/* <Stack.Screen name="AlationFacility" component={AlationFacility}  options={{ headerShown: false }}/>
        <Stack.Screen name="KibruFacility" component={KibruFacility}  options={{ headerShown: false }}/>
        <Stack.Screen name="NaolFacility" component={NaolFacility}  options={{ headerShown: false }}/>
        <Stack.Screen name="YanetFacility" component={YanetFacility}  options={{ headerShown: false }}/> */}


        {/* <Stack.Screen name="ResetEmailScreen" component={ResetEmailScreen}  /> */}
        {/* <Stack.Screen name="Pin-Screen" component={PinScreen}  /> */}

        {/* This */}
        {/* <Stack.Screen name="UpdateProfil" component={UpdateProfil}  options={{ headerShown: false }}/>
        <Stack.Screen name="Profil" component={Profil}  options={{ headerShown: false }}/>
        <Stack.Screen name="Result" component={Result}  options={{ headerShown: false }}/> */}


        {/* <Stack.Screen name="LabTest" component={LabTest}  options={{ headerShown: false }}/> */}

        {/* <Stack.Screen name="OrderAllationAmylase" component={OrderAllationAmylase}  options={{ headerShown: false }}/>
        <Stack.Screen name="OrderAllationcbc" component={OrderAllationcbc}  options={{ headerShown: false }}/>
        <Stack.Screen name="OrderAllationLipase" component={OrderAllationLipase}  options={{ headerShown: false }}/>
        <Stack.Screen name="OrderAllationSerumCreatine" component={OrderAllationSerumCreatine}  options={{ headerShown: false }}/>
        <Stack.Screen name="OrderAllationSerumPotassium" component={OrderAllationSerumPotassium}  options={{ headerShown: false }}/>
        <Stack.Screen name="OrderAllationSerumSodium" component={OrderAllationSerumSodium}  options={{ headerShown: false }}/>
        <Stack.Screen name="OrderAllationUrine" component={OrderAllationUrine}  options={{ headerShown: false }}/>

        <Stack.Screen name="OrderKibruAmylase" component={OrderKibruAmylase}  options={{ headerShown: false }}/>
        <Stack.Screen name="OrderKibrucbc" component={OrderKibrucbc}  options={{ headerShown: false }}/>
        <Stack.Screen name="OrderKibruLipase" component={OrderKibruLipase}  options={{ headerShown: false }}/>
        <Stack.Screen name="OrderKibruSerumCreatine" component={OrderKibruSerumCreatine}  options={{ headerShown: false }}/>
        <Stack.Screen name="OrderKibruSerumPotassium" component={OrderKibruSerumPotassium}  options={{ headerShown: false }}/>
        <Stack.Screen name="OrderKibruSerumSodium" component={OrderKibruSerumSodium}  options={{ headerShown: false }}/>
        <Stack.Screen name="OrderKibruUrine" component={OrderKibruUrine}  options={{ headerShown: false }}/>

        <Stack.Screen name="OrderNaolAmylase" component={OrderNaolAmylase}  options={{ headerShown: false }}/>
        <Stack.Screen name="OrderNaolcbc" component={OrderNaolcbc}  options={{ headerShown: false }}/>
        <Stack.Screen name="OrderNaolLipase" component={OrderNaolLipase}  options={{ headerShown: false }}/>
        <Stack.Screen name="OrderNaolSerumCreatine" component={OrderNaolSerumCreatine}  options={{ headerShown: false }}/>
        <Stack.Screen name="OrderNaolSerumPotassium" component={OrderNaolSerumPotassium}  options={{ headerShown: false }}/>
        <Stack.Screen name="OrderNaolSerumSodium" component={OrderNaolSerumSodium}  options={{ headerShown: false }}/>
        <Stack.Screen name="OrderNaolUrine" component={OrderNaolUrine}  options={{ headerShown: false }}/>

        <Stack.Screen name="OrderYanetAmylase" component={OrderYanetAmylase}  options={{ headerShown: false }}/>
        <Stack.Screen name="OrderYanetcbc" component={OrderYanetcbc}  options={{ headerShown: false }}/>
        <Stack.Screen name="OrderYanetLipase" component={OrderYanetLipase}  options={{ headerShown: false }}/>
        <Stack.Screen name="OrderYanetSerumCreatine" component={OrderYanetSerumCreatine}  options={{ headerShown: false }}/>
        <Stack.Screen name="OrderYanetSerumPotassium" component={OrderYanetSerumPotassium}  options={{ headerShown: false }}/>
        <Stack.Screen name="OrderYanetSerumSodium" component={OrderYanetSerumSodium}  options={{ headerShown: false }}/>
        <Stack.Screen name="OrderYanetUrine" component={OrderYanetUrine}  options={{ headerShown: false }}/>

        <Stack.Screen name="OrderOtherAmylase" component={OrderOtherAmylase}  options={{ headerShown: false }}/>
        <Stack.Screen name="OrderOthercbc" component={OrderOthercbc}  options={{ headerShown: false }}/>
        <Stack.Screen name="OrderOtherLipase" component={OrderOtherLipase}  options={{ headerShown: false }}/>
        <Stack.Screen name="OrderOtherSerumCreatine" component={OrderOtherSerumCreatine}  options={{ headerShown: false }}/>
        <Stack.Screen name="OrderOtherSerumPotassium" component={OrderOtherSerumPotassium}  options={{ headerShown: false }}/>
        <Stack.Screen name="OrderOtherSerumSodium" component={OrderOtherSerumSodium}  options={{ headerShown: false }}/>
        <Stack.Screen name="OrderOtherUrine" component={OrderOtherUrine}  options={{ headerShown: false }}/> */}


        <Stack.Screen name="Results" component={Results}  options={{ headerShown: false }}/>


        <Stack.Screen name="ViewResults" component={ViewResults}  options={{ headerShown: false }}/>


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