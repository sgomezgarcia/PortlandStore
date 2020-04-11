import { StyleSheet } from 'react-native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import { COLORS } from '../../utils/constants';

const styles = StyleSheet.create({

    footerButton: {
        backgroundColor: COLORS.white,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        margin: RFValue(5),
        padding: RFValue(5),
        width: RFPercentage(20),

    },

    footerIcon: { 
        fontSize: 20, 
        color: COLORS.black,
    },

    footer: {
        backgroundColor: 'white',
    },
});

export default styles;