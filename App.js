import React from 'react';
import { Provider } from 'react-redux';

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import 'react-native-gesture-handler';

import store from './store';
import Footer from './src/components/footer';
// Screens
import LoginScreen from './src/containers/login';
import HomeScreen from './src/screens/HomeScreen';
import Header from './src/components/header';

const Stack = createStackNavigator();

const App = () => {
  const navigation = useNavigation();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Header />
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
        <Footer navigation={navigation} />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
