import React, { useState } from 'react';
import {
  Footer, FooterTab, Button, Icon
} from 'native-base';
import styles from './styles';
import SearchBar from '../searchBar';
import OrderPage from '../orderPage';


const MyFooter = ({
 navigation, user, getAllProducts, products
}) => {
  const [ searchBarOpen, setSearchBarOpen ] = useState(false);

  const [ orderScreenOpen, setOrderScreenOpen ] = useState(false);

  const userLink = () => {
    if (user) {
      navigation.navigate('UserProfile');
    } else {
      navigation.navigate('Login');
    }
  };

  const handleSearchBar = () => {
    setSearchBarOpen(!searchBarOpen);
  };

  const handleOrderScreen = () => {
    setOrderScreenOpen(!orderScreenOpen);
  };


  return (
    <>
      <Footer style={styles.footer}>
        <FooterTab style={styles.footer}>
          <Button style={styles.footerButton}>
            <Icon ios="ios-search" android="ios-search" style={styles.footerIcon} onPress={() => handleSearchBar()} />

          </Button>
          <Button style={styles.footerButton}>
            <Icon ios="ios-bookmark" android="ios-bookmark" style={styles.footerIcon} />

          </Button>
          <Button style={styles.footerButton}>
            <Icon ios="ios-home" android="ios-home" style={styles.footerIcon} onPress={() => navigation.navigate('Home')} />

          </Button>
          <Button onPress={userLink} style={styles.footerButton}>
            <Icon ios="ios-person" android="ios-person" style={styles.footerIcon} />

          </Button>
          <Button style={styles.footerButton}>
            <Icon ios="ios-cart" android="ios-cart" style={styles.footerIcon} onPress={handleOrderScreen} />

          </Button>
        </FooterTab>
      </Footer>
      {
        searchBarOpen && (
        <SearchBar
          searchBarOpen={searchBarOpen}
          handleSearchBar={handleSearchBar}
          getAllProducts={getAllProducts}
          products={products}
        />
      )}
      {
        orderScreenOpen && (
        <OrderPage
          orderScreenOpen={orderScreenOpen}
          handleOrderScreen={handleOrderScreen}
        />
      )}
    </>
  );
};

export default MyFooter;
