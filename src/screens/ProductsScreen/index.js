import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import Screen from '../../components/base/screen';
import styles from './styles';
import ProductsCard from '../../components/productsCard';

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
          products && products.map((product, key) => <ProductsCard key={key} product={product} />)
        }
      </View>
    </Screen>
  );
};

export default ProductsScreen;
