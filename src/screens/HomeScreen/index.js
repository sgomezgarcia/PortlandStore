import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { Button } from 'native-base';
import background from '../../assets/images/portada.jpg';

import styles from './styles';

const HomeScreen = ({ navigation }) => (
  <View style={styles.homeScreenContainer}>
    <ImageBackground style={styles.image} source={background}>
      <Text style={styles.imageText}>new in</Text>
      <Button transparent bordered dark style={styles.buttonSubtitle}>
        <Text style={styles.textSubtitle}>view</Text>
      </Button>
    </ImageBackground>
  </View>
);

export default HomeScreen;
