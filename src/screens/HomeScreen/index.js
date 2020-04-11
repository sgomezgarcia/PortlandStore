import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { Footer, FooterTab, Button } from 'native-base';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import background from '../../assets/images/portada.jpg';

import styles from './styles';

const HomeScreen = ({ navigation }) => (
  <View style={styles.homeScreenContainer}>
    <ImageBackground style={styles.image} source={background}>
      <Button bordered dark style={styles.homeScreenButton}>
        <Text style={styles.buttonText}>Woman</Text>
      </Button>
      <Button bordered dark style={styles.homeScreenButton}>
        <Text style={styles.buttonText}>Home</Text>
      </Button>
      <Button bordered dark style={styles.homeScreenButton}>
        <Text style={styles.buttonText}>Man</Text>
      </Button>
    </ImageBackground>
  </View>
);

export default HomeScreen;
