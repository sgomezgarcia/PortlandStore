import React from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Icon } from 'native-base';
import Screen from '../../components/base/screen';
import styles from './styles';

const UserProfileScreen = ({navigation, user}) => (
  <Screen header footer user={user} navigation={navigation}>
    <ScrollView>
      <View style={styles.UserProfileScreen}>
        <Text>
            hola
        </Text>
      </View>
    </ScrollView>
  </Screen>
);

export default UserProfileScreen;
