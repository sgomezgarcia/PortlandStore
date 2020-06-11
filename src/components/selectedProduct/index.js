import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { Button, Icon } from 'native-base';
import Toast from 'react-native-simple-toast';
import styles from './styles';

const SelectedProduct = ({
 addToCart, product, handleOrderScreen, handleFavoriteProduct, scrollRef, favoriteProducts
}) => {
  useEffect(() => {
    scrollRef.current.scrollTo({x: 0, y: 0});
  }, []);
  const [ showSizes, setShowSizes ] = useState(false);
  const ShowHideSizes = () => {
    if (true === showSizes) {
      setShowSizes(false);
    } else {
      setShowSizes(true);
    }
  };

  return (
    <View style={styles.menu}>
      <View style={styles.menuLine2}>
        <Button style={styles.button2} title="hola" onPress={() => favoriteProducts(product.id)}>
          <Icon ios="ios-heart-empty" android="ios-heart-empty" style={styles.bookmark} onPress={() => handleFavoriteProduct()} />
        </Button>
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
        <View style={styles.textOrder}>
          <Text style={styles.shoppingTitle}>{product.name}</Text>
          <Text style={styles.productNumber}>{product.description}</Text>
          <Text style={styles.shoppingTitle}>{`${product.price} EUR`}</Text>
          <Button style={styles.button} title="hola" onPress={ShowHideSizes}>
            <Text style={styles.textAdd}>add</Text>
          </Button>
          <View style={showSizes ? styles.sizesShown : styles.sizesHidden}>
            {
              product && product.sizes && product.sizes.map((item, key) => (
                <Button
                  key={key}
                  title=""
                  style={styles.sizeButton}
                  onPress={() => {
                    const productWithSize = { ...product, size: item };
                    addToCart(productWithSize)
                    .then(() => {
                      Toast.show('Added to cart', Toast.LONG);
                      setShowSizes(false);
                    });
                  }}
                >
                  <Text style={styles.sizeText}>{item}</Text>
                </Button>
              ))
            }
          </View>
        </View>
      </View>
    </View>
  );
};


export default SelectedProduct;
