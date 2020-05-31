import React, { useEffect } from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Screen from '../../components/base/screen';
import styles from './styles';
import ProductsCard from '../../components/productsCard';

const ProductsScreen = ({
  navigation, products, getAllProducts, addToCart
}) => {
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <Screen header footer navigation={navigation}>
      <ScrollView>
        <View style={styles.productContainer}>
          {
            products && products.map((product, key) => (
              <ProductsCard
                addToCart={addToCart}
                key={key}
                product={product}
              />
            ))
          }
        </View>
      </ScrollView>
    </Screen>
  );
};

export default ProductsScreen;
