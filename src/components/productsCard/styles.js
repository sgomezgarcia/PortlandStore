import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { COLORS } from '../../utils/constants';
import { DimensionPercentage } from '../../utils/helpers';

const styles = StyleSheet.create({
    button2: {
        backgroundColor: 'transparent',
        elevation: 0,
        alignSelf: 'flex-end',
        position: 'absolute',
        top: -55,
        right: 0
    },

    bookmark: {
        color: COLORS.black,

    },

    cardContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: DimensionPercentage(49, 'width'),
        height: DimensionPercentage(45, 'height'),
        backgroundColor: 'transparent',
        elevation: 0,
        marginBottom: RFValue(20),
        position: 'relative'
    },

    cardImage: {
        flex: 4,
        alignSelf: 'center',

    },

    cardText: {
        display: 'flex',
        flex: 1,
        margin: RFValue(8),
    },

    image: {
        width: DimensionPercentage(45, 'width'),
        height: DimensionPercentage(35, 'height'),
    },

    text: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },

});

export default styles;
