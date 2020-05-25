import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { COLORS } from '../../utils/constants';
import { DimensionPercentage } from '../../utils/helpers';

const styles = StyleSheet.create({

    cardContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: DimensionPercentage(49, 'width'),
        height: DimensionPercentage(45, 'height'),
        backgroundColor: 'transparent',
        elevation: 0,
        marginBottom: RFValue(20)
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
