import React, { useState } from 'react';
import { Icon, Button } from 'native-base';
import { View, Text } from 'react-native';
import styles from './styles';
import ShoppingBag from '../shoppingBag';
import OrderPayment from '../orderPayment';
import SuccessLottie from '../successLottie';

const MODES = {
  list: 'list',
  card: 'card',
  success: 'success'
};

const OrderPage = ({ handleOrderScreen, userCart, setCart }) => {
  const [ mode, setMode ] = useState(MODES.list);
  const [ showTrash, setShowTrash ] = useState(false);
  const editButton = () => {
    setShowTrash(!showTrash);
  };

  const getTotal = () => {
    let total = 0;
    for (let i = 0; i < userCart.length; i++) {
      total = total + userCart[i].price;
    }
    return total;
  };


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
            <Text style={styles.textTotal}>{`TOTAL ${getTotal()} EUR`}</Text>
            <Button style={styles.button} onPress={buttonType.action} title="hola">
              <Text style={styles.textAdd}>{buttonType.text}</Text>
            </Button>
          </View>
        </View>
      );
    }
    return null;
  };

  const renderEditButton = () => {
    if (mode === MODES.list) {
      return (
        <View style={styles.menuLine2}>
          <Button style={styles.iconButton2} onPress={editButton} title="">
            <Icon
              style={styles.edit}
            >
              <Text style={styles.editText}>{showTrash ? 'cancel' : 'edit'}</Text>
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
      );
    } if (mode === MODES.card) {
      return (
        <View style={styles.menuLine2}>
          <Button style={styles.iconButton} onPress={handleOrderScreen} title="hola">
            <Icon
              ios="ios-close"
              android="ios-close"
              style={styles.closeIcon}
            />
          </Button>
        </View>
      );
    }
      return (
        <View style={styles.menuLine2}>
          <Button style={styles.iconButton} onPress={handleOrderScreen} title="hola">
            <Icon
              ios="ios-checkmark"
              android="ios-checkmark"
              style={styles.closeIcon}
            />
          </Button>
        </View>
      );
  };

  return (

    <View style={styles.menu}>
      { renderEditButton()}
      {
        mode === MODES.list && <ShoppingBag userCart={userCart} showTrash={showTrash} setCart={setCart} />
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
