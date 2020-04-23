import React from 'react';
import {
  Footer, FooterTab, Button, Icon
} from 'native-base';
import styles from './styles';


const MyFooter = ({ navigation, user }) => {
  const userLink = () => {
    if (user) {
      navigation.navigate('UserProfile');
    } else {
      navigation.navigate('Login');
    }
  };

  return (
    <Footer style={styles.footer}>
      <FooterTab style={styles.footer}>
        <Button style={styles.footerButton}>
          <Icon ios="ios-search" android="ios-search" style={styles.footerIcon} />

        </Button>
        <Button style={styles.footerButton}>
          <Icon ios="ios-bookmark" android="ios-bookmark" style={styles.footerIcon} />

        </Button>
        <Button style={styles.footerButton}>
          <Icon ios="ios-menu" android="ios-menu" style={styles.footerIcon} />

        </Button>
        <Button onPress={userLink} style={styles.footerButton}>
          <Icon ios="ios-person" android="ios-person" style={styles.footerIcon} />

        </Button>
        <Button style={styles.footerButton}>
          <Icon ios="ios-cart" android="ios-cart" style={styles.footerIcon} />

        </Button>
      </FooterTab>
    </Footer>
  );
};

export default MyFooter;
