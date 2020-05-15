import React, { useEffect } from 'react';
import auth from '@react-native-firebase/auth';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import 'react-native-gesture-handler';

// Screens
import LoginScreen from '../../containers/login';
import HomeScreen from '../HomeScreen';
import ProductsScreen from '../../containers/productsScreen';
import UserProfileScreen from '../../containers/userProfile';

const Stack = createStackNavigator();

const Main = ({ setUser }) => {
    useEffect((user) => {
        const subscriber = auth().onAuthStateChanged((loggedUser) => {
            if (loggedUser) {
                setUser(user);
            }
        });

        return subscriber; // unsubscribe on unmount
    }, []);

    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Products"
            component={ProductsScreen}
            options={{
                headerShown: false
            }}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
                headerShown: false
            }}
          />
          <Stack.Screen
            name="UserProfile"
            component={UserProfileScreen}
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
    );
};

export default Main;
