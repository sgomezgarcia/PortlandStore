import { StyleSheet } from 'react-native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import { COLORS } from '../../utils/constants';

const styles = StyleSheet.create({

description: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    margin: RFValue(10),
    fontSize: RFValue(15),
    marginTop: RFValue(15),

},

price: {
    textTransform: 'uppercase',
    marginHorizontal: RFValue(10),
    fontSize: RFValue(15),
    marginTop: RFValue(15),

},

size: {
    textTransform: 'uppercase',
    margin: RFValue(10),
    fontSize: RFValue(15),
    fontWeight: 'bold'
},

productContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: RFValue(30)
},

descriptionContainer: {
    display: 'flex',
    justifyContent: 'space-between'
},


productImage: {
    width: 150,
    height: 150,
    marginLeft: RFValue(10),
    marginTop: RFValue(20),
    backgroundColor: 'black'
 },

});

export default styles;
