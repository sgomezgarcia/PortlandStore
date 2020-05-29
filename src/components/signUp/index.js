import React, { useState } from 'react';
import { View, Text } from 'react-native';
import {
  Button, Icon, Item, Input
} from 'native-base';
import styles from './styles';

const SignUp = ({ handleBackToLogin }) => {
  const [ newUser, setNewUser ] = useState({});

  const formValidation = () => {
    if (!newUser.email) {
      console.warn('el puto email');
    }
    if (!newUser.password) {
      console.warn('la pass bro');
    }
    if (!newUser.confirmPassword) {
      console.warn('otra vez');
    }
    if (newUser.password !== newUser.confirmPassword) {
      console.warn('no iguales');
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
            placeholder="Password"
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
        <Button style={styles.button} onPress={formValidation}>
          <Text style={styles.text}>sign up</Text>
        </Button>
      </View>
    </View>
  );
};
export default SignUp;
