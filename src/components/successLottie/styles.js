import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { COLORS } from '../../utils/constants';
import { DimensionPercentage } from '../../utils/helpers';

const styles = StyleSheet.create({
    lottie: {
        height: DimensionPercentage(70, 'height'),
    },

    menu: {
        backgroundColor: COLORS.white,
        position: 'absolute',
        height: DimensionPercentage(100, 'height'),
        width: DimensionPercentage(100, 'width'),
        paddingTop: RFValue(25),
    },

});

export default styles;
