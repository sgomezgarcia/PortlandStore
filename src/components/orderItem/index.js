import React from 'react';
import { View, Text, Image } from 'react-native';
import { Button, Icon } from 'native-base';
import styles from './styles';

const OrderItem = ({
item, showTrash, setCart, userCart, key
}) => {
  const removeItem = () => {
   const cart = userCart.splice(key, 1);
   setCart(cart);
   console.warn(item);
  };

  return (
    <View style={styles.productContainer}>
      <Image
        source={{ uri: item.cover }}
        style={styles.productImage}
      />
      <View style={styles.descriptionContainer}>
        <View>
          <Text style={styles.description}>{item.name}</Text>
          <Text style={styles.size}>{item.size}</Text>
        </View>
        <Text style={styles.price}>{`${item.price} EUR`}</Text>
        {
          showTrash && (
          <Button style={styles.iconButton} title="hola" onPress={removeItem}>
            <Icon
              ios="md-trash"
              android="md-trash"
              style={styles.trashIcon}
            />
          </Button>
  )
        }
      </View>
    </View>
);
};

export default OrderItem;
