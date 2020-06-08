import React, { useState } from 'react';
import { View } from 'react-native';
import SignUp from '../../components/signUp';
import Login from '../../components/login';

// import styles from './styles';

const MODES = {
  login: 'login',
  signUp: 'signUp',
};

const LoginScreen = ({navigation, login, signUp}) => {
  const [ mode, setMode ] = useState(MODES.login);

  const renderScreens = () => {
    if (mode === MODES.signUp) {
      return (
        <SignUp handleBackToLogin={() => setMode(MODES.login)} signUp={signUp} navigation={navigation} />
      );
    }
    return (
      <Login handleSignUp={() => setMode(MODES.signUp)} navigation={navigation} login={login} />
    );
  };

  return (
    <View>
      { renderScreens()}
    </View>
  );
};

export default LoginScreen;
