import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import { store } from "./app/redux/store/Store";
// import { Provider } from "react-redux";

import LandingPage from './app/screens/landing-page/LandingPage';
import Login from './app/screens/login/Login'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={LandingPage}
          options={{ headerShown: false }}
          // options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



// export default () => {
//   return (
//     <Provider store={store}>
//       <App />
//     </Provider>
//   );
// };