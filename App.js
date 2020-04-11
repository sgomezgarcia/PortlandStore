import React from 'react';
import { Provider } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import 'react-native-gesture-handler';
import { View, Text } from 'react-native';

import store from './store';
import Footer from './src/components/footer';
// Screens
import LoginScreen from './src/containers/login';
import HomeScreen from './src/screens/HomeScreen';
import { COLORS } from './src/utils/constants';

const Stack = createStackNavigator();

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
   <Footer/>
  </Provider>
);

export default App;
