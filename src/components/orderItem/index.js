import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

const OrderItem = ({item}) => (
  <View style={styles.productContainer}>
    <Image
      source={{ uri: item.cover }}
      style={styles.productImage}
    />
    <View style={styles.descriptionContainer}>
      <View>
        <Text style={styles.description}>{item.name}</Text>
        <Text style={styles.size}>{item.size}</Text>
      </View>
      <Text style={styles.price}>{`${item.price} EUR`}</Text>
    </View>
  </View>
);

export default OrderItem;
