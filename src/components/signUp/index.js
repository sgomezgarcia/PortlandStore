import React, { useState } from 'react';
import { View, Text } from 'react-native';
import {
  Button, Icon, Item, Input
} from 'native-base';
import Toast from 'react-native-simple-toast';

import styles from './styles';

const SignUp = ({ handleBackToLogin, signUp, navigation }) => {
  const [ newUser, setNewUser ] = useState({});
  const [ error, setError ] = useState(false);

  const formValidation = () => {
    if (newUser && newUser.email && newUser.password && newUser.confirmPassword && (newUser.password === newUser.confirmPassword)) {
      signUp(newUser)
      .then(() => {
        Toast.show('User created and signed in', Toast.LONG);
        navigation.navigate('Home');
      })
      .catch(() => setError(true));
    } else {
      if (!newUser.email) {
        Toast.show('Missing email', Toast.LONG);
      }
      if (!newUser.password) {
        Toast.show('Missing password', Toast.LONG);
      }
      if (6 > newUser.password.length) {
        Toast.show('6 characters minimum', Toast.LONG);
      }
      if (newUser.password !== newUser.confirmPassword) {
        Toast.show('Passwords do not match', Toast.LONG);
      }
    }
  };

  return (
    <View style={styles.menu}>
      <View style={styles.menuLine2}>
        <Button style={styles.iconButton} onPress={handleBackToLogin} title="">
          <Icon
            ios="ios-arrow-round-back"
            android="ios-arrow-round-back"
            style={styles.closeIcon}
          />
        </Button>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.shoppingTitle}>create account</Text>
        <Text style={styles.productNumber}>portland</Text>
      </View>
      <View style={styles.items}>
        <Item>
          <Input
            placeholder="Email"
            style={styles.input}
            onChange={(e) => setNewUser({ ...newUser, email: e.nativeEvent.text })}
            value={newUser?.email}
          />
        </Item>
        <Item>
          <Input
            placeholder="Password (6 characters minimum)"
            secureTextEntry
            style={styles.input}
            onChange={(e) => setNewUser({ ...newUser, password: e.nativeEvent.text })}
            value={newUser?.password}
          />
        </Item>
        <Item>
          <Input
            placeholder="Confirm Password"
            secureTextEntry
            style={styles.input}
            onChange={(e) => setNewUser({ ...newUser, confirmPassword: e.nativeEvent.text })}
            value={newUser?.confirmPassword}
          />
        </Item>
        {
            error && (
            <View style={styles.errorContainer}>
              <Text style={styles.errorText}>Sign up error. Try again</Text>
            </View>
          )}
        <Button style={styles.button} onPress={formValidation}>
          <Text style={styles.text}>sign up</Text>
        </Button>
      </View>
    </View>
  );
};
export default SignUp;
