import React, { useState } from 'react';
import { Icon, Button } from 'native-base';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import OrderItem from '../orderItem';
import styles from './styles';

const SuccessLottie = () => (
  <View style={styles.menu}>
    <View style={styles.menuLine2}>
      <Button style={styles.iconButton} title="hola">
        <Icon
          ios="ios-close"
          android="ios-close"
          style={styles.closeIcon}
        />
      </Button>
    </View>
    <View style={styles.titleContainer}>
      <Text style={styles.shoppingTitle}>lottie bag</Text>
    </View>
  </View>
);

export default SuccessLottie;
