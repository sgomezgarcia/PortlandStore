import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { Input, Icon, Item } from 'native-base';

import styles from './styles';

const OrderPayment = () => (
  <View>
    <View style={styles.titleContainer}>
      <Text style={styles.shoppingTitle}>payment</Text>
      <Text style={styles.productNumber}>Enter your card details</Text>
    </View>
    <View style={styles.inputsView}>
      <Item style={styles.items}>
        <Input placeholder="Card number" style={styles.creditCard} />
        <Icon
          ios="ios-card"
          android="ios-card"
          style={styles.cardIcon}
        />
      </Item>
      <Item style={styles.items}>
        <Input placeholder="Expire date" style={styles.creditCard} />
      </Item>
      <Item style={styles.items}>
        <Input placeholder="Holder" style={styles.creditCard} />
      </Item>
      <Item style={styles.items}>
        <Input placeholder="CVV2" style={styles.creditCard} />
      </Item>
    </View>
  </View>

);


export default OrderPayment;
