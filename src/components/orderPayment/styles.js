import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { COLORS } from '../../utils/constants';
import { DimensionPercentage } from '../../utils/helpers';

const styles = StyleSheet.create({
    creditCard: {
        margin: RFValue(5),
    },
    items: {
        width: DimensionPercentage(95, 'width'),
        marginLeft: RFValue(10),
        marginRight: RFValue(20)
    },

    inputsView: {
        backgroundColor: COLORS.white,
        height: DimensionPercentage(70, 'height'),
        width: DimensionPercentage(90, 'width'),
        marginTop: RFValue(10),
    },

    shoppingTitle: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        margin: RFValue(10),
        fontSize: RFValue(18)
    },
    cardTitle: {
        fontWeight: 'bold',
        margin: RFValue(10),
        marginLeft: RFValue(50),
        fontSize: RFValue(15)
    },

    cardIcon: {
        marginRight: RFValue(10),
        fontSize: RFValue(25)
    },

    titleContainer: {
        padding: RFValue(10),
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        display: 'flex',
        flexDirection: 'column'
    },
    productNumber: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        marginLeft: RFValue(10),
        fontSize: RFValue(15),
        color: 'grey',
        marginBottom: RFValue(8)
    },
});

export default styles;
