import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { View, Text, Image } from 'react-native';
import Animation from 'lottie-react-native';
import LoadingLottie from '../../assets/lotties/loading3.json';
import Screen from '../../components/base/screen';

import styles from './styles';

const MyOrdersScreen = ({
  userOrders,
  navigation,
  getOrdersByUser,
  user
}) => {
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    if (user && user.uid) {
      getOrdersByUser(user.uid)
        .then(() => setLoading(false));
    }
  }, []);


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
        {
          loading ? (
            <Animation
              autoPlay
              loop
              source={LoadingLottie}
              style={styles.lottie}
            />
        ) : (
          <View style={styles.ordersScreen}>
            {
                userOrders && userOrders.data && userOrders.data && 0 < userOrders.data.length &&
                  userOrders.data.map((order, key) => (
                    <View key={key} style={styles.orderLine}>
                      {
                        order && order.order && 0 < order.order.length && (
                          <Image
                            source={{ uri: order.order[0].cover }}
                            style={styles.productImage}
                          />
                        )}
                      <View>
                        { order && order.date && <Text style={styles.textOrder}>{order.date}</Text>}
                        <Text style={styles.textOrder}>{`${order.order.length} Items`}</Text>
                        <Text style={styles.textOrder}>{getOrderPrice(order.order)}</Text>
                      </View>
                    </View>
                  ))
              }
          </View>
          )}
      </ScrollView>
    </Screen>
  );
};

export default MyOrdersScreen;
