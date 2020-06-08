import React, { useState } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { Button, Icon } from 'native-base';
import styles from './styles';
import SelectedProduct from '../selectedProduct';


const ProductsCard = ({
  addToCart, product, scrollRef, favoriteProducts
 }) => {
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
            <Button style={styles.button2} title="hola">
              <Icon ios="ios-heart-empty" android="ios-heart-empty" style={styles.bookmark} onPress={() => favoriteProducts(product.id)} />
            </Button>
          </View>
        </View>
      </Button>
      {
        showProduct && (
        <SelectedProduct
          addToCart={addToCart}
          selectProduct={selectProduct}
          scrollRef={scrollRef}
          product={product}
          handleOrderScreen={handleOrderScreen}
          favoriteProducts={favoriteProducts}

        />
      )}
    </>
  );
};


export default ProductsCard;
