import React from 'react';
import { View } from 'react-native';
import Animation from 'lottie-react-native';
import Success from '../../assets/lotties/success2.json';

import styles from './styles';

const SuccessLottie = () => (
  <View style={styles.lottie}>
    <Animation
      autoPlay
      loop={false}
      source={Success}
    />
  </View>
);

export default SuccessLottie;
