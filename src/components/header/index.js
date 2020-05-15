import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'native-base';
import styles from './styles';

const Header = ({navigation}) => (
  <View style={styles.homeScreenContainer}>
    <Button bordered dark style={styles.homeScreenButton} onPress={() => navigation.navigate('Home')}>
      <Text style={styles.buttonText}>Woman</Text>
    </Button>
    <Button bordered dark style={styles.homeScreenButton} onPress={() => navigation.navigate('Home')}>
      <Text style={styles.buttonText}>Home</Text>
    </Button>
    <Button bordered dark style={styles.homeScreenButton}>
      <Text style={styles.buttonText}>Man</Text>
    </Button>
  </View>

);

export default Header;
