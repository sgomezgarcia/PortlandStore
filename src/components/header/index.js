import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'native-base';
import styles from './styles';
import CategoriesMenu from '../categoriesMenu';

const Header = ({ navigation, categories, filterByCategory }) => {
  const [ menuOpen, setMenuOpen ] = useState(false);
  const [ categoriesGender, setCategoriesGender ] = useState(null);

  const handleMenu = (gender) => {
    setMenuOpen(!menuOpen);
    setCategoriesGender(gender);
  };

  return (
    <View style={styles.homeScreenContainer}>
      <Button bordered dark style={styles.homeScreenButton} onPress={() => handleMenu('W')}>
        <Text style={styles.buttonText}>Woman</Text>
      </Button>
      <Button bordered dark style={styles.homeScreenButton} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Home</Text>
      </Button>
      <Button bordered dark style={styles.homeScreenButton} onPress={() => handleMenu('M')}>
        <Text style={styles.buttonText}>Man</Text>
      </Button>

      {
        menuOpen && (
        <CategoriesMenu
          filterByCategory={filterByCategory}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          handleMenu={handleMenu}
          categoriesGender={categoriesGender}
          categories={categories}
          navigation={navigation}
        />
      )}
    </View>
  );
};

export default Header;
