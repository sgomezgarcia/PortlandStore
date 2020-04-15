import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from './styles';


const ProductsCard = ({ product }) => (
  <View style={styles.cardContainer}>
    <View style={styles.cardImage}>
      <ImageBackground source={{ uri: product.cover }} style={styles.image} />
    </View>
    <View style={styles.cardText}>
      <Text style={styles.text}>{product.name}</Text>
      <Text style={styles.price}>{`${product.price} EUR`}</Text>
    </View>
  </View>
);

export default ProductsCard;
