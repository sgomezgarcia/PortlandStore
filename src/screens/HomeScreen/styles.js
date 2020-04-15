import { StyleSheet } from 'react-native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import { COLORS } from '../../utils/constants';

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
    paddingVertical: RFPercentage(15),
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    height: RFPercentage(85),

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
