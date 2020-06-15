import { StyleSheet } from 'react-native';
import { DimensionPercentage } from '../../utils/helpers';
import { COLORS } from '../../utils/constants';

const styles = StyleSheet.create({
   lottie: {
       height: DimensionPercentage(10, 'height'),
       backgroundColor: COLORS.white,
       display: 'flex',
       alignSelf: 'center',
       marginTop: DimensionPercentage(10, 'height')
    },
   portland: {
       height: DimensionPercentage(10, 'height'),
       width: DimensionPercentage(80, 'width'),
       alignSelf: 'center',
       marginTop: DimensionPercentage(27, 'height')
    }
});

export default styles;
