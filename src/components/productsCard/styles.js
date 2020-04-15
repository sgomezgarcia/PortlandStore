import { StyleSheet, Dimensions } from 'react-native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import { COLORS } from '../../utils/constants';

const styles = StyleSheet.create({
    cardContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: RFPercentage(30),
        padding: RFValue(8),
        height: RFValue(400),
        paddingVertical: RFValue(10),


    },

    cardImage: {
        flex: 4,
    },

    cardText: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
    },

    image: {
        flexBasis: Dimensions.get('window').width / 2,
        height: 290,
    },

    text: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },

});

export default styles;
