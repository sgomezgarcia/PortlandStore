import React from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import OrderItem from '../orderItem';
import styles from './styles';

const ShoppingBag = ({userCart}) => (

  <View>
    <View style={styles.titleContainer}>
      <Text style={styles.shoppingTitle}>shopping bag</Text>
      <Text style={styles.productNumber}>{`${userCart.length} ${1 === userCart.length ? 'product' : 'products'}`}</Text>
    </View>
    <ScrollView style={styles.scrollview}>
      {
        userCart && 0 < userCart.length && userCart.map((item, key) => (
          <OrderItem key={key} item={item} />
        ))

      }
    </ScrollView>
  </View>

);

export default ShoppingBag;
