import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { Button } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import background from '../../assets/images/portada.jpg';
import background2 from '../../assets/images/tres.jpg';
import background3 from '../../assets/images/blue.jpg';
import Screen from '../../components/base/screen';

import styles from './styles';

const HomeScreen = ({ navigation, user }) => (
  <Screen header footer user={user} navigation={navigation}>
    <ScrollView>
      <View style={styles.homeScreenContainer}>
        <ImageBackground style={styles.image} source={background2}>
          <Text style={styles.imageText}>new in</Text>
          <Button transparent bordered dark style={styles.buttonSubtitle}>
            <Text style={styles.textSubtitle}>view</Text>
          </Button>
        </ImageBackground>
      </View>
      <View style={styles.homeScreenContainer}>
        <ImageBackground style={styles.image} source={background}>
          <Text style={styles.imageText}>woman</Text>
          <Button transparent bordered dark style={styles.buttonSubtitle}>
            <Text style={styles.textSubtitle}>view</Text>
          </Button>
        </ImageBackground>
      </View>
      <View style={styles.homeScreenContainer}>
        <ImageBackground style={styles.image} source={background3}>
          <Text style={styles.imageText}>man</Text>
          <Button transparent bordered dark style={styles.buttonSubtitle}>
            <Text style={styles.textSubtitle}>view</Text>
          </Button>
        </ImageBackground>
      </View>
    </ScrollView>
  </Screen>
);

export default HomeScreen;
