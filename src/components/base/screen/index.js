import React from 'react';
import { View } from 'native-base';
import style from './style';
import Footer from '../../footer';
import Header from '../../header';

const Screen = ({
  footer,
  header,
  children,
  navigation
}) => (
  <View style={style.screen}>
    {header && <Header navigation={navigation} />}
      {children}
    {footer && <Footer navigation={navigation} />}
  </View>

  );

export default Screen;
