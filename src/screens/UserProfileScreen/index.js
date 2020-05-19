import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Icon, Button } from 'native-base';
import Screen from '../../components/base/screen';
import styles from './styles';


const UserProfileScreen = ({ navigation, user, logout }) => {
  const handleLogout = () => {
    logout(user)
      .then(navigation.navigate('Login'));
  };
  return (
    <Screen header footer user={user} navigation={navigation}>
      <ScrollView>
        <View style={styles.userProfileScreen}>
          <Text style={styles.welcomeUser}>
            {user?.email}
          </Text>
          <View style={styles.infoProfile}>
            <View style={styles.userInfo}>
              <Button style={styles.buttons}>
                <Text style={styles.textInfo}>my orders</Text>
                <Icon ios="ios-arrow-dropright" android="ios-arrow-dropright" style={styles.orderIcon} />
              </Button>
            </View>
            <View style={styles.userInfo}>
              <Button style={styles.buttons}>
                <Text style={styles.textInfo}>my information</Text>
                <Icon ios="ios-arrow-dropright" android="ios-arrow-dropright" style={styles.orderIcon} />
              </Button>
            </View>
            <View style={styles.userInfo}>
              <Button style={styles.buttons}>
                <Text style={styles.textInfo}>wallet</Text>
                <Icon ios="ios-arrow-dropright" android="ios-arrow-dropright" style={styles.orderIcon} />
              </Button>
            </View>
            <View style={styles.userInfo}>
              <Text style={styles.textInfo}>logout</Text>
              <Button style={styles.buttons}>
                <Icon
                  ios="md-log-out"
                  android="md-log-out"
                  style={styles.orderIcon}
                  onPress={handleLogout}
                />
              </Button>
            </View>
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
};

export default UserProfileScreen;
