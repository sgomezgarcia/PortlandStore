import React from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Icon } from 'native-base';
import Screen from '../../components/base/screen';
import styles from './styles';

const UserProfileScreen = ({navigation, user}) => (
  <Screen header footer user={user} navigation={navigation}>
    <ScrollView>
      <View style={styles.userProfileScreen}>
        <Text style={styles.welcomeUser}>
          {`Welcome ${user?.email}`}
        </Text>
        <View style={styles.infoProfile}>
          <View style={styles.userInfo}>
            <Text style={styles.textInfo}>my orders</Text>
            <Icon ios="ios-arrow-dropright" android="ios-arrow-dropright" style={styles.orderIcon} />
          </View>
          <View style={styles.userInfo}>
            <Text style={styles.textInfo}>my information</Text>
            <Icon ios="ios-arrow-dropright" android="ios-arrow-dropright" style={styles.orderIcon} />
          </View>
          <View style={styles.userInfo}>
            <Text style={styles.textInfo}>logout</Text>
            <Icon
              ios="md-log-out"
              android="md-log-out"
              style={styles.orderIcon}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  </Screen>
);

export default UserProfileScreen;
