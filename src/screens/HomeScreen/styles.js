import { StyleSheet } from 'react-native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import { COLORS } from '../../utils/constants';
import { DimensionPercentage } from '../../utils/helpers';

const styles = StyleSheet.create({

  homeScreenContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },

  image: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    paddingVertical: DimensionPercentage(5, 'height'),
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    height: DimensionPercentage(90, 'height'),

  },

  imageText: {
    color: COLORS.white,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: RFValue(50),
  },

  buttonSubtitle: {
    padding: RFValue(8),
    borderColor: COLORS.white,
  },

  textSubtitle: {
    color: COLORS.white,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: RFValue(20),
  },


});

export default styles;
