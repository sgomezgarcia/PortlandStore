import { StyleSheet } from 'react-native';
import { DimensionPercentage } from '../../utils/helpers';
import { COLORS } from '../../utils/constants';

const styles = StyleSheet.create({
    loadingScreen: {
        backgroundColor: COLORS.white
    },

   lottie: {
       height: DimensionPercentage(5, 'height'),
       backgroundColor: COLORS.white,
       display: 'flex',
       alignSelf: 'center',
       marginTop: DimensionPercentage(6, 'height')
    },
   portland: {
       height: DimensionPercentage(5, 'height'),
       width: DimensionPercentage(50, 'width'),
       alignSelf: 'center',
       marginTop: DimensionPercentage(37, 'height')
    }
});

export default styles;
