import { StyleSheet } from 'react-native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import { DimensionPercentage } from '../../utils/helpers';


const styles = StyleSheet.create({
    buttons: {
        backgroundColor: 'transparent',
    },
    buttons1: {
        backgroundColor: 'transparent'
    },

    welcomeUser: {
        marginTop: RFValue(30),
        marginLeft: RFValue(20),
        fontSize: RFValue(20),
        color: 'white',
        display: 'flex',
    },

    orderIcon: {
        marginLeft: RFValue(15),
        padding: 0,
        marginTop: 0,
    },

    userInfo: {
        display: 'flex',
        flexDirection: 'row',
        margin: RFValue(10),
        alignItems: 'center',
    },


    infoProfile: {
        display: 'flex',
        marginTop: RFValue(20),
        marginLeft: RFValue(10),
    },

    userProfileScreen: {
        display: 'flex',
        backgroundColor: 'black',
        height: RFPercentage(100),
        flex: 1,
    },

    textInfo: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: RFValue(25),
        color: 'white',
    },
});

export default styles;
