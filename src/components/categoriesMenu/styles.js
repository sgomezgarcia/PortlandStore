import { StyleSheet } from 'react-native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import { COLORS } from '../../utils/constants';

const styles = StyleSheet.create({
    menu: {
        backgroundColor: 'black',
        position: 'absolute',
        zIndex: 10000,
        height: RFPercentage(100),
        width: RFPercentage(100),
        paddingTop: RFValue(35),
        paddingLeft: RFValue(15)
    },

    text: {
        color: 'white',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: RFValue(25)
    },

    textNewIn: {
        color: '#FF3EBF',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: RFValue(35),
        paddingBottom: RFValue(40),
        marginTop: RFValue(10)
    },
    closeIcon: {
        color: 'white',
        fontSize: RFValue(40),
    },

    iconButton: {
        backgroundColor: 'black',
    },

    menuLine: {
        backgroundColor: 'black',
    },
    menuLine2: {
        backgroundColor: 'black',
        display: 'flex',
        alignItems: 'center',
    },

    button: {
        color: 'white',
        backgroundColor: 'black',
        margin: RFValue(10),
        display: 'flex',
    }
});

export default styles;
