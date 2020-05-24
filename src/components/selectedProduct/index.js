import React from 'react';
import { View, Text, Image } from 'react-native';
import { Button, Icon } from 'native-base';

import styles from './styles';

const SelectedProduct = ({ product, handleOrderScreen }) => (
  <View style={styles.menu}>
    <View style={styles.menuLine2}>
      <Button style={styles.iconButton} onPress={handleOrderScreen} title="">
        <Icon
          ios="ios-close"
          android="ios-close"
          style={styles.closeIcon}
        />
      </Button>
    </View>
    <View style={styles.productDescription}>
      <Image
        source={{ uri: product.cover }}
        style={styles.productImage}
      />
      <View>
        <Text style={styles.shoppingTitle}>{product.name}</Text>
        <Text style={styles.productNumber}>{product.description}</Text>
        <Text style={styles.shoppingTitle}>{`${product.price} EUR`}</Text>
      </View>
    </View>

  </View>

);

export default SelectedProduct;
