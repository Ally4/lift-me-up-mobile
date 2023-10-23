import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

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

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={LandingPage} options={{ headerShown: false }}           
        // options={{title: 'Welcome'}}           
        />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
         <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
        <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
        <Stack.Screen name="ResetEmailScreen" component={ResetEmailScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Pin-Screen" component={PinScreen} options={{ headerShown: false }} />
        <Stack.Screen name="UpdateProfil" component={UpdateProfil} options={{ headerShown: false }} />
        <Stack.Screen name="Profil" component={Profil} options={{ headerShown: false }} />
        <Stack.Screen name="Order" component={Order} options={{ headerShown: false }} /> 
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
};

export default App;


// export default () => {
//   return (
//     <Provider store={store}>
//       <App />
//     </Provider>
//   );
// };