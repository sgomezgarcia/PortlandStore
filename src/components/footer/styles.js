import { StyleSheet } from 'react-native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import { COLORS } from '../../utils/constants';
import { DimensionPercentage } from '../../utils/helpers';

const styles = StyleSheet.create({

    footerButton: {
        backgroundColor: COLORS.white,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        margin: RFValue(5),
        padding: RFValue(5),
        width: DimensionPercentage(20, 'width'),

    },

    footerIcon: {
        fontSize: 20,
        color: COLORS.black,
    },
    footerIconHome: {
        fontSize: 30,
        color: COLORS.black,
    },

    footer: {
        backgroundColor: 'white',
    },
    cartNumber: {
        marginRight: RFValue(-8),
        fontSize: RFValue(13)
    }
});

export default styles;
