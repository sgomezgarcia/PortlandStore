import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { COLORS } from '../../utils/constants';
import { DimensionPercentage } from '../../utils/helpers';

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'black',
        margin: RFValue(20),
        width: DimensionPercentage(40, 'width'),
        display: 'flex',
        elevation: 0,
        height: DimensionPercentage(7, 'height'),
        alignSelf: 'center',
        justifyContent: 'center'
    },
    iconButton: {
        backgroundColor: 'transparent',
        elevation: 0
    },
    closeIcon: {
        color: 'black',
        fontSize: RFValue(40),
        display: 'flex',
    },
    menu: {
        backgroundColor: COLORS.white,
        position: 'absolute',
        zIndex: 10000,
        height: DimensionPercentage(100, 'height'),
        width: DimensionPercentage(100, 'width'),
        paddingTop: RFValue(20),
    },

    menuLine2: {
        backgroundColor: COLORS.white,
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'flex-end',
        marginRight: RFValue(10)
    },

    errorText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14
    },

    errorContainer: {
        backgroundColor: 'red',
        padding: RFValue(5),
        width: DimensionPercentage(50, 'width'),
        alignItems: 'center',
        display: 'flex',
        alignSelf: 'center',
        marginTop: RFValue(23)
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

    text: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: RFValue(20),
    },

    titleContainer: {
        padding: RFValue(10),
        borderBottomColor: 'grey',
        borderBottomWidth: 1
    },

    input: {
        color: COLORS.black,
        margin: RFValue(5),
    },

    items: {
        marginLeft: RFValue(5),
        marginRight: RFValue(5),
        padding: RFValue(5)
    }

});

export default styles;
