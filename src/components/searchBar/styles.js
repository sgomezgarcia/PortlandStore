import { StyleSheet, Dimensions } from 'react-native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import { COLORS } from '../../utils/constants';
import { DimensionPercentage } from '../../utils/helpers';

const styles = StyleSheet.create({
    menu: {
        backgroundColor: COLORS.white,
        position: 'absolute',
        zIndex: 10000,
        height: DimensionPercentage(100, 'height'),
        width: DimensionPercentage(100, 'width'),
        paddingTop: RFValue(35),

    },

    closeIcon: {
        color: 'black',
        fontSize: RFValue(40),
        display: 'flex'
    },
    map: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        elevation: 0
    },

    iconButton: {
        backgroundColor: 'white',
        elevation: 0,
        alignItems: 'flex-end'

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

    input: {
        backgroundColor: 'white',
        display: 'flex',
        borderColor: 'grey',
        borderWidth: 1,
        margin: RFValue(10)
    },

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
