import React from 'react';
import { Provider } from 'react-redux';

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import 'react-native-gesture-handler';

import store from './store';

// Screens
import LoginScreen from './src/containers/login';
import HomeScreen from './src/screens/HomeScreen';

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
  </Provider>
);

export default App;
