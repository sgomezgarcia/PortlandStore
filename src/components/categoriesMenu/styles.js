import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { COLORS } from '../../utils/constants';
import { DimensionPercentage } from '../../utils/helpers';

const styles = StyleSheet.create({
    menu: {
        backgroundColor: 'black',
        position: 'absolute',
        zIndex: 10000,
        height: DimensionPercentage(100, 'height'),
        width: DimensionPercentage(100, 'width'),
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
        alignItems: 'flex-end',
    },

    button: {
        color: 'white',
        backgroundColor: 'black',
        margin: RFValue(10),
        display: 'flex',
    }
});

export default styles;
