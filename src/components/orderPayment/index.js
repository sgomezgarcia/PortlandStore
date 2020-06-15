import React from 'react';
import { View, Text } from 'react-native';
import { Input, Icon, Item } from 'native-base';

import styles from './styles';

const OrderPayment = ({ errorCard, paymentForm, setPaymentForm }) => (
  <View>
    <View style={styles.titleContainer}>
      <Text style={styles.shoppingTitle}>payment</Text>
      <Text style={styles.productNumber}>Enter your card details</Text>
    </View>
    <View style={styles.inputsView}>
      <Item style={styles.items}>
        <Input
          placeholder="Card number"
          style={styles.creditCard}
          onChange={(e) => {
            setPaymentForm({ ...paymentForm, card: e.nativeEvent.text });
          }}
          value={paymentForm?.card}
        />
        <Icon
          ios="ios-card"
          android="ios-card"
          style={styles.cardIcon}
        />
      </Item>
      <Item style={styles.items}>
        <Input
          placeholder="Expire date"
          style={styles.creditCard}
          onChange={(e) => {
            setPaymentForm({ ...paymentForm, expire: e.nativeEvent.text });
          }}
          value={paymentForm?.expire}
        />
      </Item>
      <Item style={styles.items}>
        <Input
          placeholder="Name and surname"
          style={styles.creditCard}
          onChange={(e) => {
            setPaymentForm({ ...paymentForm, holder: e.nativeEvent.text });
          }}
          value={paymentForm?.holder}
        />
      </Item>
      <Item style={styles.items}>
        <Input
          placeholder="CVV2"
          style={styles.creditCard}
          onChange={(e) => {
            setPaymentForm({ ...paymentForm, cvv: e.nativeEvent.text });
          }}
          value={paymentForm?.cvv}
        />
      </Item>
      {
        errorCard && (
          <View style={styles.errorCard}>
            <Text style={styles.textErrorCard}>All fields are required</Text>
          </View>
        )}
    </View>
  </View>

);


export default OrderPayment;
