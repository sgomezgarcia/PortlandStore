import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';


const styles = StyleSheet.create({
    welcomeUser: {
        fontWeight: 'bold',
        margin: RFValue(10),
        textAlign: 'center',
        fontSize: RFValue(20),
    },

    orderIcon: {
        marginLeft: RFValue(15),
    },

    userInfo: {
        display: 'flex',
        flexDirection: 'row',
        margin: RFValue(10),
    },
    infoProfile: {
        display: 'flex',
        marginTop: RFValue(20),
        marginLeft: RFValue(10),
    },

    userProfileScreen: {
        display: 'flex',
        marginRight: RFValue(15),
    },

    textInfo: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: RFValue(25),
    }
});

export default styles;
