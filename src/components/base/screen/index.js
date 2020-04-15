import React from 'react';
import { View } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import style from './style';
import Footer from '../../footer';
import Header from '../../header';

const Screen = ({
    footer,
    header,
    children,
    navigation
}) => (
  <ScrollView>
    <View style={style.screen}>
      { header && <Header navigation={navigation} />}
      { children }
      { footer && <Footer navigation={navigation} />}
    </View>
  </ScrollView>

);

export default Screen;
