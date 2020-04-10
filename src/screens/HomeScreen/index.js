import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'native-base';

import styles from './styles';

const HomeScreen = ({ navigation }) => (
  <View style={styles.homeScreenContainer}>
    <Text>HomeScreen</Text>
    <Button title="Hey!" titleStyle={{ color: 'pink' }} />
  </View>
);

export default HomeScreen;
