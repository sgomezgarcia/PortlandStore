import React, { useState } from 'react';
import { Icon, Button } from 'native-base';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import OrderItem from '../orderItem';
import styles from './styles';
import ShoppingBag from '../shoppingBag';
import OrderPayment from '../orderPayment';
import SuccessLottie from '../successLottie';

const MODES = {
  list: 'list',
  card: 'card',
  success: 'success'
};

const OrderPage = ({ handleOrderScreen }) => {
  const [ mode, setMode ] = useState(MODES.list);

  const renderButton = () => {
    const buttonType = {};

    if (mode === MODES.list) {
      buttonType.text = 'buy';
      buttonType.action = () => setMode(MODES.card);
    } else if (mode === MODES.card) {
      buttonType.text = 'pay';
      buttonType.action = () => setMode(MODES.success);
    }

    if (buttonType && buttonType.text && buttonType.action) {
      return (
        <View style={styles.buyContainer}>
          <View style={styles.menuLine}>
            <Text style={styles.textTotal}>total 39,95 EUR</Text>
            <Button style={styles.button} onPress={buttonType.action} title="hola">
              <Text style={styles.textAdd}>{buttonType.text}</Text>
            </Button>
          </View>
        </View>
      );
    }
    return null;
  };

  return (

    <View style={styles.menu}>
      <View style={styles.menuLine2}>
        <Button style={styles.iconButton2} onPress={handleOrderScreen} title="hola">
          <Icon
            style={styles.edit}
          >
            <Text style={styles.editText}>edit</Text>
          </Icon>
        </Button>
        <Button style={styles.iconButton} onPress={handleOrderScreen} title="hola">
          <Icon
            ios="ios-close"
            android="ios-close"
            style={styles.closeIcon}
          />
        </Button>
      </View>
      {
        mode === MODES.list && <ShoppingBag />
      }
      {
        mode === MODES.card && <OrderPayment />
      }
      {
        mode === MODES.success && <SuccessLottie />
      }

      { renderButton()}
    </View>

  );
};
export default OrderPage;
