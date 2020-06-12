import React, { useEffect } from 'react';
import Animation from 'lottie-react-native';
import { View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import styles from './styles';

// Screens
import LoginScreen from '../../containers/login';
import HomeScreen from '../../containers/homeScreen';
import MyOrdersScreen from '../../containers/myOrders';
import ProductsScreen from '../../containers/productsScreen';
import UserProfileScreen from '../../containers/userProfile';
import LoadingLottie from '../../assets/lotties/loading2.json';

const Stack = createStackNavigator();

const Main = ({
  loading,
  initApp,
}) => {
  useEffect(() => {
    initApp();
  }, []);

  if (loading) {
    return (
      <View style={styles.lottie}>
        <Text style={styles.portland}>PORTLAND</Text>
        <Animation
          autoPlay
          loop
          source={LoadingLottie}
        />
      </View>
    );
  }

  return (
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
          name="Products"
          component={ProductsScreen}
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
        <Stack.Screen
          name="MyOrders"
          component={MyOrdersScreen}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
