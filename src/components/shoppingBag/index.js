import React from 'react';
import { Button } from 'native-base';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import OrderItem from '../orderItem';
import styles from './styles';

const ShoppingBag = () => (

  <View>
    <View style={styles.titleContainer}>
      <Text style={styles.shoppingTitle}>shopping bag</Text>
      <Text style={styles.productNumber}>product number</Text>
    </View>
    <ScrollView style={styles.scrollview}>
      <OrderItem />
      <OrderItem />
      <OrderItem />
      <OrderItem />

    </ScrollView>
  </View>

);

export default ShoppingBag;
