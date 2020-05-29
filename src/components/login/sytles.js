import { StyleSheet } from 'react-native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import { COLORS } from '../../utils/constants';
import { DimensionPercentage } from '../../utils/helpers';

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    backgroundColor: COLORS.black,
    flex: 1,
    justifyContent: 'center',
    padding: RFPercentage(5),
    height: DimensionPercentage(100, 'height'),
 },

  menu: {
    backgroundColor: COLORS.black,
    position: 'absolute',
    zIndex: 10000,
    height: DimensionPercentage(100, 'height'),
    width: DimensionPercentage(100, 'width'),
    paddingTop: RFValue(25),
},
menuLine2: {
    backgroundColor: 'black',
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginRight: RFValue(15),
    marginTop: RFValue(10)
},

  title: {
    color: COLORS.white,
    fontFamily: 'Futura_Bold',
    fontSize: RFValue(30),
    marginVertical: -10,
    textTransform: 'uppercase'
  },

  button: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderColor: COLORS.white,
    borderRadius: 0,
    borderWidth: 1,
    display: 'flex',
    justifyContent: 'center',
    marginTop: RFPercentage(5),
    marginBottom: RFPercentage(2),
    width: RFPercentage(25),
  },

  text: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: RFValue(20)
  },
  iconButton: {
      backgroundColor: 'black',
      alignSelf: 'flex-end'
  },
  closeIcon: {
      elevation: 0,
      fontSize: RFValue(40),
      display: 'flex',
  },
  signButton: {
    backgroundColor: COLORS.black
  },

  signText: {
      color: 'white',
      textDecorationLine: 'underline',
      fontSize: RFValue(20),
  },

  input: {
    color: COLORS.white,
    marginTop: RFValue(5)
  }
});

export default styles;
