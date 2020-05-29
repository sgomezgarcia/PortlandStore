import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
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
        paddingTop: RFValue(10),
        alignSelf: 'center'

    },

    closeIcon: {
        color: 'black',
        fontSize: RFValue(40),
        display: 'flex',
    },

    card: {
        display: 'flex',
        backgroundColor: 'transparent',
        elevation: 0,
    },


    iconButton: {
        backgroundColor: 'white',
        elevation: 0
    },

    image: {
        height: DimensionPercentage(28, 'height'),
        width: DimensionPercentage(32, 'width'),
        margin: RFValue(1),
    },

    menuLine2: {
        backgroundColor: 'white',
        display: 'flex',
        alignSelf: 'flex-end'
    },
    productContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center'
    },

    shoppingTitle: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        marginBottom: RFValue(20),
        marginLeft: RFValue(10),
        fontSize: RFValue(20)
    },

});

export default styles;
