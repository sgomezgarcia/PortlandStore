import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import Screen from '../../components/base/screen';
import styles from './styles';

const ProductsScreen = ({
 navigation, loading, products, getAllProducts
}) => {
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <Screen header footer navigation={navigation}>
      <View style={styles.productContainer}>
        {
          products.map((product) => <Text>{product.name}</Text>)
        }
      </View>
    </Screen>
  );
};

export default ProductsScreen;
