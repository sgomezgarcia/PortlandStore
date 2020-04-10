import React from 'react';

import { Button, View, Text } from 'react-native';

const SecondScreen = ({ navigation }) => (
  <View>
    <Text>SecondScreen</Text>
    <Button
      title="Go to Details... again"
      onPress={ () => navigation.navigate('Home') }
    />
  </View>
);

export default SecondScreen;
