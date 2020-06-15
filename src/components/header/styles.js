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
        width: DimensionPercentage(21, 'width'),
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
        justifyContent: 'center',
        width: DimensionPercentage(18, 'width'),
        height: DimensionPercentage(6, 'height'),
        padding: RFValue(7),

    },
    homeScreenButtonLogo: {
        backgroundColor: COLORS.white,
        borderColor: COLORS.white,
        display: 'flex',
        flex: 1,
        justifyContent: 'flex-start',
        paddingStart: RFValue(8),
        width: DimensionPercentage(16, 'width'),

    },

});

export default styles;
