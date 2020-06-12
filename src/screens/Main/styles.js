import { StyleSheet } from 'react-native';
import { DimensionPercentage } from '../../utils/helpers';


const styles = StyleSheet.create({
   lottie: {
       height: DimensionPercentage(100, 'height'),
       backgroundColor: 'black',
       display: 'flex',
       alignItems: 'center'
   },
   portland: {
       color: 'white',
        alignSelf: 'center',
        marginTop: DimensionPercentage(37, 'height'),
        fontSize: 35,
        fontWeight: 'bold',
        fontFamily: 'Futura',
    }
});

export default styles;
