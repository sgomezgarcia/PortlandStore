import React, { useState } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { Button } from 'native-base';
import styles from './styles';
import SelectedProduct from '../selectedProduct';


const ProductsCard = ({ product }) => {
  const [ showProduct, setShowProduct ] = useState(false);

  const selectProduct = () => {
    setShowProduct(!showProduct);
  };
  const handleOrderScreen = () => {
    setShowProduct(!showProduct);
  };

  return (
    <>
      <Button style={styles.cardContainer} onPress={selectProduct}>
        <View style={styles.cardContainer}>
          <View style={styles.cardImage}>
            <ImageBackground source={{ uri: product.cover }} style={styles.image} />
          </View>
          <View style={styles.cardText}>
            <Text style={styles.text}>{product.name}</Text>
            <Text style={styles.price}>{`${product.price} EUR`}</Text>
          </View>
        </View>
      </Button>
      {
        showProduct && (
        <SelectedProduct
          selectProduct={selectProduct}
          product={product}
          handleOrderScreen={handleOrderScreen}
        />
      )}
    </>
  );
};


export default ProductsCard;
