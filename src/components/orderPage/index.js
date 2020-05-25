import React from 'react';
import { Icon, Button } from 'native-base';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import OrderItem from '../orderItem';
import styles from './styles';

const OrderPage = ({ handleOrderScreen }) => (
  <View style={styles.menu}>
    <View style={styles.menuLine2}>
      <Button style={styles.iconButton2} onPress={handleOrderScreen} title="hola">
        <Icon
          style={styles.edit}
        >
          <Text style={styles.editText}>edit</Text>
        </Icon>
      </Button>
      <Button style={styles.iconButton} onPress={handleOrderScreen} title="hola">
        <Icon
          ios="ios-close"
          android="ios-close"
          style={styles.closeIcon}
        />
      </Button>
    </View>
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

    <View style={styles.buyContainer}>
      <View style={styles.menuLine}>
        <Text style={styles.textTotal}>total 39,95 EUR</Text>
        <Button style={styles.button} title="hola">
          <Text style={styles.textAdd}>buy</Text>
        </Button>
      </View>
    </View>
  </View>

);

export default OrderPage;
