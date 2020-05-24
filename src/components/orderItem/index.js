import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

const OrderItem = () => (
  <View style={styles.productContainer}>
    <Image
      source={{ uri: 'https://www.theblocklearning.com/wp-content/uploads/2018/09/512px-React-icon.svg.png' }}
      style={styles.productImage}
    />
    <View style={styles.descriptionContainer}>
      <View>
        <Text style={styles.description}>mini blue skirt</Text>
        <Text style={styles.size}>M</Text>
      </View>
      <Text style={styles.price}>39,95 EUR</Text>
    </View>
  </View>
);

export default OrderItem;
