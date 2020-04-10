import { StyleSheet } from 'react-native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import { COLORS } from '../../utils/constants';

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    backgroundColor: COLORS.black,
    flex: 1,
    justifyContent: 'center',
    padding: RFPercentage(5)
  },
  title: {
    color: COLORS.white,
    fontFamily: 'Futura_Bold',
    fontSize: RFValue(30),
    marginVertical: -15,
    textTransform: 'uppercase'
  },
  subtitle: {
    color: COLORS.white,
    fontSize: RFValue(10),
    marginVertical: 20,
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
    marginVertical: RFPercentage(2),
    width: RFPercentage(20),
  },
  input: {
    color: COLORS.white
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase'
  }
});

export default styles;
