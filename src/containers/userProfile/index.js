import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import UserProfileScreen from '../../screens/UserProfileScreen';

import {logout} from '../../actions/users/users';

const mapStateToProps = ({ general }) => ({
    loading: general.loading_user,
    user: general.user,
    userOrders: general.userOrders
});

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({
        logout
    }, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(UserProfileScreen);
