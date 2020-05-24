import { StyleSheet } from 'react-native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import { COLORS } from '../../utils/constants';

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'black',
        margin: RFValue(20),
        width: RFValue(180),
        display: 'flex',
        justifyContent: 'center',
        elevation: 0,
        height: RFValue(40)
    },

    textAdd: {
        fontSize: RFValue(20),
        textTransform: 'uppercase',
        fontWeight: 'bold',
        display: 'flex',
        alignItems: 'center',
        color: COLORS.white
    },

    menu: {
        backgroundColor: COLORS.white,
        position: 'absolute',
        zIndex: 10000,
        height: RFPercentage(100),
        paddingTop: RFValue(25),
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


    textTotal: {
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },

    productNumber: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        marginLeft: RFValue(10),
        fontSize: RFValue(10),
        color: 'grey'
    },

    shoppingTitle: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        margin: RFValue(10),
        fontSize: RFValue(20)
    },

    iconButton: {
        backgroundColor: 'white',
        elevation: 0
    },

    iconButton2: {
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
        marginLeft: RFValue(300)
    },

    buyContainer: {
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center',
    },
});

export default styles;
