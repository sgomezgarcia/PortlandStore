import { StyleSheet } from 'react-native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import { COLORS } from '../../utils/constants';
import { DimensionPercentage } from '../../utils/helpers';

const styles = StyleSheet.create({
    menu: {
        backgroundColor: COLORS.white,
        position: 'absolute',
        zIndex: 10000,
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        paddingTop: RFValue(25),
    },

    button: {
        backgroundColor: 'black',
        margin: RFValue(10),
        width: DimensionPercentage(40, 'width'),
        display: 'flex',
        justifyContent: 'center',
        elevation: 0,
        height: DimensionPercentage(5, 'height'),
        alignSelf: 'center'
    },
    textAdd: {
        fontSize: RFValue(15),
        textTransform: 'uppercase',
        fontWeight: 'bold',
        display: 'flex',
        alignItems: 'center',
        color: COLORS.white
    },

    productImage: {
        height: DimensionPercentage(40, 'height'),
        width: DimensionPercentage(50, 'width'),
        marginTop: RFValue(20),
        marginBottom: RFValue(20),
        backgroundColor: 'black',
        alignSelf: 'center'
     },

    closeIcon: {
        color: 'black',
        fontSize: RFValue(40),
        display: 'flex',
    },

    productNumber: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        marginLeft: RFValue(10),
        fontSize: RFValue(15),
        color: 'grey',
        textAlign: 'center'

    },

    shoppingTitle: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        margin: RFValue(10),
        fontSize: RFValue(15),
        textAlign: 'center'
    },

    iconButton: {
        backgroundColor: 'white',
        elevation: 0
    },

    menuLine: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
    },

    menuLine2: {
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        marginLeft: RFValue(350)
    },
});

export default styles;
