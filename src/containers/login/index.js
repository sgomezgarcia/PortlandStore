import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import LoginScreen from '../../screens/LoginScreen';

import { login, signUp, getOrdersByUser } from '../../actions/users/users';

const mapStateToProps = ({ general }) => ({
  loading: general.loading,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({
    login,
    signUp,
    getOrdersByUser
  }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginScreen);
