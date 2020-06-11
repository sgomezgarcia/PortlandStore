import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { format } from 'date-fns';


import { View, Text, Image } from 'react-native';

import Screen from '../../components/base/screen';

import styles from './styles';

const MyOrdersScreen = ({ userOrders, navigation }) => {
  const getOrderPrice = (order) => {
    let price = 0;
    for (let i = 0; i < order.length; i++) {
      price = price + order[i].price;
    }
    return `${price} EUR`;
  };

  return (
    <Screen header footer navigation={navigation}>
      <ScrollView>
        <View style={styles.ordersScreen}>
          {
            userOrders && userOrders.data && userOrders.data.data && 0 < userOrders.data.data.length &&
              userOrders.data.data.map((order, key) => (
                <View key={key} style={styles.orderLine}>
                  {
                    order && order.order && 0 < order.order.length && (
                      <Image
                        source={{ uri: order.order[0].cover }}
                        style={styles.productImage}
                      />
                    )}
                  <View>
                    { order && order.date && <Text style={styles.textOrder}>{format(new Date(order.date), 'dd/MM/yyyy')}</Text>}
                    <Text style={styles.textOrder}>{`${order.order.length} Items`}</Text>
                    <Text style={styles.textOrder}>{getOrderPrice(order.order)}</Text>
                  </View>
                </View>
              ))
          }
        </View>
      </ScrollView>
    </Screen>
  );
};

export default MyOrdersScreen;
