import React from 'react';
import { Icon, Button } from 'native-base';
import { View, Text, Image } from 'react-native';

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
    <View>
      <Text style={styles.shoppingTitle}>shopping bag</Text>
      <Text style={styles.productNumber}>product number</Text>
    </View>
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
