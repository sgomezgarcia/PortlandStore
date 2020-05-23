import React, { useState, useEffect } from 'react';
import {
  View, Button, Item, Icon, Input
} from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';

import styles from './styles';
import ProductsCard from '../productsCard';

const SearchBar = ({
  handleSearchBar, getAllProducts, products
}) => {
  const [ search, setSearch ] = useState();
  const [ filteredProducts, setFilteredProducts ] = useState([]);
  useEffect(() => {
    getAllProducts();
  }, []);

  const handleChange = (value) => {
    setSearch(value);
    if (3 <= value.length) {
      const getFilteredProducts = products.filter((item) => (item.name.includes(value)));
      setFilteredProducts(getFilteredProducts);
    }
  };


  return (
    <View style={styles.menu}>
      <View style={styles.menuLine2}>
        <Button style={styles.iconButton} onPress={handleSearchBar}>
          <Icon
            ios="ios-close"
            android="ios-close"
            style={styles.closeIcon}
          />
        </Button>
      </View>

      <View style={styles.menuLine}>
        <Item>
          <Input
            style={styles.input}
            placeholder="Search"
            value={search}
            onChange={(e) => {
              handleChange(e.nativeEvent.text);
            }}
          />
        </Item>
        <ScrollView>
          <View style={styles.map}>
            {
            filteredProducts && 0 < filteredProducts.length &&
            filteredProducts.map((product, key) => (
              <ProductsCard product={product} key={key} />
            ))
          }
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default SearchBar;
