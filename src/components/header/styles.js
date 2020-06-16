import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { COLORS } from '../../utils/constants';
import { DimensionPercentage } from '../../utils/helpers';

const styles = StyleSheet.create({
    homeScreenContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: DimensionPercentage(100, 'width'),
    },

    portland: {
        height: DimensionPercentage(3, 'height'),
        width: DimensionPercentage(25, 'width'),
        display: 'flex',
    },

    buttonText: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },

    homeScreenButton: {
        backgroundColor: COLORS.white,
        borderColor: COLORS.white,
        display: 'flex',
        justifyContent: 'flex-end',
        height: DimensionPercentage(6, 'height'),
        width: 'auto',
        padding: RFValue(7),

    },
    homeScreenButtonLogo: {
        backgroundColor: COLORS.white,
        borderColor: COLORS.white,
        display: 'flex',
        flex: 2,
        justifyContent: 'flex-start',
        paddingStart: RFValue(8),

    },

});

export default styles;
