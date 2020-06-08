import React, { useState, useEffect } from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { Button, Icon } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import styles from './styles';

const FavoriteProduct = ({
  handleFavoriteProduct, getAllProducts, products, userFavorites
}) => {
  const [ favs, setFavs ] = useState(null);
  useEffect(() => {
    if (!products) {
      getAllProducts();
    }
    const findFavs = products.filter((item) => userFavorites.includes(item.id));
    setFavs(findFavs);
  }, []);

  return (
    <View style={styles.menu}>
      <View style={styles.menuLine2}>
        <Button style={styles.iconButton} onPress={handleFavoriteProduct} title="">
          <Icon
            ios="ios-close"
            android="ios-close"
            style={styles.closeIcon}
          />
        </Button>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.shoppingTitle}>my list</Text>
      </View>
      <ScrollView style={styles.scroll}>
        <View style={styles.productContainer}>
          {
            favs && favs.map((product, key) => (
              <View key={key} product={product} style={styles.card}>
                <ImageBackground source={{ uri: product.cover }} style={styles.image} />
              </View>
))
          }
        </View>
      </ScrollView>
    </View>
  );
};


export default FavoriteProduct;
