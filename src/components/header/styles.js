import { StyleSheet } from 'react-native';
import { COLORS } from '../../utils/constants';


const styles = StyleSheet.create({
    homeScreenContainer: {
        display: 'flex',
        flexDirection: 'row',
    },

    buttonText: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
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
