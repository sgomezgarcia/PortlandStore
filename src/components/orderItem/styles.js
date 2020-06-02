import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { COLORS } from '../../utils/constants';
import { DimensionPercentage } from '../../utils/helpers';

const styles = StyleSheet.create({

description: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    margin: RFValue(10),
    fontSize: RFValue(15),
    marginTop: RFValue(15),
    maxWidth: DimensionPercentage(70, 'width')

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
    marginTop: RFValue(10),
    marginBottom: RFValue(10),
    width: DimensionPercentage(100, 'width'),
},

descriptionContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    position: 'relative',
    width: DimensionPercentage(75, 'width'),
},

productImage: {
    width: DimensionPercentage(25, 'width'),
    height: 150,
    marginLeft: RFValue(10),
    marginTop: RFValue(20),
    backgroundColor: 'black'
 },

 iconButton: {
     backgroundColor: COLORS.white,
     elevation: 0,
     position: 'absolute',
     right: 20,
     top: '45%',
 },
 trashIcon: {
    color: COLORS.black
 }
});

export default styles;
