import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Main from '../../screens/Main';

import { setUser, autoLogin } from '../../actions/users/users';

const mapStateToProps = ({ general }) => ({
  loading: general.loading
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({
    setUser,
    autoLogin
  }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
