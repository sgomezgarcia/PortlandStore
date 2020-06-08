import React from 'react';
import {
  View, Button, Text, Icon
} from 'native-base';
import styles from './styles';

const CategoriesMenu = ({
  categories,
  categoriesGender,
  filterByCategory,
  handleMenu,
}) => {
  const filterProducts = (category) => {
    filterByCategory(category)
      .then(() => {
        // navigate to products
      })
      .catch(() => {
        // mostrar toast error
      });
  };

  return (
    <View style={styles.menu}>
      <View style={styles.menuLine2}>
        <Button style={styles.iconButton} onPress={handleMenu}>
          <Icon
            ios="ios-close"
            android="ios-close"
            style={styles.closeIcon}
          />
        </Button>
      </View>

      <View style={styles.menuLine}>
        <Button style={styles.button}>
          <Text style={styles.textNewIn}>new in</Text>
        </Button>
      </View>
      {
        'W' === categoriesGender && categories.woman && categories.woman.map((category, key) => (
          <View style={styles.menuLine} key={key} category={category}>
            <Button style={styles.button} onPress={() => filterProducts(category)}>
              <Text style={styles.text}>{category.name}</Text>
            </Button>
          </View>
        ))
      }

      {
        'M' === categoriesGender && categories.man && categories.man.map((category, key) => (
          <View style={styles.menuLine} key={key} category={category} onPress={() => filterProducts(category)}>
            <Button style={styles.button}>
              <Text style={styles.text}>{category.name}</Text>
            </Button>
          </View>
        ))
      }
    </View>
  );
};

export default CategoriesMenu;
