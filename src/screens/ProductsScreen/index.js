import React from 'react';
import { View, Text } from 'react-native';
import Screen from '../../components/base/screen';
import styles from './styles';

const ProductsScreen = ({ navigation }) => (
  <Screen header footer navigation={navigation}>
    <View style={styles.productContainer}>
      <Text>productoooos</Text>
    </View>
  </Screen>
);

export default ProductsScreen;
