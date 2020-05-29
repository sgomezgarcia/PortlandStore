import React, { useState } from 'react';

import { View, Text, StatusBar } from 'react-native';
import {
  Button, Item, Input, Icon
} from 'native-base';

import styles from './sytles';
import { COLORS } from '../../utils/constants';

import Screen from '../base/screen';

const Login = ({ login, navigation, handleSignUp }) => {
  const [ user, setUser ] = useState();

  const handleLogin = () => {
    login(user)
      .then(() => {
        navigation.navigate('Home');
        setUser({});
      });
  };

  return (
    <Screen navigation={navigation}>
      <View style={styles.menu}>
        <View style={styles.menuLine2}>
          <Button style={styles.iconButton} onPress={() => navigation.navigate('Home')} title="hola">
            <Icon
              ios="ios-close"
              android="ios-close"
              style={styles.closeIcon}
            />
          </Button>
        </View>
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
            onPress={() => handleLogin()}
          >
            <Text style={styles.text}>Login</Text>
          </Button>
          <Button style={styles.signButton} onPress={handleSignUp}>
            <Text style={styles.signText}>Sign Up</Text>
          </Button>
        </View>
      </View>
    </Screen>
  );
};

export default Login;
