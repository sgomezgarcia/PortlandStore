import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { DimensionPercentage } from '../../utils/helpers';
import { COLORS } from '../../utils/constants';


const styles = StyleSheet.create({
  ordersScreen: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },

  orderLine: {
    padding: RFValue(10),
    margin: RFValue(5),
    backgroundColor: COLORS.white,
    display: 'flex',
    flexDirection: 'row'
  },
  textOrder: {
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: RFValue(20)
  },
  productImage: {
    height: DimensionPercentage(20, 'height'),
    width: DimensionPercentage(20, 'width'),
    alignSelf: 'center'
},
});

export default styles;
