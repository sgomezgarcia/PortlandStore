import { StyleSheet } from 'react-native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import { COLORS } from '../../utils/constants';

const styles = StyleSheet.create({
    menu: {
        backgroundColor: COLORS.white,
        position: 'absolute',
        zIndex: 10000,
        height: RFPercentage(100),
        width: RFPercentage(100),
        paddingTop: RFValue(35),

    },

    closeIcon: {
        color: 'black',
        fontSize: RFValue(40),
        display: 'flex',
        borderWidth: 0

    },

    iconButton: {
        backgroundColor: 'white',
    },

    menuLine: {
        backgroundColor: 'white',
    },
    menuLine2: {
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        marginLeft: RFValue(350)
    },
});

export default styles;
