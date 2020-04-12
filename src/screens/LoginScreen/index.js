import React, { useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';

import { View, Text, StatusBar } from 'react-native';
import { Button, Item, Input } from 'native-base';

import styles from './styles';
import { COLORS } from '../../utils/constants';

import Screen from '../../components/base/screen';

const LoginScreen = ({ login, navigation }) => {
  const [ user, setUser ] = useState();

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged((loggedUser) => {
      if (loggedUser) {
        navigation.navigate('HomeScreen');
      }
    });

    return subscriber; // unsubscribe on unmount
  }, []);

  return (
    <Screen navigation={navigation}>
      <View style={styles.main}>
        <StatusBar translucent backgroundColor={COLORS.black} />
        <Text style={styles.title}>Portland</Text>
        <Item>
          <Input
            placeholder="Email"
            onChange={(e) => {
              setUser({ ...user, email: e.nativeEvent.text });
            }}
            value={user?.email}
            style={styles.input}
          />
        </Item>
        <Item>
          <Input
            placeholder="Password"
            onChange={(e) => setUser({ ...user, password: e.nativeEvent.text })}
            value={user?.password}
            secureTextEntry
            style={styles.input}
          />
        </Item>
        <Button
          disabled={!user?.email || !user?.password}
          style={styles.button}
          onPress={() => login(user)}
        >
          <Text style={styles.text}>Login</Text>
        </Button>
      </View>
    </Screen>
  );
};

export default LoginScreen;
