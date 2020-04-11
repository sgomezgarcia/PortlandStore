import { StyleSheet } from 'react-native';
import { COLORS } from '../../utils/constants';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';


const styles = StyleSheet.create({
  buttonText: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },  

  homeScreenContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    
  },

  image: {
    display: 'flex',
    flex: 1,
    resizeMode: 'cover',
    flexDirection: 'row',
  },

  homeScreenButton: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.white,
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
       
  },

});

export default styles;
