import React, { useEffect } from 'react';
import { View, Image } from 'react-native';
import { Button, Icon } from 'native-base';

import styles from './styles';

const FavoriteProduct = ({
  handleFavoriteProduct, getAllProducts, product
}) => {
  useEffect(() => {
    getAllProducts();
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
      <View style={styles.productDescription}>
        <Image
          source={{ uri: 'https://www.theblocklearning.com/wp-content/uploads/2018/09/512px-React-icon.svg.png' }}
          style={styles.productImage}
        />
      </View>

    </View>
  );
};


export default FavoriteProduct;
