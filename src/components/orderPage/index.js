import React from 'react';
import { Icon, Button} from 'native-base';
import { View, Text, Image } from 'react-native';

import styles from './styles';
import img1 from '../../assets/images/rastas.jpg';

const OrderPage = ({ handleOrderScreen }) => (
  <View style={styles.menu}>
    <View style={styles.menuLine2}>
      <Button style={styles.iconButton} onPress={handleOrderScreen} title="hola">
        <Icon
          ios="ios-close"
          android="ios-close"
          style={styles.closeIcon}
        />
      </Button>
    </View>
    <View>
      <Text>shopping bag</Text>
      <Text>product number</Text>
    </View>
    <View>
      <Image source={img1} />
      <Text>skirt</Text>
      <Text>price</Text>
    </View>

    <View style={styles.menuLine}>
      <Button style={styles.button} title="hola">
        <Text style={styles.textNewIn}>new in</Text>
      </Button>
    </View>
  </View>
);

export default OrderPage;
