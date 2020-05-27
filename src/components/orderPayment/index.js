import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { Button, Icon, Input } from 'native-base';

import styles from './styles';

const OrderPayment = () => (

  <View style={styles.menu}>
    <Input name="Credit Card Number">ES12 123 456 789 876</Input>
  </View>

);


export default OrderPayment;
