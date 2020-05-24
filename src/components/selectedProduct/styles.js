import { StyleSheet } from 'react-native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import { COLORS } from '../../utils/constants';

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
    productImage: {
        width: 100,
        marginTop: RFValue(20),
        backgroundColor: 'black',
     },

     productDescription: {
        alignSelf: 'center'
     },

    closeIcon: {
        color: 'black',
        fontSize: RFValue(40),
        display: 'flex',
    },

    edit: {
        color: 'grey',
        fontSize: RFValue(20),
        textTransform: 'uppercase',
    },

    editText: {
        fontWeight: 'bold'
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
        fontSize: RFValue(20),
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
