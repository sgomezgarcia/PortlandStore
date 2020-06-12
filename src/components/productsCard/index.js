import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { Button, Icon } from 'native-base';
import Toast from 'react-native-simple-toast';

import styles from './styles';
import SelectedProduct from '../selectedProduct';


const ProductsCard = ({
  user, addToCart, product, scrollRef, favoriteProducts, favorite
 }) => {
  const [ showProduct, setShowProduct ] = useState(false);
  const [ saved, setSaved ] = useState(false);

  useEffect(() => {
    if (favorite) {
      setSaved(true);
    }
  }, []);

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
              <Icon
                ios={saved ? 'ios-heart' : 'ios-heart-empty'}
                android={saved ? 'ios-heart' : 'ios-heart-empty'}
                style={styles.bookmark}
                onPress={() => {
                  if (!user || !user.uid) {
                    Toast.show('Log in to save products...', Toast.LONG);
                  } else {
                    if (!saved) {
                      favoriteProducts(product.id)
                        .then(() => {
                          setSaved(true);
                        });
                    } else {
                      setSaved(false);
                    }
                  }
                }}
              />
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
